import { useEffect, useRef } from "react";
import "./customCursor.css";
import { useAppContext } from "../../../context/AppContext";

const CustomCursor = () => {
  const ballPosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mousePosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const angleRef = useRef(0); // Angle for rotation
  const animationFrameId = useRef<number | null>(null);
  const orbitRadius = 40; // Orbit radius
  const speed = 0.07; // Smooth follow speed

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let lastTime = performance.now();

    const animateCursor = (currentTime: number) => {
      const deltaTime = currentTime - lastTime; // Time since the last frame
      lastTime = currentTime;

      const distX = mousePosition.current.x - ballPosition.current.x;
      const distY = mousePosition.current.y - ballPosition.current.y;

      // Smooth follow the cursor
      ballPosition.current.x += distX * speed;
      ballPosition.current.y += distY * speed;

      // Smooth orbit rotation using time-based increment
      angleRef.current += (deltaTime / 700) * 1; // 1 radian per second
      const orbitX = ballPosition.current.x + orbitRadius * Math.cos(angleRef.current);
      const orbitY = ballPosition.current.y + orbitRadius * Math.sin(angleRef.current);

      const ball = document.querySelector(".ball") as HTMLElement;
      const redCircle = document.querySelector(".circle") as HTMLElement;

      if (ball) {
        ball.style.transform = `translate(${orbitX - 15}px, ${orbitY - 15}px)`; // Center ball
      }

      if (redCircle) {
        redCircle.style.transform = `translate(${mousePosition.current.x - 5}px, ${mousePosition.current.y - 5}px)`;
      }

      animationFrameId.current = requestAnimationFrame(animateCursor);
    };

    animationFrameId.current = requestAnimationFrame(animateCursor);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, []);


   const {isNavbarHovered } = useAppContext();

  return (
    <>
      <div className="cursor">
        {/* Orbiting ball */}
        <div
          className="ball"
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            // backgroundColor: "#fff",
            // boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
            borderRadius: "50%",
            pointerEvents: "none",
            display: isNavbarHovered ? "none" : "block",
          }}
        >
          <div
            className="flame"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "60px",
              height: "60px",
              // background: "radial-gradient(circle, #2401D5 0%, #25BAFF 30%, #FF980A 60%, #FF5900 100%)",
              // background: "radial-gradient(72.12% 70.71% at 50% 50%, #000 0%, #25BAFF 100%);",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.7,
              animation: "flame 1s infinite",
            }}
          ></div>
        </div>
      <div
        className="circle"
        style={{
          position: "fixed",
          width: "10px",
          height: "10px",
          backgroundColor: "#25BAFF",
          // background: "radial-gradient(circle, rgba(0, 255, 255, 0.5) 0%, rgba(0, 255, 255, 0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999, // Ensure it stays on top
        }}
      ></div>
      </div>
    </>
  );
};

export default CustomCursor;
