import { Button } from '../../../components/shared/buttons';
import { Typography } from '../../../components/shared/typography';

const ContactForm = () => {
  return (
    <section className="w-[90%] mx-auto py-10 md:py-16 text-white">
      <div className="contact_form grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 md:gap-20">
        
      <div className='size-full rounded-[26px] border-shine-gradient'>
          <div className='size-full rounded-[26px] bg-black'>
            <form className="size-full p-[2px] w-full rounded-[26px] bg-[linear-gradient(108deg,rgba(0,0,0,0.40)_37.64%,rgba(41,41,41,0.40)_100%)] backdrop-blur-sm">
        
              <div className="p-5 py-8 md:p-8 rounded-lg bg-transparent">
                <Typography as="h3" size="h3" className="opacity-0 text-white font-euro-semibold mb-10 sm:mb-6">
                  Get in Touch
                </Typography>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {/* Name Input */}
                  <div className="mb-6 relative">
                    <label htmlFor="name" className="input_label block text-md font-euro-semibold text-light-gray mb-2">
                      Name <span className="text-[#FF5900]">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full py-2 text-white bg-transparent placeholder-gray-400 focus:outline-none "
                    />
                    <span className='absolute bottom-0 left-0 h-[1px] bg-light-gray bg-opacity-40 input_lines'></span>
                  </div>

                  {/* Email Input */}
                  <div className="mb-6 relative">
                    <label htmlFor="email" className="input_label block text-md font-euro-semibold text-light-gray mb-2">
                      Email <span className="text-[#FF5900]">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full py-2 text-white bg-transparent placeholder-gray-400 focus:outline-none "
                    />
                        <span className='absolute bottom-0 left-0 h-[1px] bg-light-gray bg-opacity-40 input_lines'></span>
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {/* Phone Input */}
                  <div className="mb-6 relative">
                    <label htmlFor="phone" className="input_label block text-md font-euro-semibold text-light-gray mb-2">
                      Phone <span className="text-[#FF5900]">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full py-2  text-white bg-transparent placeholder-gray-400 focus:outline-none "
                      />
                          <span className='absolute bottom-0 left-0 h-[1px] bg-light-gray bg-opacity-40 input_lines'></span>
                  </div>

                  {/* WhatsApp Input */}
                  <div className="mb-6 relative">
                    <label htmlFor="whatsapp" className="input_label block text-md font-euro-semibold text-light-gray mb-2">
                      WhatsApp
                    </label>
                    <input 
                      type="tel"
                      id="whatsapp" 
                      className="w-full py-2  text-white bg-transparent placeholder-gray-400 focus:outline-none "
                    />
                        <span className='absolute bottom-0 left-0 h-[1px] bg-light-gray bg-opacity-40 input_lines'></span>
                  </div>
                </div>

                {/* Describe Your Idea Input */}
                <div className="mb-6 relative">
                  <label htmlFor="idea" className="input_label block text-md font-euro-semibold text-light-gray mb-2">
                    Describe Your Idea
                  </label>
                  <textarea 
                    id="idea" 
                    rows={4}
                    className="w-full py-2  text-white bg-transparent placeholder-gray-400 focus:outline-none "
                  ></textarea>
                      <span className='absolute bottom-0 left-0 h-[1px] bg-light-gray bg-opacity-40 input_lines'></span>
                </div>

                {/* Submit Button */}
                <div className='flex justify-center py-4'>
                    <Button iconClassName='size-8' className='text-md text-secondary-blue'>
                        Send Now
                    </Button> 
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Instructions Section */}
        <div className='w-full'>
          <Typography as="h5" size="h5" className="text-white font-euro-semibold mb-6 parallaxText">
            What you need to do!
          </Typography>
          <ul className="space-y-4 font-suisse-light text-light-gray">
            <li className="flex gap-0 items-start">
              <div className="w-12"><img className="size-8" src="/assets/svgs/button.svg" alt="button" /></div>
              <Typography as="p" size="md" className='parallaxText'>
                Share the basic information about your project. Like <br /> expectations, challenges, and timeframes.
              </Typography>
            </li>
            <li className="flex gap-0 items-start">
              <div className="w-12"><img className="size-8" src="/assets/svgs/button.svg" alt="button" /></div>
              <Typography as="p" size="md" className='parallaxText'>
                We’ll come back within 24 hours.
              </Typography>
            </li>
            <li className="flex gap-0 items-start">
              <div className="w-12"><img className="size-8" src="/assets/svgs/button.svg" alt="button" /></div>
              <Typography as="p" size="md" className='parallaxText'>
                We will sign the NDA if required, and start the <br /> project discussion.
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
