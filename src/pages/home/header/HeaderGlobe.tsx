import Hero from '../../../components/ui/hero/hero';
import { Typography } from '../../../components/shared/typography';

const HeaderGlobe = () => {

  return (
    <div className='w-full'>
      <div className='box relative'>
        <div className='size-[450px] xs:size-[500px] md:size-[600px] lg:size-[700px] xl:size-[700px]'>
          <Hero />
        </div>
        <div className='up-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
        <div className='overflow-hidden'>
          <Typography as="h1" size="h1" className='text-center font-euro-light text-white text_apear'>
            Revolution
          </Typography>
        </div>
        <div className='overflow-hidden'>
          <Typography as="h1" size="h1" className='text-center font-euro-light text-white text_apear'>
             Beyond
          </Typography>
          </div>
        <div className='overflow-hidden'>
          <Typography as="h1" size="h1" className='text-center font-euro-light text-white text_apear'>
            Boundaries.
          </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderGlobe;
