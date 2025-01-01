import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./header/Header";
import About from "./about/About";
import Technologies from "./technologies/Technologies";
import VisitSite from "./visit-site/VisitSite";
import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap';
import { useAppContext } from "../../../context/AppContext";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CaseStudy: React.FC = () => {
  const data = {
    1: {
      header: {
        title: "Moon Vault Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/1/header/header.svg",
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
        image: "/assets/images/case-study/1/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        firstImage: "/assets/images/case-study/1/tech/tech1.svg",
        secondImage: "/assets/images/case-study/1/tech/tech2.svg",
        thirdImage: "/assets/images/case-study/1/tech/tech3.svg"
      }
    },
    2: {
      header: {
        title: "Paw Play Love Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/2/header/header.svg",
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
        image: "/assets/images/case-study/2/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/2/tech/tech1.svg",
        secondImage: "/assets/images/case-study/2/tech/tech2.svg",
        thirdImage: "/assets/images/case-study/2/tech/tech3.svg"
      }
    },
    3: {
      header: {
        title: "Infinity Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/3/header/header.svg",
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
        image: "/assets/images/case-study/3/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/3/tech/tech1.svg",
        // secondImage: "/assets/images/case-study/3/tech/tech2.svg",
        // thirdImage: "/assets/images/case-study/3/tech/tech3.svg"
      }
    },
    4: {
      header: {
        title: "Giga Chad Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/4/header/header.svg",
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
        image: "/assets/images/case-study/4/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/4/tech/tech1.svg",
        // secondImage: "/assets/images/case-study/4/tech/tech2.svg",
        // thirdImage: "/assets/images/case-study/4/tech/tech3.svg"
      }
    },
    5: {
      header: {
        title: "Lawnolu Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/5/header/header.svg",
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
        image: "/assets/images/case-study/5/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/5/tech/tech1.svg",
        secondImage: "/assets/images/case-study/5/tech/tech2.svg",
        thirdImage: "/assets/images/case-study/5/tech/tech3.svg"
      }
    },
    6: {
      header: {
        title: "The 365 NFT Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/6/header/header.svg",
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
        image: "/assets/images/case-study/6/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/6/tech/tech1.svg",
        // secondImage: "/assets/images/case-study/6/tech/tech2.svg",
        // thirdImage: "/assets/images/case-study/6/tech/tech3.svg"
      }
    },
    7: {
      header: {
        title: "Neanderbros Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/7/header/header.svg",
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
        image: "/assets/images/case-study/7/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/7/tech/tech1.svg",
        secondImage: "/assets/images/case-study/7/tech/tech2.svg",
        thirdImage: "/assets/images/case-study/7/tech/tech3.svg"
      }
    },
    8: {
      header: {
        title: "Magic Bag Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/8/header/header.svg",
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
        image: "/assets/images/case-study/8/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/8/tech/tech1.svg",
        // secondImage: "/assets/images/case-study/8/tech/tech2.svg",
        // thirdImage: "/assets/images/case-study/8/tech/tech3.svg"
      }
    },
    9: {
      header: {
        title: "Singles n Seene Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/9/header/header.svg",
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
        image: "/assets/images/case-study/9/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/9/tech/tech1.svg",
        secondImage: "/assets/images/case-study/9/tech/tech2.svg",
        thirdImage: "/assets/images/case-study/9/tech/tech3.svg"
      }
    },
    10: {
      header: {
        title: "Golden Years Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/10/header/header.svg",
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
        image: "/assets/images/case-study/10/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/10/tech/tech1.svg",
        // secondImage: "/assets/images/case-study/10/tech/tech2.svg",
        // thirdImage: "/assets/images/case-study/10/tech/tech3.svg"
      }
    },
    11: {
      header: {
        title: "FITS Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/11/header/header.svg",
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
        image: "/assets/images/case-study/11/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/11/tech/tech1.svg",
        secondImage: "/assets/images/case-study/11/tech/tech2.svg",
        thirdImage: "/assets/images/case-study/11/tech/tech3.svg"
      }
    },
    12: {
      header: {
        title: "Jiniz Project",
        category: "BlockChain / Development / UI/UX",
        year: 2024,
        country: "USA",
        website: "https://moonvault.io",
        image: "/assets/images/case-study/12/header/header.svg",
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
        image: "/assets/images/case-study/12/about/about.svg",
      },
      technologies: {
        title: "Technologies",
        subtitle: "How we make this happen",
        sectionNumber: "02",
        description: "Swerri is a cutting-edge web and mobile blockchain wallet application that allows users to securely manage and transact with multiple crypto currencies. Built using React.js, Node.js, Express, Java and Kotlin, this powerful application offers a seamless user experience that makes it easy for users to manage their digital assets and make transactions with ease.  The application also offers advanced security features such as multi-factor authentication, biometric login, and encrypted private keys, which ensures that users' digital assets are protected at all times. One of the main features is the ability to swap cryptocurrencies to fiat and vice versa. It offers a smooth and seamless experience, making it easy for users to convert their digital assets into cash, or to purchase more digital assets.  Overall, it has dozens of other functionalities that offers users a unique and enjoyable experience, by allowing them to manage and transact with multiple cryptocurrencies. It's built on top of the latest technologies, making it fast, reliable and easy to use, while also prioritizing the security of the users' digital assets.",
        // firstImage: "/assets/images/case-study/12/tech/tech1.svg",
        // secondImage: "/assets/images/case-study/12/tech/tech2.svg",
        // thirdImage: "/assets/images/case-study/12/tech/tech3.svg"
      }
    },
  };

  const { id } = useParams<{ id: string }>();
  const caseStudy = id && data[parseInt(id, 10) as keyof typeof data];

  const { shouldAnimePlay } = useAppContext();

  useEffect(() => {
    if (!shouldAnimePlay) return;
    ScrollTrigger.refresh();  
    const animation1 = gsap.fromTo(
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
        stagger: 0.1,
        duration: 1,
        immediateRender: true,
      }
    );
    const animation2 = gsap.fromTo(
        ".info_card",
        {
          opacity: 0.5,
          scale: 0.5,
          y: 200,
        },
        {
          opacity: 0.8,
          scale: 0.5,
          y: 0,

          immediateRender: true,
          stagger: 0.2,
          duration: 1,
        }
      );
    
    return () => {
      animation1.kill();
      animation2.kill();
    }
  },[shouldAnimePlay])

  useGSAP(() => {

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
