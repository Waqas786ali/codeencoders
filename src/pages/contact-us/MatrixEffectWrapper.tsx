import React, { useEffect, useRef } from 'react';

interface MatrixEffectWrapperProps {
  children: React.ReactNode;
  backgroundImageUrl: string; // Background image URL prop
}

const MatrixEffectWrapper: React.FC<MatrixEffectWrapperProps> = ({ children, backgroundImageUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    // Full-screen dimensions
    const cw = window.innerWidth;
    const ch = window.innerHeight;

    // Canvas size setup
    canvas.width = cw;
    canvas.height = ch;

    const fontSize = 200;
    const maxColumns = Math.floor(cw / fontSize);
    const fallingCharArr: Point[] = [];

    // // Load background image
    // const backgroundImage = new Image();
    // backgroundImage.src = backgroundImageUrl;

    // backgroundImage.onload = () => {
    //   // Draw background image on canvas
    //   ctx.drawImage(backgroundImage, 0, 0, cw, ch);
    // };

    // Point class to handle falling objects (always circle)
    class Point {
      x: number;
      y: number;
      speed: number;
      radius: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.speed = randomFloat(2,3);
        this.radius = randomFloat(2.5, 2.5); // Size of the starting circle
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw circle only, remove the line logic
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 128, 255, 1)'; // Blue color
        ctx.fill();
        ctx.closePath();

        // Update position
        this.y += this.speed;
        if (this.y > ch) {
          this.y = randomFloat(-100, 0);
          this.speed = randomFloat(2,3);
        }
      }
    }

    // Utility function to generate random numbers within a range
    function randomFloat(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    // Create falling points
    for (let i = 0; i < maxColumns; i++) {
      fallingCharArr.push(new Point(i * fontSize, randomFloat(-500, 0)));
    }

    let animationFrameId: number;

    // Animation loop
    function update() {
      // Draw the background image
      // ctx.drawImage(backgroundImage, 0, 0, cw, ch);

      // Overlay a transparent background for the "fade" effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Slight transparency for fading effect
      ctx.fillRect(0, 0, cw, ch);

      // Draw the falling circles
      for (let i = 0; i < fallingCharArr.length; i++) {
        fallingCharArr[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(update); // Store the animation frame ID
    }

    update();

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default MatrixEffectWrapper;
