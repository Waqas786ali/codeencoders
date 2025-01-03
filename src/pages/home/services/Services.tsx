import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { BackgroundBeamsWithCollision } from "../../../components/ui/background-beam/background-beams-with-collision"
import { Button } from "../../../components/shared/buttons"
import { Typography } from "../../../components/shared/typography"

const Services = () => {
    const {handleCategoryChange } = useAppContext();
    const navigate = useNavigate(); 

  return (
    
    <section className="w-[90%] mx-auto services_section relative">
        <div className="lock_section min-h-[50vh] flex items-center">
            <div className="font-euro-light text-center w-full space-y-1.5">
                    <div className="overflow-hidden">
                        <Typography as="h4" size="sm" className="text-primary-orange text_reveal">
                        A Glimpse of Our Excellence
                        </Typography>
                    </div>
                    <div className="overflow-hidden">
                        <Typography as="h2" size="h2" className="text-white w-full text_reveal">
                            Future-Driven Solutions, Today.
                        </Typography>
                    </div>
            </div>
        </div>

        <BackgroundBeamsWithCollision servicesCount={4}>
            <div className="h-full relative">
                    <div className="flex flex-col">
                
                        <div className="parrallaxSection lg:h-screen grid grid-cols-1 lg:grid-cols-3 items-center gap-0">
                            <div className="hidden sm:block lg:pt-5 self-start serviceImgUP1"><img className="object-cover w-full" src="/assets/images/home/services/design1.svg" alt="design1" /></div>
                            <div className="lg:pl-5 xl:pl-14 font-euro-light text-white flex flex-col gap-2 sm:gap-5 items-center text-left">
                                <div className="space-y-2.5 w-full">
                                    <Typography as="h4" size="xl" className="font-euro-semibold parallaxText">Design</Typography>
                                    <Typography as="h6" size="lg" className="parallaxText">From Concepts to <br /> Captivating Interfaces</Typography>
                                </div>
                                <div className="w-full">
                                    <Typography as="p" size="sm" className="parallaxText font-suisse-light leading-loose text-light-gray w-full xl:w-[85%] 3xl:w-[90%] pt-5">Our design services blend creativity and strategy to craft visually stunning and user-centric experiences. From intuitive UI/UX designs that enhance digital interactions to impactful graphic designs and branding solutions that define your identity, we ensure every element resonates with your vision. Let us turn your ideas into designs that inspire and connect.</Typography>
                                </div>
                                <div className="w-full">
                                    <Button onClick={()=> {
                                        navigate("/our-work");
                                        handleCategoryChange("all")
                                    }} iconClassName="size-5" className="text-secondary-blue text-xs lg:text-sm" animationClass="parallaxText-button">Case Studies (checkout now)</Button>
                                </div>
                            </div>
                            <div className="self-end lg:pb-5 serviceImgUP2"><img className="object-cover w-full" src="/assets/images/home/services/design2.svg" alt="design2" /></div>
                        </div>

                        <div className="parrallaxSection lg:h-screen grid grid-cols-1 lg:grid-cols-3 items-center gap-0">
                            <div className="hidden sm:block self-start lg:pt-5 serviceImgUP1"><img className="object-cover w-full" src="/assets/images/home/services/developement1.svg" alt="developement1" /></div>
                            <div className="lg:pl-5 xl:pl-14 font-euro-light text-white flex flex-col gap-2 sm:gap-5 items-center text-left">
                                <div className="space-y-2.5 w-full">
                                    <Typography as="h4" size="xl" className="font-euro-semibold parallaxText">Development</Typography>
                                    <Typography as="h6" size="lg" className="parallaxText">Code That Powers Ideas <br />
                                    Scalable, Reliable, Tailor-Made</Typography>
                                </div>
                                <div className="w-full">
                                    <Typography as="p" size="sm" className="parallaxText font-suisse-light leading-loose text-light-gray w-full xl:w-[85%] 3xl:w-[90%] pt-5">Our development services bring your ideas to life with cutting-edge technology and precision. From robust front-end and back-end solutions to seamless mobile app development, we create scalable and efficient systems tailored to your needs. With a focus on quality and innovation, we deliver code that powers exceptional digital experiences.</Typography>
                                </div>
                                <div className="w-full">
                                    <Button onClick={()=> {
                                        navigate("/our-work");
                                        handleCategoryChange("all")
                                    }} iconClassName="size-5" className=" text-secondary-blue text-xs lg:text-sm" animationClass="parallaxText-button">Let’s See Our Success Stories</Button>
                                </div>
                            </div>
                            <div className="lg:pb-5 self-end serviceImgUP2"><img className="object-cover w-full" src="/assets/images/home/services/developement2.svg" alt="developement2" /></div>
                        </div>

                        <div className="parrallaxSection lg:h-screen grid grid-cols-1 lg:grid-cols-3 items-center gap-0">
                            <div className="hidden sm:block self-start lg:pt-5 serviceImgUP1"><img className="object-cover w-full" src="/assets/images/home/services/blockchain1.svg" alt="blockchain1" /></div>
                            <div className="lg:pl-5 xl:pl-14 font-euro-light text-white flex flex-col gap-2 sm:gap-5 items-center text-left">
                                <div className="space-y-2.5 w-full">
                                    <Typography as="h4" size="xl" className="font-euro-semibold parallaxText">Blockchain</Typography>
                                    <Typography as="h6" size="lg" className="parallaxText">Securing Tomorrow with  <br /> Blockchain. Smart Contracts.</Typography>
                                </div>
                                <div className="w-full">
                                    <Typography as="p" size="sm" className="parallaxText font-suisse-light leading-loose text-light-gray w-full xl:w-[85%] 3xl:w-[90%] pt-5">Empowering the future with blockchain technology, we specialize in building secure, transparent, and scalable solutions. From smart contract development to decentralized applications, we leverage blockchain to revolutionize industries and ensure trust and efficiency in every transaction. Let us help you harness the power of blockchain for a smarter tomorrow.</Typography>
                                </div>
                                <div className="w-full">
                                    <Button onClick={()=> {
                                        navigate("/our-work");
                                        handleCategoryChange("all")
                                    }} iconClassName="size-5" className=" text-secondary-blue text-xs lg:text-sm" animationClass="parallaxText-button">Checkout our portfolio</Button>
                                </div>
                            </div>
                            <div className="self-end lg:pb-5 serviceImgUP2"><img className="object-cover w-full" src="/assets/images/home/services/blockchain2.svg" alt="blockchain2" /></div>
                        </div>

                        <div className="parrallaxSection lg:h-screen grid grid-cols-1 lg:grid-cols-3 items-center gap-0">
                            <div className="hidden sm:block self-start lg:pt-5 serviceImgUP1"><img className="object-cover w-full" src="/assets/images/home/services/integration1.svg" alt="integration1" /></div>
                            <div className="lg:pl-5 xl:pl-14 font-euro-light text-white flex flex-col gap-2 sm:gap-5 items-center text-left">
                                <div className="space-y-2.5 w-full">
                                    <Typography as="h4" size="xl" className="font-euro-semibold parallaxText">Integrations</Typography>
                                    <Typography as="h6" size="lg" className="parallaxText">Bringing Systems Together, <br /> Effortlessly</Typography>
                                </div>
                                <div className="w-full">
                                    <Typography as="p" size="sm" className="parallaxText font-suisse-light leading-loose text-light-gray w-full xl:w-[85%] 3xl:w-[90%] pt-5"> Seamlessly connect your systems and workflows with our integration solutions. Whether it's APIs, third-party tools, or custom integrations, we ensure smooth communication between platforms for enhanced efficiency and performance. Unlock the full potential of your ecosystem with solutions tailored to your unique needs.</Typography>
                                </div>
                                <div className="w-full">
                                    <Button onClick={()=> {
                                        navigate("/our-work");
                                        handleCategoryChange("all")
                                    }} iconClassName="size-5" className="text-secondary-blue text-xs lg:text-sm" animationClass="parallaxText-button">A Glimpse of Our Excellence</Button>
                                </div>
                            </div>
                            <div className="self-end lg:pb-5 serviceImgUP2"><img className="object-cover w-full" src="/assets/images/home/services/integration2.svg" alt="integration2" /></div>
                        </div>
                        
                    </div>
            </div>
        </BackgroundBeamsWithCollision>
    </section>
  
  )
}

export default Services