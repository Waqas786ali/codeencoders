import { Typography } from '../../../components/shared/typography'

const TheQoute = () => {
  return (
    <section className='w-[90%] mx-auto min-h-[90vh] text-white flex items-center'>
      <div className='h-full w-full flex flex-col justify-center items-center gap-2'>
        <Typography as="h5" size="h5" className=' parallaxText text-center font-euro-semibold'>The Quote</Typography>
        <Typography as="p" size="base" className='text-center font-euro-light flex items-center gap-1'><div className='parallaxText'>By </div> <div className='text-secondary-blue font-euro-semibold'> Syed Mustafa Haider</div></Typography>
        <div className='w-[80%] mx-auto space-y-0.5 mt-8 text-light-gray font-suisse-light text-center'>
            <Typography as="p" size="md" className='parallaxText'> Success is not just about innovation. </Typography>
            <Typography as="p" size="md" className='parallaxText'>It's about building a team that believes in a shared vision</Typography>
            <Typography as="p" size="md" className='parallaxText'>and works relentlessly to achieve it.</Typography>
        </div>
      </div>
    </section> 
  )
}

export default TheQoute