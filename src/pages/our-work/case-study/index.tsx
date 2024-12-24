import React from "react";
import { useParams } from "react-router-dom";
import Header from "./header/Header";
import About from "./about/About";
import Technologies from "./technologies/Technologies";
import VisitSite from "./visit-site/VisitSite";
import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap';

const CaseStudy: React.FC = () => {
  const data = {
    1: {
      header: {
        title: "Moon Vault Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/moon-vault/header.png",
      },
      about: {
        title: "About",
        subtitle: "Detailed overview of this project",
        sectionNumber: "01",
        description: [
          "We are storytellers.",
          "We offer the full spectrum of design, branding, and consulting services to companies that are committed to realizing their brand’s potential.",
          "Our work is grounded in the principle of eloquent visual expression: design that elevates your product, or service, and gives your audience an authentic brand experience.",
          "Your story is our art, and your success is the beauty of our craft.",
        ],
        image: "/assets/images/case-study/moon-vault/about/about.png",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        firstImage: "/assets/images/case-study/moon-vault/tech/tech1.png",
        secondImage: "/assets/images/case-study/moon-vault/tech/tech2.png",
        thirdImage: "/assets/images/case-study/moon-vault/tech/tech3.png"
      }
    },
    2: {
      header: {
        title: "Another Project",
        category: "AI / Research / Development",
        year: 2023,
        country: "Canada",
        website: "https://anotherproject.com",
        image: "/assets/images/case-study/moon-vault/header.png",
      },
      about: {
        title: "About",
        subtitle: "Detailed overview of this project",
        sectionNumber: "01",
        description: [
          "We are storytellers.",
          "We offer the full spectrum of design, branding, and consulting services to companies that are committed to realizing their brand’s potential.",
          "Our work is grounded in the principle of eloquent visual expression: design that elevates your product, or service, and gives your audience an authentic brand experience.",
          "Your story is our art, and your success is the beauty of our craft.",
        ],
        image: "/assets/images/case-study/moon-vault/about/about.png",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        firstImage: "/assets/images/case-study/moon-vault/tech/tech1.png",
        secondImage: "/assets/images/case-study/moon-vault/tech/tech2.png",
        thirdImage: "/assets/images/case-study/moon-vault/tech/tech3.png"
      }
    },
  };

  const { id } = useParams<{ id: string }>();
  const caseStudy = id && data[parseInt(id, 10) as keyof typeof data];


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
        stagger: 0.2,
        duration: 1,
      }
    );
    
    gsap.timeline({
      scrollTrigger: {
        trigger: '.info_img',
        start: 'center center', 
        end: 'center top',
        scrub: 1.5, 
        markers: false, 
        pin: true,
        invalidateOnRefresh: true,
      },
    })
      .fromTo(
        '.info_img',
        { scale: 0.5, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power3.inOut',
        }
      );

      gsap.fromTo(
        ".info_card",
        { 
          opacity: 0,
          scale: 0.5,
          y: 200,
        },
        {
          scale: 0.5, opacity: 0.8 ,
          y: 0,
          scrollTrigger: {
            trigger: ".info_card",
            start: "top 80%",
            end: "bottom 60%",
            markers: false, 
            // toggleActions: "play reverse play reverse",
          },
          stagger: 0.2,
          duration: 1,
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
      ".info_card1",
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".info_card1",
          start: "top 80%",
          end: "bottom 60%",
          markers: false, 
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.2,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".info_card2",
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".info_card2",
          start: "top 80%",
          end: "bottom 20%",
          markers: false, 
          toggleActions: "play reverse play reverse",
        },
        stagger: 0.2,
        duration: 1,
      }
    );

  });


  if (!caseStudy) {
    return <p className="text-white">Case study not found</p>;
  }

  return (
    <main>
      <Header header={caseStudy.header} />
      <About about={caseStudy.about} />
      <Technologies technologies={caseStudy.technologies} />
      <VisitSite />
    </main>
  );
};

export default CaseStudy;
