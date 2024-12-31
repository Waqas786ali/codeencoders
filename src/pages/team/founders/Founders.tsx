import { Typography } from "../../../components/shared/typography";
import { StickyScroll } from "./StickyScroll";

const Founders = () => {


  const content = [
    {
      title: "Our Founder",
      name: "Syed Mustafa Haider",
      num: "01",
    
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/assets/images/team/founders/ceo.svg"
            className="h-[85vh] w-auto object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      description: (
        <div className='space-y-5 text-light-gray'>
            <Typography as="p" size="xs" className='font-suisse-light leading-5'><span className='font-suisse-medium text-white'>Syed Mustafa Haider </span>is the visionary <br /> <span className='font-suisse-medium text-white'>Founder and CEO</span> of <span className='font-suisse-medium text-white'> Code Encoder. </span> </Typography>
            <Typography as="p" size="xs" className='font-suisse-light leading-5'>stablished on <span className='font-suisse-medium text-white'> January 1, 2023. </span> With a deep passion for innovation and <br /> technology, he built <span className='font-suisse-medium text-white'> Code Encoder </span> to provide cutting-edge solutions in <br /> design, development, blockchain, and integrations. </Typography>
            <Typography as="p" size="xs" className='font-suisse-light leading-5'> Under his <span className='font-suisse-medium text-white'> leadership, </span> <br /> the company has quickly gained recognition for its excellence in <br /> delivering client-centric, future-ready digital solutions.</Typography>
            <Typography as="p" size="xs" className='font-suisse-light leading-5'><span className='font-suisse-medium text-white'> Mustafa's </span> unwavering commitment to <br /> quality and innovation <br /> drives the team's mission to redefine possibilities and set new <br /> benchmarks in the tech industry.</Typography>   
        </div>
      ),
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/assets/images/team/founders/ceo.svg"
            className="h-[85vh] w-auto object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  const content1 = [
    {
      title: "Our COO & CO-Founder",
      name: "Hamas Ali Sabir",
      num: "02",
    
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/assets/images/team/founders/coo.svg"
            className="h-[85vh] w-auto object-cover"
            alt="coo"
          />
        </div>
      ),
    },
    {
      description: (
        <div className='space-y-5 text-light-gray'>
            <Typography as="p" size="xs" className='font-suisse-light leading-5'><span className='font-suisse-medium text-white'>Syed Mustafa Haider </span>is the visionary <br /> <span className='font-suisse-medium text-white'>Founder and CEO</span> of <span className='font-suisse-medium text-white'> Code Encoder. </span> </Typography>
            <Typography as="p" size="xs" className='font-suisse-light leading-5'>stablished on <span className='font-suisse-medium text-white'> January 1, 2023. </span> With a deep passion for innovation and <br /> technology, he built <span className='font-suisse-medium text-white'> Code Encoder </span> to provide cutting-edge solutions in <br /> design, development, blockchain, and integrations. </Typography>
            <Typography as="p" size="xs" className='font-suisse-light leading-5'> Under his <span className='font-suisse-medium text-white'> leadership, </span> <br /> the company has quickly gained recognition for its excellence in <br /> delivering client-centric, future-ready digital solutions.</Typography>
            <Typography as="p" size="xs" className='font-suisse-light leading-5'><span className='font-suisse-medium text-white'> Mustafa's </span> unwavering commitment to <br /> quality and innovation <br /> drives the team's mission to redefine possibilities and set new <br /> benchmarks in the tech industry.</Typography>   
        </div>
      ),
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/assets/images/team/founders/coo.svg"
            className="h-[85vh] w-auto object-cover"
            alt="coo"
          />
        </div>
      ),
    },
  ];

  return (
    <section className={`w-[90%] mx-auto py-0 space-y-10 text-white`}>
        <div className={`overflow-hidden lg:h-screen`}>
          <StickyScroll content={content} />
        </div>
        <div className={`overflow-hidden lg:h-screen`}>
          <StickyScroll content={content1} />
        </div>
    </section>
  );
};


export default Founders;
