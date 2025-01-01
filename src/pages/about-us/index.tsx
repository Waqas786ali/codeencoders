import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap';
import Contact from "../home/contact/Contact"
import TheART from "./art/TheArt"
import TheClient from "./client/TheClient"
import TheCraft from "./craft/TheCraft"
import Header from "./header/Header"
import MatrixEffectWrapper from "./MatrixEffectWrapper"
import TheMethod from "./method/TheMethod"

const AboutUs = () => {

  const {shouldAnimePlay } = useAppContext();
    useEffect(() => {
      if (!shouldAnimePlay) return;
  
      const animation = gsap.fromTo(
         ".text_apear",
         {
           opacity: 1,
           y: 200,
         },
         {
           opacity: 1,
           y: 0,
           stagger: 0.02,
           duration: 3,
         }
       );
      
      return () => {
        animation.kill();
      };
    }, [shouldAnimePlay]);

  useGSAP(() => {

    // gsap.fromTo(
    //   ".text_apear",
    //   {
    //     opacity: 1,
    //     y: 100,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     scrollTrigger: {
    //       trigger: ".text_apear",
    //       start: "top 100%",
    //       end: "bottom 60%",
    //       toggleActions: "play none none none",
    //     },
    //     stagger: 0.02, // Each letter (or child) is staggered by 0.02s
    //     duration: 1, // Total duration of the animation (2 seconds)
    //   }
    // );

    // Split text into individual letters for animation
    const splitTextIntoLetters = (selector: string) => {
      gsap.utils.toArray(selector).forEach((element: any) => {
        const text = element.textContent;
        const wrappedText = text
          ?.split('')
          .map((letter: any) => `<span class='letter'>${letter}</span>`)
          .join('');
        element.innerHTML = wrappedText;
      });
    };

    // Letter-by-letter animation using a timeline for sequence control
    const animateLetterByLetter = (selector: string) => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } }); // Create timeline

      // Animate each element in sequence
      gsap.utils.toArray(selector).forEach((element: any, index: number) => {
        const letters = element.querySelectorAll('.letter');
        timeline.fromTo(
          letters,
          {
            opacity: 0.2,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 60%",
              scrub: 1,
            },
            stagger: 0.02,
            duration: 1.5,
          },
          index === 0 ? 0 : '+=0.05'
        );
      });

      return timeline;
    };

    // Apply the letter-split effect and animation to the text
    splitTextIntoLetters('.parallaxText');
    animateLetterByLetter('.parallaxText');
  });

  return (
    <main className="overflow-y-auto -mt-24 w-full">
      <MatrixEffectWrapper >
        <div>
          <div
            className="w-full fixed inset-0 h-screen -z-10"
            style={{
              backgroundImage: 'url(/assets/images/about/header/header_bg.svg)',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
            }}
          >
            {/* <div className="relative h-full">
             <div className="left_shade left-[-100%] sm:left-[-22px]"></div>
             <div className="right_shade right-[-100%] sm:right-[-22px]"></div>
            </div> */}
          </div>
          <div className="z-10 overflow-y-auto">
            <Header />
            <TheART />
            <TheCraft />
            <TheMethod />
            <TheClient />
            <Contact />
          </div>
        </div>
      </MatrixEffectWrapper>
    </main>
  )
}

export default AboutUs
