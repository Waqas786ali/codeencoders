import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Header from './header/Header';
import Services from './services/Services';
import Contact from './contact/Contact';
import Innovation from './innovation/Innovation';
import GreatMinds from './great-minds/GreatMinds';
import Clients from './clients/Clients';

const Home = () => {
  useGSAP(() => {

    gsap.fromTo(
      ".text_apear",
      {
        opacity: 1,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".text_apear",
          start: "top 100%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
        stagger: 0.02,
        duration: 4,
        delay: 4,
      }
    );


    let mm = gsap.matchMedia();
    mm.add({
      isSMMobile: "(max-width: 376px)",
      isMobile: "(max-width: 640px)",
      isTablet: "(max-width: 1023px)",
      isDesktop: "(min-width: 1024px)",
    }, (context) => {
      const conditions = context.conditions as { isSMMobile: boolean; isMobile: boolean; isTablet: boolean; isDesktop: boolean };
      const { isSMMobile, isMobile, isTablet, isDesktop } = conditions;
      console.log(conditions, "context");


      gsap.fromTo('.scaling-element',
        {
          scale: 1,
          opacity: 1,
        },
        {
          scale: 0.3,
          opacity: 0,
          scrollTrigger: {
            trigger: '.scaling-element',
            pin: ".header",
            start: "center center",
            end: "bottom top",
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
          },
          force3D: true,
          ease: 'power1.out',
        }
      );

      gsap.fromTo('.up-element',
        {
          opacity: 1,
          y: (isMobile && !isSMMobile) ? 0 : (isMobile && isSMMobile) ? 0 : 0,
        },
        {
          opacity: 0,
          y: isMobile ? -150 : -200,
          scrollTrigger: {
            trigger: '.up-element',
            start: "top 30%",
            end: "bottom top",
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
          },
          duration: 1.5,
          stagger: 0.02,
          ease: 'power2.out',
        }
      );
      gsap.fromTo(
        ".text_apear1",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 1,
          y: 100,
          scrollTrigger: {
            trigger: ".text_apear1",
            start: "top 75%",
            end: "bottom 50%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
          ease: 'power2.out',
          stagger: 0.02,
          duration: 3,
        }
      );
      gsap.fromTo('.header_shade',
        {
          opacity: 0.35,
        },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: '.header_shade',
            start: "top 30%",
            end: "bottom top",
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
          },
          duration: 1.5,
          stagger: 0.02,
          ease: 'power2.out',
        }
      );


      /**
    * Function to apply parallax on a list of elements
    * @param {string} selector - The class selector for the images
    * @param {number} yValue - How much y-axis shift you want (more for stronger effect)
    * @param {number} scrubValue - The scrub value (higher = slower, more cinematic)
    */
      const animateParallax = (selector: any, yValue: any, scrubValue: any) => {
        gsap.utils.toArray(selector).forEach((img: any, index) => {
          gsap.fromTo(
            img,
            {
              opacity: 1,
              y: 0,
              z: 0,
            },
            {
              opacity: 1,
              y: yValue, // Parallax shift on the y-axis
              z: index % 2 === 0 ? 30 : -30,
              scrollTrigger: {
                trigger: img,
                // pin: img.closest('.parrallaxSection'),
                start: "top 60%", // Start earlier
                end: "bottom 20%", // End later
                scrub: scrubValue, // Scrub factor controls the scroll speed
                markers: false,
              },
              ease: 'power2.inOut', // Smooth entry/exit
            }
          );
        });
      };

      // Add parallax to different image layers
      if (!isMobile) {
        animateParallax('.serviceImgUP1', isTablet ? 20 : 230, 1.5);
      }
      animateParallax('.serviceImgUP2', isTablet ? 20 : -230, 1.5);



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

      // Letter-by-letter animation
      const animateLetterByLetter = (selector: string) => {
        gsap.utils.toArray(selector).forEach((element: any) => {
          const isButton = element.classList.contains('parallaxText-button');
          gsap.fromTo(
            element.querySelectorAll('.letter'),
            {
              opacity: 0.2,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              stagger: isButton ? 0.02 : 0.02,
              scrollTrigger: {
                trigger: element,
                start: "top 60%",
                end: "bottom 0%",
                scrub: true,
                markers: false,
              },
              ease: 'power3.out',
            }
          );
        });
      };

      // Apply the letter-split effect and animation to the text
      splitTextIntoLetters('.parallaxText, .parallaxText-button');
      animateLetterByLetter('.parallaxText, .parallaxText-button');

      gsap.fromTo('.text_reveal',
        {
          opacity: 1,
          y: 100,
        },
        {
          y: 0,
          scrollTrigger: {
            trigger: '.lock_section',
            start: "center center",
            end: "center top",
            scrub: 1,
            pin: ".lock_section",
            markers: false,
          },
          duration: 1.5,
          ease: 'power3.out',
        }
      );


      gsap.timeline({
        scrollTrigger: {
          trigger: '.innovation_section',
          start: 'center center',
          end: 'center top',
          scrub: 1.5,
          markers: false,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
        .fromTo(
          '.innovation_section',
          { scale: isMobile ? 0.7 : 0.5, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            ease: 'power3.inOut',
          }
        );

      gsap.fromTo('.text_reveal_1',
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: '.text_reveal_1',
            start: "center 60%",
            end: "center top",
            scrub: 1,
            pin: '.lock_section_1',
            pinSpacing: true,
            markers: false,
          },
          duration: 1.5,
          ease: 'power3.out',
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



  });

  return (
    <main>
      <Header />
      <Services />
      <Innovation />
      <GreatMinds />
      <Clients />
      <Contact />
    </main>
  );
};

export default Home;
