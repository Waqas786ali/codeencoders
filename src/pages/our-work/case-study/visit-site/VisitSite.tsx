import { Button } from '../../../../components/shared/buttons';
import { Typography } from '../../../../components/shared/typography'


const VisitSite = () => {  

  return (
    <div className='w-[90%] sm:w-[80%] md:w-[60%] mx-auto text-white'>
    <div className='w-full flex flex-col items-center gap-20 py-10'>

        <div className='w-full flex items-center justify-between py-4 border-y border-light-gray border-opacity-30'>
            <div>
              <Typography as="p" size="sm" className='font-euro-semibold text-white'>Visit Site</Typography>
            </div>
            <div><Button iconClassName='size-8' className='text-secondary-blue text-sm font-euro-semibold'>Contact Us</Button></div>
        </div>

    </div>
</div>
  )
}

export default VisitSite;