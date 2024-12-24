import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "../../components/shared/typography";
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <nav className="w-[90%] mx-auto relative my-2.5 z-50">
        <div className="absolute inset-0 bg-blur-gray bg-opacity-10 backdrop-blur-[10px] rounded-lg -z-10"></div>

        <div className="z-20 px-5 py-5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <Link to={'/'}>
                <img className="w-full sm:scale-105" src="/assets/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-5 text-white">
              <div className="hidden xs:flex gap-1 items-center">
                <span className="bg-secondary-blue size-2 rounded-full"></span>
                <Typography as="p" size="sm" className="font-euro-light cursor-pointer">Home</Typography>
              </div>
              <div className="cursor-pointer" onClick={toggleMenu}>
                <img className="mx-auto w-[80%] sm:w-full" src="/assets/svgs/hamburger.svg" alt="hamburger" />
              </div>
          </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 transition-all duration-500 transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
          style={{ zIndex: 40 }}
        >
          {/* Menu content */}
          <div className="w-full h-full bg-light-gray p-8 flex flex-col justify-between">
            {/* Close Button */}
            <div className="flex justify-end">
              <button 
                className="w-12 h-12 rounded-full text-dark-blue text-h1 flex justify-center items-center hover:bg-primary-blue-dark"
                onClick={toggleMenu}
              >
              <Icon icon="line-md:close" />
              </button>
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col items-center gap-8 text-dark-blue font-euro-light">
              <li className="flex items-center gap-5">
                <span className="bg-primary-blue size-5 rounded-full"></span>
                <Link onClick={toggleMenu} to="/"><Typography as="p" size="h2" className="font-euro-semibold text-primary-blue">Home</Typography></Link>
              </li>
              <li className="flex items-center gap-2">
                <Link onClick={toggleMenu} to="/about"><Typography as="p" size="h2">Why us</Typography></Link>
              </li>
              <li className="flex items-center gap-2">
                <Link onClick={toggleMenu} to="/team"><Typography as="p" size="h2">The Team</Typography></Link>
                </li>
              <li className="flex items-center gap-2">
                <Link onClick={toggleMenu} to="/our-work"><Typography as="p" size="h2">Our Work</Typography></Link>
              </li>
              <li className="flex items-center gap-2">
                <Link onClick={toggleMenu} to="/contact"><Typography as="p" size="h2">Contact Us</Typography></Link>
              </li>
            </ul>

            {/* Footer Section */}
            <div className="text-center w-full font-euro-light text-dark-blue flex flex-col md:flex-row justify-center md:justify-between items-center">
              <div className="md:text-left">
                <Typography as="p" size="sm" className="font-euro-semibold">EST. 2022</Typography>
                <Typography as="p" size="sm">Crafting Solutions. <br className="hidden md:block" /> Beyond Code.</Typography>
              </div>
                <Typography as="p" size="sm">2024. All rights reserved.</Typography>
                <Typography as="p" size="sm">info@codesencoders.com</Typography>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
