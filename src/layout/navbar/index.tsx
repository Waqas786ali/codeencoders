import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "../../components/shared/typography";
import { useAppContext } from "../../context/AppContext";
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import wrapTextInSpans from "../../components/shared/text-spans/wrapTextInSpans";
import { Icon } from '@iconify/react';


const Navbar = () => {
  // Fixed Navbar on Scroll
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      
      const currentScrollPos = window.scrollY;
  
      if (currentScrollPos < prevScrollPos && currentScrollPos > 700) {
        setIsFixed(true);
      } else if (currentScrollPos <= 700 || currentScrollPos > prevScrollPos) {
        setIsFixed(false);
      }
  
      setPrevScrollPos(currentScrollPos);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Menu Open
  const [menuOpen, setMenuOpen] = useState(false);
  const [closeDelayed, setCloseDelayed] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (closeDelayed) {
      setCloseDelayed(false);
    }
  };

  const { setIsNavbarHovered } = useAppContext();

  const pathRef = useRef<SVGPathElement>(null);


  useEffect(() => {
    if (!menuOpen) {
      const timer = setTimeout(() => {
        setCloseDelayed(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  useGSAP(() => {
    if (menuOpen) {

      gsap.fromTo(pathRef.current, {
        attr: { d: `M 0 0 V 0 Q 50 100 100 0 V 0 z` },
        delay: 2,
        duration: 1,
        ease: 'power3.inOut',
      }, {
        attr: { d: `M 0 0 V 100 Q 50 100 100 100 V 0 z` },
        duration: 1,

        ease: 'power3.inOut',
      });


      gsap.fromTo(
        ".text_apear_menu",
        {
          opacity: 0,
          y: 300,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          delay: 1,
          duration: 1,
        }
      );
      gsap.fromTo(
        ".text_apear_menu_1",
        {
          opacity: 0,
          y: 300,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          delay: 1,
          duration: 1,
        }
      );

      gsap.fromTo(
        ".text_apear_menu_close",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.1,
          delay: 1,
          duration: 1,
        }
      );

    }

    if (!menuOpen) {


      let tl = gsap.timeline();

      tl.to(
        ".text_apear_menu",
        { opacity: 0, y: 300, stagger: 0.1, duration: 1 }
      )
        .to(
          ".text_apear_menu_1",
          { opacity: 0, y: 300, stagger: 0.1, duration: 1 },
          "-=0.5" // starts slightly after the previous animation ends
        )
        .to(
          ".text_apear_menu_close",
          { opacity: 0, duration: 1 },
          "-=0.5" // starts slightly after the previous animation ends
        )
        .to(
          pathRef.current,
          {
            attr: { d: `M 0 0 V 100 Q 50 100 100 100 V 0 z` },
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5" // starts slightly after the previous animation ends
        )
        .to(
          pathRef.current,
          {
            attr: { d: `M 0 0 V 0 Q 50 100 100 0 V 0 z` },
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5" // starts slightly after the previous animation ends
        );
    }
  }, [menuOpen]);



  // Active Route
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    // Update active route based on current pathname
    if (location.pathname === '/') {
      setActiveRoute('Home');
    }
    else if (location.pathname === '/about') {
      setActiveRoute('Why us');
    }
    else if (location.pathname === '/team') {
      setActiveRoute('The Team');
    }
    else if (location.pathname === '/our-work') {
      setActiveRoute('Our Work');
    }
    else if (location.pathname === '/contact') {
      setActiveRoute('Contact us');
    }
    else if (location.pathname.startsWith('/our-work/case-study/')) {
      setActiveRoute('Case Study');
    }
    else {
      setActiveRoute('');
    }
  }, [location]);

  return (
    <nav className="overflow-x-hidden">

      {isFixed && <div style={{ height: '100px' }}></div>}
      <div className={`w-[90%] mx-auto my-2.5 z-50 transition-all duration-300 
        ${isFixed ? "fixed top-0 left-0 right-0" : ""}`}>
          <div className="relative w-full z-50">
            <div className="size-full absolute inset-0 bg-blur-gray bg-opacity-10 backdrop-blur-[10px] rounded-lg -z-10"></div>

            <div className="z-20 px-5 py-5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <Link to={'/'}>
                    <img className="w-full sm:scale-105" src="/assets/logo.svg" alt="logo" />
                  </Link>
                </div>
                <div className="flex items-center gap-2 sm:gap-5 text-white">
                  {
                    activeRoute && (
                      <div className="hidden xs:flex gap-1 items-center">
                        <span className="bg-secondary-blue size-2 rounded-full"></span>
                        <Typography as="p" size="sm" className="font-euro-light cursor-pointer">{activeRoute}</Typography>
                      </div>
                    )
                  }
                  <div className="cursor-pointer" onClick={toggleMenu}>
                    <img className="mx-auto w-[80%] sm:w-full" src="/assets/svgs/hamburger.svg" alt="hamburger" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`fixed top-0 left-0 w-full h-screen transition-all duration-[1800ms] transform ease-in-out -translate-y-full ${closeDelayed ? '!duration-[3000ms] -translate-y-full' : 'translate-y-0'}`}
              style={{ zIndex: 40 }}
              onMouseEnter={() => setIsNavbarHovered(true)}
              onMouseLeave={() => setIsNavbarHovered(false)}
            >
              {/* Vertical lines */}
              {/* <div className="-z-[1] bg-[#D3D3D3] absolute inset-0 flex justify-between gap-[230px] px-6">
                <hr className="bg-white w-[1px] h-full" />
                <hr className="bg-white w-[1px] h-full" />
                <hr className="bg-white w-[1px] h-full" />
                <hr className="bg-transparent w-[1px] h-full" />
                <hr className="bg-white w-[1px] h-full" />
                <hr className="bg-white w-[1px] h-full" />
                <hr className="bg-white w-[1px] h-full" />
              </div> */}

              {/* Menu content */}
              <div className="w-full h-full p-8 flex flex-col justify-between">
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    className="text_apear_menu_close w-12 h-12 rounded-full text-dark-blue text-h1 flex justify-center items-center hover:bg-primary-blue-dark"
                    onClick={toggleMenu}
                  >
                    <Icon icon="line-md:close" />
                  </button>
                </div>

                {/* Menu Links */}
                <ul className="flex flex-col items-center gap-8 text-dark-blue font-euro-light">
                  <li className="flex items-center gap-5 overflow-hidden group hoverLink">
                  <span className="h-6 w-6"><span className="text_apear_menu bg-primary-blue size-5 rounded-full transition-all duration-300 !scale-0 group-hover:!scale-100"></span></span>
                    <Link className="text_apear_menu" onClick={toggleMenu} to="/"><Typography as="p" size="h2">
                      {wrapTextInSpans('Home')}
                    </Typography></Link>
                  </li>
                  <li className="flex items-center gap-2 overflow-hidden group group hoverLink">
                  <span className="h-6 w-6"><span className="text_apear_menu bg-primary-blue size-5 rounded-full transition-all duration-300 !scale-0 group-hover:!scale-100"></span></span>
                    <Link className="text_apear_menu" onClick={toggleMenu} to="/about"><Typography as="p" size="h2">
                      {wrapTextInSpans('Why Us')}
                    </Typography></Link>
                  </li>
                  <li className="flex items-center gap-2 overflow-hidden group hoverLink">
                  <span className="h-6 w-6"><span className="text_apear_menu bg-primary-blue size-5 rounded-full transition-all duration-300 !scale-0 group-hover:!scale-100"></span></span>
                    <Link className="text_apear_menu" onClick={toggleMenu} to="/team"><Typography as="p" size="h2">
                      {wrapTextInSpans('The Team')}
                    </Typography></Link>
                  </li>
                  <li className="flex items-center gap-2 overflow-hidden group hoverLink">
                  <span className="h-6 w-6"><span className="text_apear_menu bg-primary-blue size-5 rounded-full transition-all duration-300 !scale-0 group-hover:!scale-100"></span></span>
                    <Link className="text_apear_menu" onClick={toggleMenu} to="/our-work"><Typography as="p" size="h2">
                      {wrapTextInSpans('Our Work')}
                    </Typography></Link>
                  </li>
                  <li className="flex items-center gap-2 overflow-hidden group hoverLink">
                    <span className="h-6 w-6"><span className="text_apear_menu bg-primary-blue size-5 rounded-full transition-all duration-300 !scale-0 group-hover:!scale-100"></span></span>
                    <Link className="text_apear_menu" onClick={toggleMenu} to="/contact"><Typography as="p" size="h2">
                      {wrapTextInSpans('Contact Us')}
                    </Typography></Link>
                  </li>
                </ul>

                {/* Footer Section */}
                <div className="text-center w-full font-euro-light text-dark-blue flex flex-col md:flex-row justify-center md:justify-between items-center">
                  <div className="md:text-left space-y-2.5">
                    <div className="overflow-hidden">
                      <Typography as="p" size="sm" className="font-euro-semibold text_apear_menu_1">EST.  —  2022</Typography>
                    </div>
                    <div className="overflow-hidden">
                      <Typography as="p" size="sm" className="text_apear_menu_1">Crafting Solutions. <br className="hidden md:block" /> Beyond Code.</Typography>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <Typography as="p" size="sm" className="text_apear_menu_1">2024. All rights reserved.</Typography>
                  </div>
                  <div className="overflow-hidden">
                    <Typography as="p" size="sm" className="text_apear_menu_1">Info@codeencoders.com</Typography>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${closeDelayed ? 'opacity-0 invisible' : 'opacity-100 visible'} fixed top-0 left-0 h-screen w-screen overflow-hidden transition-all duration-1000 bg-light-gray bg-opacity-70`}>
              <svg
                id="shape-overlays"
                className="overlay h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  ref={pathRef}
                  fill="#D3D3D3"
                  vectorEffect="non-scaling-stroke"
                  d="M 0 0 V 0 Q 50 100 100 0 V 0 z"
                ></path>
              </svg>
            </div>
          </div>
      </div>

    </nav>
  );
};

export default Navbar;
