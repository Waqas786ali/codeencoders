import { Typography } from '../../../components/shared/typography'

const ClientInfo = () => {
  return (
    <div className='w-[90%] mx-auto min-h-[80vh] flex items-center text-white'>
      <div className='w-full h-full flex flex-col justify-center items-center gap-2 py-10 md:py-0'>
        <div className='w-full flex flex-col items-center justify-center text-center'>
          <div className='overflow-hidden'>
          <Typography as="h5" size="h5" className='font-euro-semibold capitalize text_apear1'>We are also</Typography>
          </div>
          <div className='overflow-hidden'>

          <Typography as="h5" size="h5" className='font-euro-semibold capitalize text_apear1'>available at</Typography>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 pt-10 md:pt-20 w-full font-euro-semibold'>
          <div className='info_card relative rounded-[24px] border-shine-gradient'>
              <div className='size-full rounded-[24px] bg-black w-full px-5 lg:px-8 2xl:px-10 py-12 xl:py-12'>
                <Typography as="p" size="xs" className=' text-secondary-blue'>Call Us</Typography>
                <Typography as="p" size="xl" className='text-blue-gradient-2 mt-1'>Phone Number</Typography>
                <Typography as="p" size="md" className='font-euro-light mt-3'>+92 306 9470 169</Typography>
              </div>
          </div>
          <div className='info_card relative rounded-[24px] border-shine-gradient'>
            <div className='size-full rounded-[24px] bg-black w-full px-5 lg:px-8 2xl:px-10 py-12 xl:py-12'>
              <Typography as="p" size="xs" className=' text-secondary-blue'>Call Us</Typography>
              <Typography as="p" size="xl" className='text-blue-gradient-2 mt-1'>Email Address</Typography>
              <Typography as="p" size="md" className='font-euro-light mt-3'>info@codeencoders.com</Typography>
            </div>
          </div>
          <div className='info_card relative rounded-[24px] border-shine-gradient'>
            <div className='size-full rounded-[24px] bg-black w-full px-5 lg:px-8 2xl:px-10 py-12 xl:py-12'>
              <Typography as="p" size="xs" className=' text-secondary-blue'>Call Us</Typography>
              <Typography as="p" size="xl" className='text-blue-gradient-2 mt-1'>Location</Typography>
              <Typography as="p" size="md" className='font-euro-light mt-3'>102-Y Block, DHA Phase 3, Lahore, Pakistan.</Typography>
            </div>
          </div>
         

        </div>
      </div>
    </div>  
  )
}

export default ClientInfo;