import { Typography } from '../../../components/shared/typography'

const Header = () => {
  return (
    <header className="header min-h-[115vh] w-full relative flex flex-col items-center justify-center z-10 overflow-hidden">
      <div className="top_blue_shade"></div>
      <div className=" absolute top-10 sm:-left-20 right-0 h-[140vh] w-full sm:w-[160vw]" style={{
        backgroundImage: "url('/assets/images/team/header/nebula.svg')",
        backgroundAttachment: 'fixed',
        backgroundPosition: '100% 77%',
        backgroundSize: 'cover',
      }}></div>
       <div className="absolute -bottom-8 left-0 w-full h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent blur-md"></div>
      <div className='z-[1] flex justify-center items-center h-[95%] w-[90%] mx-auto'>
        <div className='flex flex-col items-center gap-2'>
          <div className='overflow-hidden'>
            <Typography as="p" size="xs" className='text_apear text-center font-euro-semibold text-secondary-blue'>
              The Team
            </Typography>
          </div>
          <div className='overflow-hidden'>
            <Typography as="h1" size="h1" className='text_apear text-center font-euro-light text-white'>
              Talent That Shapes
            </Typography>
          </div>
          <div className='overflow-hidden'>
            <Typography as="h1" size="h1" className='text_apear text-center font-euro-light text-white'>
              the Future
            </Typography>
          </div>
          <div className='overflow-hidden'>
            <Typography as="h5" size="h5" className='text_apear text-center font-euro-light text-white mt-1'>
              Our Team & Your Partners in Success
            </Typography>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
