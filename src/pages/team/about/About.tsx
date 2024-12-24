const About = () => {

  return (
    <section className='team_about h-screen  relative bg-transparent overflow-x-hidden'>
        <video className='-z-10 absolute top-[60%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover  h-[100vh] !w-full' autoPlay loop muted playsInline>
          <source src='/assets/images/team/about/about_bg_3.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='z-10 relative w-full h-full flex justify-center items-center'>
          <img className='about_img h-full sm:h-[80%] w-[90%] sm:w-[80%] rounded-[40px] object-fill' src="/assets/images/team/about/about.svg" alt="about" />
        </div>
        <div className="absolute -bottom-8 left-0 w-full h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent blur-md"></div>
    </section>
  )
}

export default About;