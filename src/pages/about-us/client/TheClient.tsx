import { Typography } from '../../../components/shared/typography'

const TheClient = () => {
  return (
    <div className='w-[90%] mx-auto min-h-screen text-white flex items-center'>
      <div className='h-full w-full flex flex-col justify-center items-center gap-2'>
        <Typography as="h3" size="h3" className='parallaxText text-center font-euro-semibold'>The Client</Typography>
        <Typography as="p" size="base" className='parallaxText text-center font-euro-light'>Who We Are</Typography>
        <Typography as="p" size="md" className='parallaxText text-center font-euro-semibold text-primary-orange mt-1'>04</Typography>
        <div className='w-[80%] sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 mx-auto space-y-5 mt-5'>
        <Typography as="p" size="sm" className='parallaxText text-center font-suisse-light text-white leading-relaxed'>
            We are storytellers.
          </Typography>
          <Typography as="p" size="sm" className='parallaxText text-center font-suisse-light text-white leading-relaxed'>
            We offer the full spectrum of design, branding, and consulting services to companies that are committed to realizing their brand’s  potential.
          </Typography>
          <Typography as="p" size="sm" className='parallaxText text-center font-suisse-light text-white leading-relaxed'>
            Our work is grounded in the principle  of eloquent visual expression: design that elevates  your product, or service, and gives  your audience an authentic brand experience.
          </Typography>
          <Typography as="p" size="sm" className='parallaxText text-center font-suisse-light text-white leading-relaxed'>
            Your story is our art, and your success br is the beauty of our craft.
          </Typography>
        </div>
      </div>
    </div>  
  )
}

export default TheClient;