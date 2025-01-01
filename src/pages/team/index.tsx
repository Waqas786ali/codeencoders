import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Header from "./header/Header";
import About from "./about/About";
import Founders from "./founders/Founders";
import TeamLeads from "./team-leads/TeamLeads";
import MeetTeam from "./meet-team/MeetTeam";
import Contact from "../home/contact/Contact";
import TheQoute from "./qoute/TheQoute";

const TheTeam: React.FC = () => {

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
    //     stagger: 0.2,
    //     duration: 1,
    //   }
    // );

    gsap.timeline({
      scrollTrigger: {
        trigger: '.about_img',
        start: 'center center',
        end: 'center top',
        scrub: 1.5,
        markers: false,
        pin: ".team_about",
        invalidateOnRefresh: true,
      },
    })
      .fromTo(
        '.about_img',
        { scale: 0.7, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power3.inOut',
        }
      );

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

    gsap.fromTo(
      ".text_apear1",
      {
        opacity: 1,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".text_apear1",
          start: "top 80%",
          end: "bottom 0%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        stagger: 0.1,
        duration: 1,
      }
    );


    const animateTeamLeadCards = (selector: string) => {


      // Animate each element in sequence
      gsap.utils.toArray(selector).forEach((element: any, index: number) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            x: -200,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.5,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 20%",
              markers: false,
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });

      return gsap;
    };

    animateTeamLeadCards(".info_card")
    animateTeamLeadCards(".info_card1")


    gsap.fromTo(
      ".text_apear2",
      {
        opacity: 1,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".text_apear2",
          start: "top 80%",
          end: "bottom 0%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        stagger: 0.1,
        duration: 1,
      }
    );

    gsap.fromTo(
      ".text_apear3",
      {
        opacity: 1,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".text_apear3",
          start: "top 80%",
          end: "bottom 0%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        stagger: 0.1,
        duration: 1,
      }
    );

  });

  return (
    <main className={`overflow-x-hidden -mt-32`}>
      <Header />
      <About />
      <Founders />
      <TeamLeads />
      <TheQoute />
      <MeetTeam />
      <Contact />
    </main>
  );
};

export default TheTeam;