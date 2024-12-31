import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";
import { BufferAttribute, ShaderMaterial } from "three";
import { Perf } from 'r3f-perf'
import { useTexture } from "@react-three/drei";

// Extend ShaderMaterial for type support
extend({ ShaderMaterial });

const CustomShaderSphere: React.FC = () => {

  
  const meshRef = useRef<THREE.Mesh>(null);
  const displacementRef = useRef<Float32Array>();
  const noiseRef = useRef<Float32Array>();
  

  const texture = useTexture("/assets/images/home/header/water.jpg");

  // Ensure the texture wraps correctly
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  const uniforms = useMemo(
    () => ({
      amplitude: { value: 1.0 },
      color: { value: new THREE.Color(0xff2200) }, // Start with orange
      colorTexture: { value: texture }, // Use the loaded texture here
    }),
    [texture] // Add `texture` as a dependency
  );

  // useEffect(() => {
  //   if (uniforms.colorTexture.value instanceof THREE.Texture) {
  //     uniforms.colorTexture.value.wrapS = THREE.RepeatWrapping;
  //     uniforms.colorTexture.value.wrapT = THREE.RepeatWrapping;
  //   }
  // }, [uniforms]);

  // Vertex and fragment shaders as template literals
  const vertexShader = `
    uniform float amplitude;
    attribute float displacement;
    varying vec3 vNormal;
    varying vec2 vUv;
    void main() {
      vNormal = normal;
      vUv = (0.5 + amplitude) * uv + vec2(amplitude);
      vec3 newPosition = position + amplitude * normal * vec3(displacement);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vNormal;
    varying vec2 vUv;
    uniform vec3 color;
    uniform sampler2D colorTexture;
    void main() {
      vec3 light = vec3(0.5, 0.2, 1.0); // Light direction
      light = normalize(light);
      
      // Modify the light intensity calculation to reduce dark areas
      float dProd = dot(vNormal, light) * 0.1 + 0.9; // Adjusted for more light and less dark

      vec4 tcolor = texture2D(colorTexture, vUv);
      vec4 gray = vec4(vec3(tcolor.r * 0.3 + tcolor.g * 0.59 + tcolor.b * 0.11), 1.0);
      
      // Multiply by color and adjusted light intensity
      gl_FragColor = gray * vec4(vec3(dProd) * vec3(color), 1.0);
    }
  `;

  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(50, 128, 64);
    const displacement = new Float32Array(geo.attributes.position.count);
    const noise = new Float32Array(geo.attributes.position.count);

    for (let i = 0; i < displacement.length; i++) {
      noise[i] = Math.random() * 5;
    }

    geo.setAttribute("displacement", new BufferAttribute(displacement, 1));
    displacementRef.current = displacement;
    noiseRef.current = noise;

    return geo;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
  
    if (displacementRef.current && noiseRef.current) {
      const displacement = displacementRef.current;
      const noise = noiseRef.current;
  
      for (let i = 0; i < displacement.length; i++) {
        displacement[i] = Math.sin(0.1 * i + time * 10);
  
        noise[i] += 0.5 * (0.5 - Math.random());
        noise[i] = THREE.MathUtils.clamp(noise[i], -5, 5);
  
        displacement[i] += noise[i];
      }
  
      if (meshRef.current) {
        meshRef.current.geometry.attributes.displacement.needsUpdate = true;
        meshRef.current.rotation.y = 0.01 * time * 10;
        meshRef.current.rotation.z = 0.01 * time * 10;
  
        // Cycle through three color shades (blue to orange) every 5 seconds
        const cycleTime = 10; // Cycle duration in seconds
        const t = (Math.sin((time / cycleTime) * Math.PI * 2) + 1) / 2; // Oscillates smoothly between 0 and 1
  
        // Define the colors
        const orange = new THREE.Color(0xE55E07);  // Orange
        const orange1 = new THREE.Color(0xF27600);
        const orange2 = new THREE.Color(0xe68909);
        const orange3 = new THREE.Color(0xcc7a08);
        const orange4 = new THREE.Color(0xb36a07);
  
        const blue = new THREE.Color(0x0500B1);    // Blue
        const blue1 = new THREE.Color(0x25baff);
        const blue2 = new THREE.Color(0x3bc1ff);
        const blue3 = new THREE.Color(0x51c8ff);
        const blue4 = new THREE.Color(0x66cfff);
        const blue5 = new THREE.Color(0x7cd6ff);
  
        // Interpolation phase 1: Blue shades (Smooth transition through blue shades)
        const mixedBlue = blue.clone().lerp(blue1, t);
        const mixedBlue2 = mixedBlue.clone().lerp(blue2, t);
        const mixedBlue3 = mixedBlue2.clone().lerp(blue3, t);
        const mixedBlue4 = mixedBlue3.clone().lerp(blue4, t);
        const mixedBlue5 = mixedBlue4.clone().lerp(blue5, t);
  
        // Interpolation phase 2: Transition from Blue shades to Orange shades
        const mixedColor = mixedBlue5.clone().lerp(orange, t);
        const mixedColor1 = mixedColor.clone().lerp(orange1, t);
        const mixedColor2 = mixedColor1.clone().lerp(orange2, t);
        const mixedColor3 = mixedColor2.clone().lerp(orange3, t);
        const finalColor = mixedColor3.clone().lerp(orange4, t);
  
        // Apply the final color to the shader material
        uniforms.color.value = finalColor;
      }
    }
  });
  
  

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};


const heroShader: React.FC = () => {
  const DEBUG_MODE = false;
  return (
    <Canvas className="shader_canvas" camera={{ position: [0, 0, 280], fov: 30 }}>
      <ambientLight intensity={0.5} />
      <CustomShaderSphere />
      {DEBUG_MODE && <Perf/>}
    </Canvas>
  );
};

export default heroShader;
