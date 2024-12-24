import React from 'react'

const TextReveal = () => {
  return (
    <div>TextReveal</div>
  )
}

export default TextReveal


// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// interface TextRevealProps {
//   text: string;
//   duration?: number;
//   stagger?: number;
//   ease?: string;
//   start?: string;
//   triggerElement?: string; // Add a prop for the trigger element
// }

// const TextReveal: React.FC<TextRevealProps> = ({
//   text,
//   duration = 2,
//   stagger = 0.1,
//   ease = "power3.out",
//   start = "top 80%",
//   triggerElement = ".text-reveal", // Default trigger element for both
// }) => {
//   const revealRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (revealRef.current) {
//       const words = revealRef.current.querySelectorAll(".word");
//       gsap.from(words, {
//         y: 300,
//         opacity: 1,
//         stagger,
//         duration,
//         ease,
//         scrollTrigger: {
//           trigger: triggerElement, // Same trigger for both TextReveal instances
//           start,
//           toggleActions: "play none none reverse",
//         },
//       });
//     }
//   });

//   return (
//     <div ref={revealRef} className="text-reveal overflow-hidden">
//       {text.split(" ").map((word, index) => (
//         <span key={index} className="word inline-block">
//           {word}&nbsp;
//         </span>
//       ))}
//     </div>
//   );
// };

// export default TextReveal;
