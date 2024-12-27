import { Typography } from '../../../components/shared/typography';

const Innovation = () => {

  return (
    <div className=''>
      <section className='innovation_section z-10 w-[90%] xl:w-[80%] mx-auto min-h-screen flex justify-center items-center'>
        <div 
          className=" relative rounded-[22px] md:rounded-[42px] w-full h-[400px] sm:h-[500px] xl:h-[630px] px-5 md:px-0" 
          style={{
            backgroundImage: 'url(/assets/images/home/innovation/innovation-bg.svg)',
            backgroundSize: 'cover',
          }}>
          <div  className="h-full w-full flex items-center justify-center flex-col gap-5 text-center text-white font-euro-light">
              <Typography as="h4" size="h4">Experience The Perfect Blend of</Typography>
              <Typography as="h2" size="h1" className="font-euro-semibold text-primary-orange">Expertise Innovation <br /> Excellence</Typography>
              <Typography as="h4" size="h4">Delivered On-Time, EveryTime.</Typography>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Innovation
