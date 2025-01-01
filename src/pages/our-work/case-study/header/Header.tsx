import React from 'react';
import { Typography } from '../../../../components/shared/typography';

interface HeaderProps {
  header: {
    title: string;
    category: string;
    year: number;
    country: string;
    website: string;
    image: string;
  };
}

const Header: React.FC<HeaderProps> = ({ header }) => {
  return (
    <header className="w-[90%] mx-auto header relative overflow-x-hidden z-10">
      <div className="flex flex-col items-center gap-20 py-20">
        <div className="flex flex-col items-center gap-2">
          <div className="overflow-hidden">
            <Typography
              as="p"
              size="xs"
              className="text_apear text-center font-euro-semibold text-secondary-blue"
            >
              Case Study
            </Typography>
          </div>
          <div className="overflow-hidden">
            <Typography
              as="h1"
              size="h1"
              className="text_apear text-center font-euro-semibold text-white"
            >
              {header.title}
            </Typography>
          </div>
          <div className="overflow-hidden flex items-center justify-center flex-wrap sm:flex-nowrap gap-4 lg:gap-8 lg:mt-4">
            <Typography
              as="p"
              size="md"
              className="text_apear text-center font-suisse-light text-light-gray mt-1"
            >
              <span className="font-suisse-medium text-white">Category: </span>
              {header.category}
            </Typography>
            <Typography
              as="p"
              size="md"
              className="text_apear text-center font-suisse-light text-light-gray mt-1"
            >
              <span className="font-suisse-medium text-white">Year: </span>
              {header.year}
            </Typography>
            <Typography
              as="p"
              size="md"
              className="text_apear text-center font-suisse-light text-light-gray mt-1"
            >
              <span className="font-suisse-medium text-white">Country: </span>
              {header.country}
            </Typography>
            <Typography
              as="p"
              size="md"
              className="text_apear text-center font-suisse-regular text-secondary-blue mt-1"
            >
              <a href={header.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </Typography>
          </div>
        </div>
        <div className='overflow-hidden'>
          <img
            className="w-full h-[500px] opacity-0 info_card info_img"
            src={header.image}
            alt={"case-study-header-1"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
