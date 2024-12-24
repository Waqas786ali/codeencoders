import { Typography } from '../../../../components/shared/typography';

type TechnologiesProps = {
  technologies: {
    title: string;
    subtitle: string;
    sectionNumber: string;
    description: string;
    firstImage: string;
    secondImage: string;
    thirdImage: string;
  };
};

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className="w-[90%] mx-auto text-white">
      <div className="flex flex-col items-center gap-20 py-20">
        <div className="h-full w-full flex flex-col justify-center items-center gap-2">
          <Typography
            as="h3"
            size="h3"
            className="parallaxText text-center font-euro-semibold text-white"
          >
            {technologies.title}
          </Typography>
          <Typography
            as="p"
            size="base"
            className="parallaxText text-center font-euro-light text-white"
          >
           {technologies.subtitle}
          </Typography>
          <Typography
            as="p"
            size="md"
            className="parallaxText text-center font-euro-semibold text-primary-orange mt-1"
          >
           {technologies.sectionNumber}
          </Typography>
          <div className="w-[80%] sm:w-1/2 mx-auto space-y-5 mt-5 text-light-gray">
            <Typography
              as="p"
              size="sm"
              className="parallaxText text-center font-suisse-light leading-relaxed"
            >
              {technologies.description}
            </Typography>
          </div>
        </div>

        {/* First Image */}
        <div className="flex justify-center gap-10 overflow-hidden">
          <img
            className="info_card2 w-full h-[500px]"
            src={technologies.firstImage}
            alt="Technology illustration 1"
          />
        </div>

        {/* Second and Third Images */}
        <div className="flex flex-col sm:flex-row items-center gap-5 overflow-hidden">
          <img
            className="info_card2 h-[315px] w-full sm:w-[60%]"
            src={technologies.secondImage}
              alt="Technology illustration 2"
          />
          <img
            className="info_card2 object-cover h-[150px] sm:h-[315px] w-full sm:w-[40%]"
            src={technologies.thirdImage}
              alt="Technology illustration 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
