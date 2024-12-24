import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Typography } from '../../../components/shared/typography'
import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface Client {
  id: string;
  name: string;
  position: string;
  projects: string;
  clientImage: string;
  details: {
    client: string;
    category: string;
    year: number;
    country: string;
    feedback: string[];
  };
}

const clientsData: Client[] = [
  {
    id: '01',
    name: 'John Due',
    position: 'CEO & Founder',
    projects: 'Moon Vault / Magic Bag / Golden Years',
    clientImage: "/assets/images/home/clients/jorban_dallas.png",
    details: {
      client: 'Moon Vault / Magic Bag / Golden Years',
      category: 'BlockChain',
      year: 2023,
      country: 'U.S.A',
      feedback: [
        'We gave them complete creative control, and they understood exactly what we wanted.',
        'I would definitely always choose CodeEncoders for any serious design project.',
      ]
    }
  },
  {
    id: '02',
    name: 'John Wick',
    position: 'CEO & Founder',
    projects: 'Moon Vault',
    clientImage: "/assets/images/home/clients/jorban_dallas.png",
    details: {
      client: 'Moon Vault / Magic Bag / Golden Years',
      category: 'BlockChain',
      year: 2024,
      country: 'U.S.A',
      feedback: [
        'We gave them complete creative control, and they understood exactly what we wanted.',
        'I would definitely always choose CodeEncoders for any serious design project.',
      ]
    }
  },
  {
    id: '03',
    name: 'Brandon J.Palmer',
    position: 'CEO & Founder',
    projects: 'Moon Vault / Magic Bag',
    clientImage: "/assets/images/home/clients/jorban_dallas.png",
    details: {
      client: 'Moon Vault / Magic Bag / Golden Years',
      category: 'BlockChain',
      year: 2025,
      country: 'U.S.A',
      feedback: [
        'We gave them complete creative control, and they understood exactly what we wanted.',
        'I would definitely always choose CodeEncoders for any serious design project.',
      ]
    }
  },
  {
    id: '04',
    name: 'Lester B.',
    position: 'CEO & Founder',
    projects: 'Moon Vault / Magic Bag',
    clientImage: "/assets/images/home/clients/jorban_dallas.png",
    details: {
      client: 'Moon Vault / Magic Bag / Golden Years',
      category: 'BlockChain',
      year: 2027,
      country: 'U.S.A',
      feedback: [
        'We gave them complete creative control, and they understood exactly what we wanted.',
        'I would definitely always choose CodeEncoders for any serious design project.',
      ]
    }
  },

];


