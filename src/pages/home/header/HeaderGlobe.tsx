import { Typography } from '../../../components/shared/typography';
import HeroShader from '../../../components/ui/hero-shader/heroShader';

const HeaderGlobe = () => {

  return (
    <div className='w-full'>
      <div className='box relative flex items-center justify-center'>
        <div className='scaling-element size-[450px] sm:size-[500px] md:size-[600px] lg:size-[700px] xl:size-[700px]'>
          <HeroShader />
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
