import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap';
import Header from "./header/Header"
import MatrixEffectWrapper from "./MatrixEffectWrapper"
import ContactForm from "./contact-form/ContactForm"
import ClientInfo from "./client-info/ClientInfo";

const ContactUs = () => {
    
    useGSAP(() => {
  
      gsap.fromTo(
        ".text_apear",
        {
          opacity: 1,
          y: 100,
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
          stagger: 0.02, // Each letter (or child) is staggered by 0.02s
          duration: 1, // Total duration of the animation (2 seconds)
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
        ".input_lines",
        {
          opacity: 1,
          width: 0, 
        },
        {
          opacity: 1,
          width: '100%', 
          scrollTrigger: {
            trigger: ".contact_form",
            start: "top 40%",
            end: "bottom 50%",
            markers: false, 
            toggleActions: "play reverse play reverse",
          },
          stagger: 0.02,
          duration: 0.5,
        }
      );
      gsap.fromTo(
        ".input_label",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".contact_form",
            start: "top 40%",
            end: "bottom 50%",
            markers: false, 
            toggleActions: "play reverse play reverse",
          },
          stagger: 0.02,
          duration: 0.5,
        }
      );

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

      gsap.fromTo(
        ".info_card",
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".info_card",
            start: "top 80%",
            end: "bottom 60%",
            markers: false, 
            toggleActions: "play reverse play reverse",
          },
          stagger: 0.2,
          duration: 1,
        }
      );

    });

  return (
    <main className="overflow-y-auto -mt-24 w-full">
      <MatrixEffectWrapper backgroundImageUrl="/assets/images/about/header/header_bg.svg">
        <div>
          <div className="z-10 overflow-y-auto">
            <Header />
            <ContactForm />
            <ClientInfo />
          </div>
        </div>
      </MatrixEffectWrapper>
    </main>
  )
}

export default ContactUs