const Clients = () => {

  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = (): void => setMenuVisible(prev => !prev);

  const [selectedClient, setSelectedClient] = useState<Partial<Client> | null>(null);

  const handleClientClick = (client: Client): void => {
    setSelectedClient(client);
    setMenuVisible(true);

  };

  useGSAP(() => {
    if (menuVisible) {
      gsap.fromTo(
        ".text_apear5",
        {
          opacity: 1,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
        }
      );
      gsap.fromTo(
        ".text_apear6",
        {
          opacity: 0,
          y: -700,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
          duration: 1,
        }
      );
      gsap.fromTo(
        ".text_apear7",
        {
          opacity: 0,
          y: 500,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
        }
      );
    }
  }, [handleClientClick]);


  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const [hoveredClientId, setHoveredClientId] = useState<string | null>(null);

  const imageRefs = useRef<Record<string, HTMLDivElement | null>>({});

 
  

  const handleMouseEnter = (clientId: string): void => {
    setHoveredClientId(clientId);
    const ref = imageRefs.current[clientId];
    if (ref) {
      gsap.to(ref, { opacity: 1, duration: 0.2 });
    }
  };

  const handleMouseLeave = (): void => {
    if (hoveredClientId) {
      const ref = imageRefs.current[hoveredClientId];
      if (ref) {
        gsap.to(ref, { opacity: 0, duration: 0.2 });
      }
      setHoveredClientId(null);
    }
  };

  const [scrollValue, setScrollValue] = useState<number | null>(null);

  useEffect(() => {
    if (menuVisible) {
      let scrollY = window.scrollY;
      document.body.style.overflowY = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      setScrollValue(scrollY);
      console.log("scrollValue", scrollY);
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.position = 'initial';
      document.body.style.top = `-${scrollValue}px`;
      console.log("scrollValue1", scrollValue);
      
    }
    
    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.position = 'initial';
    };
  }, [menuVisible]);
  
  


  return (
    <section id='clients'>
      <div className='w-[90%] mx-auto min-h-screen flex items-center'>

        <div className='h-full w-full flex flex-col justify-center'>
          {
            clientsData && (
              clientsData.map((client, index) => (
                <div
                  key={client.id}
                  onMouseEnter={() => handleMouseEnter(client.id)}
                  // onMouseMove={(e) => handleMouseMove(e)}
                  onMouseLeave={() => handleMouseLeave()} onClick={() => handleClientClick(client)} className="relative h-[120px] cursor-pointer overflow-hidden group grid xs:grid-cols-[50px,1fr] md:grid-cols-[100px,1fr,300px] font-euro-light text-white py-10">

                  <div className="absolute top-0 left-0 w-full md:w-0 h-[1px] bg-opacity-30 bg-light-gray group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out"></div>

                  <Typography as="h3" size="h3" className="hidden xs:block text-primary-orange transition-all duration-300 ease-in-out md:opacity-0 group-hover:opacity-100 md:translate-y-10 group-hover:translate-y-0">{client.id}</Typography>

                  <div className="flex items-center justify-center xs:justify-end md:justify-center w-full gap-2">
                    <Typography as="h3" size="h3" className="text-right transition-all ease-in-out duration-300 md:translate-x-[100px] group-hover:translate-x-0 text-primary-orange md:text-white group-hover:text-primary-orange">{client.name}</Typography>
                    <div className="self-start flex justify-center items-center gap-2 overflow-hidden transition-all duration-800 ease-in-out w-auto md:w-0 group-hover:w-auto delay-200">
                      <Typography as="h3" size="h3" className='transition-all duration-800 ease-in-out md:-translate-x-[100%] group-hover:translate-x-0 md:opacity-0 group-hover:opacity-100 text-primary-orange md:text-white group-hover:text-primary-orange'> /</Typography>
                      <Typography as="p" size="base" className="self-start font-suisse-light transition-all duration-800 ease-in-out md:-translate-x-[100%] group-hover:translate-x-0 md:opacity-0 group-hover:opacity-100">{client.position}</Typography>
                    </div>
                  </div>
                  <div className='hidden md:flex items-center justify-end w-full'>
                    <Typography as="p" size="md" className="transition-all duration-300 ease-in-out md:opacity-0 group-hover:opacity-100 md:translate-y-10 group-hover:translate-y-0 text-right">{client.projects}</Typography>
                  </div>

                  <div className={"absolute bottom-0 right-0 w-full md:w-0 h-[1px] bg-opacity-30 bg-light-gray group-hover:w-full transition-all duration-300 ease-in-out"}></div>
                  <div
                    ref={(el) => (imageRefs.current[client.id] = el)}
                    className={`hover-image ${isHovered ? "opacity-100" : "opacity-0"} transition-all duration-300 ease-in-out`}
                    style={{
                      width: "100px",
                      height: "120px",
                      backgroundImage: "url('/assets/images/team/meet-team/saif.png')",
                      backgroundSize: "cover",
                      position: "absolute",
                      top: 0,
                      left: 150,
                      pointerEvents: "none",
                    }}></div>
                </div>
              ))
            )
          }
        </div>

        {menuVisible && (
          <div onClick={toggleMenu} className="fixed h-screen top-0 left-0 right-0 bg-black bg-opacity-50 z-40 !overflow-hidden overscroll-none text-white text-h2"></div>
        )}

        <div className={`z-50 fixed bottom-0 left-[5%] right-[5%] h-[calc(100vh-120px)] xs:h-[calc(100vh-80px)] md:h-[calc(100vh-200px)] lg:h-[calc(100vh-150px)] 2xl:h-[calc(100vh-250px)] ${menuVisible ? 'translate-y-0' : 'translate-y-full'} border-shine-gradient rounded-t-[42px] text-white transition-all duration-700 ease-in-out`}>
          <div className='bg-shine-gradient p-5 sm:p-8 lg:p-10 rounded-t-[42px] size-full'>
          <div onClick={toggleMenu} className='flex items-center gap-2 absolute top-5 right-5 sm:top-8 sm:right-8 lg:top-10 lg:right-10 text-white group'>
            <div className="flex gap-2 items-center opacity-0 group-hover:opacity-100 transition-all duration-200">
              <span className="bg-secondary-blue size-2 rounded-full"></span>
              <Typography as="p" size="sm" className="font-euro-light cursor-pointer">Close</Typography>
            </div>
            <button className="text-xl font-bold">
              <Icon icon="line-md:close" className="text-h5" />
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 pt-5 sm:pt-16 lg:pt-0 xl:pt-16'>

            <div className="font-euro-semibold space-y-5">

              <div className='overflow-hidden'>
                <Typography as="h3" className="text_apear5 text-[3rem] font-euro-semibold text-white">
                  {selectedClient?.name}
                </Typography>
              </div>


              <div className="space-y-5 text-light-gray font-suisse-light">
                <div className='overflow-hidden'>
                  <Typography as="p" size="md" className='text_apear5 flex items-center gap-1'><span className={'block font-suisse-medium text-white'}>Client:</span> <span className={`block`}>{selectedClient?.details?.client}</span></Typography>
                </div>
                <div className='overflow-hidden'>
                  <Typography as="p" size="md" className='text_apear5 flex items-center gap-1'><span className={'block font-suisse-medium text-white'}>Category:</span> <span className={`block`}>{selectedClient?.details?.category}</span></Typography>
                </div>
                <div className='overflow-hidden'>
                  <Typography as="p" size="md" className='text_apear5 flex items-center gap-1'><span className={'block font-suisse-medium text-white'}>Year:</span> <span className={`block`}>{selectedClient?.details?.year}</span></Typography>
                </div>
                <div className='overflow-hidden'>
                  <Typography as="p" size="md" className='text_apear5 flex items-center gap-1'><span className={'block font-suisse-medium text-white'}>Country:</span> <span className={`block`}>{selectedClient?.details?.country}</span></Typography>
                </div>
              </div>
            </div>
            <div className='overflow-hidden'>
              <div className='text_apear6 font-suisse-regular space-y-5 lg:space-y-10 lg:w-[80%] text-white'>
                {
                  selectedClient?.details?.feedback?.map((v: string) => (
                    <Typography as="h4" size="h4" className=''>{v}</Typography>
                  ))
                }
              </div>
              <div className="mt-6 text-white flex items-center gap-2 overflow-hidden">
                <img src={selectedClient?.clientImage} alt="Client" className="w-20 h-20 rounded-full" />
                <div className='space-y-2 text_apear7'>
                  <Typography as="p" size="lg" className=" font-suisse-regular">{selectedClient?.name}</Typography>
                  <Typography as="p" size="md" className=" font-suisse-light">{selectedClient?.position}</Typography>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Clients