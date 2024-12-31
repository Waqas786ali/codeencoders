import { Typography } from '../../../components/shared/typography'

const Header = () => {
  return (
    <header className="w-[100%] mx-auto header h-screen relative flex flex-col items-center justify-center overflow-x-hidden">
    <div className='flex justify-center items-center h-[95%]'>
        <div className='flex flex-col items-center gap-2'>
          <div className='overflow-hidden'>
            <Typography as="p" size="xs" className='text_apear text-center font-euro-semibold text-secondary-blue'>
                Behind
            </Typography>
          </div>
          <div className='overflow-hidden'>
            <Typography as="h1" size="h1" className='text_apear text-center font-euro-light text-white'>
                The Story
            </Typography>
            </div>
          <div className='overflow-hidden'>
            <Typography as="h5" size="h5" className='text_apear text-center font-euro-light text-white mt-1'>
            That Tells Every Thing.
            </Typography>
            </div>
        </div>
    </div>
    <div className="w-[90%] mx-auto flex items-center justify-center sm:justify-between text-light-gray">
      <div className="space-y-1 hidden sm:block">
        <Typography as="p" size="sm" className="font-euro-light text-white text_apear">Driven to Deliver.</Typography>
      </div>
      <div className="space-y-1 text-center sm:text-left">
        <Typography as="p" size="lg" className="font-euro-light capitalize text_apear">a commitment to provide <br className='hidden sm:block' /> exceptional results.</Typography>
      </div>
    </div>
  </header>
  )
}

export default Header