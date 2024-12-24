import React from 'react'
import { Typography } from '../../../components/shared/typography'

const Header = () => {
  return (
    <header className="w-[90%] mx-auto header min-h-screen relative flex flex-col items-center justify-center">
    <div className="top_shade"></div>
    <div className='flex justify-center items-center h-[95%]'>
        <div className='flex flex-col items-center gap-2'>
          <div className='overflow-hidden'>
            <Typography as="p" size="xs" className='text_apear text-center font-euro-semibold text-secondary-blue'>
            Let’s Connect
            </Typography>
          </div>
          <div className='overflow-hidden'>
            <Typography as="h1" size="h1" className='text_apear text-center font-euro-light text-white'>
            Ready to Build
            </Typography>
            </div>
          <div className='overflow-hidden'>
            <Typography as="h1" size="h1" className='text_apear text-center font-euro-light text-white'>
            Your Future?
            </Typography>
            </div>
          <div className='overflow-hidden'>
            <Typography as="h5" size="h5" className='text_apear text-center font-euro-light text-white mt-1'>
            Get in touch now.
            </Typography>
            </div>
        </div>
    </div>

  </header>
  )
}

export default Header