import { Typography } from '../../../components/shared/typography';

const GreatMinds = () => {

  return (
    <section className="w-full mx-auto overflow-hidden">
      <div className="min-h-[80vh] md:min-h-screen lock_section_1 bg-black flex justify-center items-center relative">
      <div className="great_mind_shade_left lg:block hidden"></div>
      <div className="great_mind_shade_right lg:block hidden"></div>
        <div className="z-10 font-euro-light text-center flex flex-col items-center justify-center w-full relative">

          <div className="overflow-hidden">
            <Typography
              as="h2"
              size="h1"
              className="text-center font-euro-semibold text-white z-[1] text_reveal_1"
            >
              Great Minds <br /> Think Here
            </Typography>
          </div>

          {/* Animated Image */}
          <div className="overflow-hidden">
            <img
              src="/assets/videos/great-minds-1.gif"
              alt="Great Minds Think Here"
              className="w-full max-w-[450px] h-auto rounded-lg text_reveal_1"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GreatMinds;
