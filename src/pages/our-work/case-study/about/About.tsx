import { Typography } from "../../../../components/shared/typography";

type AboutProps = {
  about: {
    title: string;
    subtitle: string;
    sectionNumber: string;
    description: string[];
    image: string;
  };
};

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <div className="w-[90%] mx-auto text-white">
      <div className="flex flex-col items-center gap-20 py-20">
        <div className="h-full w-full flex flex-col justify-center items-center gap-2">
          <Typography
            as="h3"
            size="h3"
            className="parallaxText text-center font-euro-semibold text-white"
          >
            {about.title}
          </Typography>
          <Typography
            as="p"
            size="base"
            className="parallaxText text-center font-euro-light text-white"
          >
            {about.subtitle}
          </Typography>
          <Typography
            as="p"
            size="md"
            className="parallaxText text-center font-euro-semibold text-primary-orange mt-1"
          >
            {about.sectionNumber}
          </Typography>
          <div className="w-[80%] sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 mx-auto space-y-5 mt-5 text-light-gray">
            {about.description.map((paragraph, index) => (
              <Typography
                key={index}
                as="p"
                size="sm"
                className="parallaxText text-center font-suisse-light leading-relaxed"
              >
                {paragraph}
              </Typography>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <img className="info_card1 h-[400px]" loading="lazy" src={about.image} alt={about.title.toLowerCase()} />
        </div>
      </div>
    </div>
  );
};

export default About;
