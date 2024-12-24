import React, { useRef, useEffect, useState } from 'react';

// A helper function to create and bind a texture
const createTexture = (gl: WebGLRenderingContext, width: number, height: number): WebGLTexture => {
  const texture = gl.createTexture();
  if (!texture) {
    throw new Error('Failed to create WebGL texture');
  }

  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return texture;
};

interface WaterEffectProps {
  children: React.ReactNode;
}

const WaterEffect: React.FC<WaterEffectProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const shaderProgramRef = useRef<WebGLProgram | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Update canvas size on window resize
  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize WebGL context, shader, and other setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }
    glRef.current = gl;

    // Set up shaders
    const vertexShaderSource = `
      attribute vec4 a_position;
      varying vec2 vUv;
      void main() {
        vUv = a_position.xy * 0.5 + 0.5;
        gl_Position = a_position;
      }
    `;
    const fragmentShaderSource = `
      precision mediump float;
      uniform float time;
      uniform float factor;
      uniform sampler2D uTexture;
      varying vec2 vUv;

      void main() {
        float amplitude = 0.015 * factor;
        float frequency = 4.0;
        float x = vUv.y * frequency + time * 0.7;
        float y = vUv.x * frequency + time * 0.3;
        vec2 uv = vUv;
        uv.x += 0.5 * amplitude * cos(x);
        uv.y += 0.5 * amplitude * sin(y);
        vec4 textureColor = texture2D(uTexture, uv);
        gl_FragColor = textureColor;
      }
    `;

    // Compile shaders
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling shader:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

    // Create shader program
    const shaderProgram = gl.createProgram();
    if (!shaderProgram) {
      console.error('Failed to create shader program');
      return;
    }

    gl.attachShader(shaderProgram, vertexShader!);  // `vertexShader!` asserts that it is not null
    gl.attachShader(shaderProgram, fragmentShader!);  // `fragmentShader!` asserts that it is not null
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error('ERROR linking program:', gl.getProgramInfoLog(shaderProgram));
    }

    shaderProgramRef.current = shaderProgram;
    gl.useProgram(shaderProgram);

    // Set up geometry
    const vertices = new Float32Array([
      -1.0, -1.0,
      1.0, -1.0,
      -1.0, 1.0,
      1.0, 1.0,
    ]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(shaderProgram, 'a_position');
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLocation);

    // Set up texture for children
    const texture = createTexture(gl, canvasSize.width, canvasSize.height);
    const textureLocation = gl.getUniformLocation(shaderProgram, 'uTexture');

    // Animation loop
    let lastTime = 0;
    let factor = 0.0;
    const animate = (timestamp: number) => {
      gl.clear(gl.COLOR_BUFFER_BIT);

      const deltaTime = (timestamp - lastTime) * 0.001;
      lastTime = timestamp;
      factor = Math.abs(Math.sin(timestamp * 0.001));

      gl.uniform1f(gl.getUniformLocation(shaderProgram, 'time'), timestamp * 0.001);
      gl.uniform1f(gl.getUniformLocation(shaderProgram, 'factor'), factor);

      // Render content into the texture
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(textureLocation, 0);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); // Render the effect
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Resize handler
    const handleResize = () => {
      const { width, height } = canvasSize;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      gl.clearColor(0, 0, 0, 1);
    };
  }, [canvasSize]);

  return (
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default WaterEffect;
