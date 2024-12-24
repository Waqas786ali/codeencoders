import { Typography } from "../../components/shared/typography"

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto z-20 relative my-5 mt-10 rounded-[12px] border-shine-gradient">
      <div className="rounded-[12px] bg-[linear-gradient(168deg,#000_8.95%,#292929_183.36%);] px-5 md:px-8 xl:px-10 py-5 flex flex-col gap-3 md:flex-row items-center justify-between md:gap-2 font-euro-light text-white">
        <div>
          <img className="w-full scale-105" src="/assets/logo.svg" alt="logo" />
        </div>
        <div className="flex items-center gap-10">
            <div className="flex gap-1 items-center">
              <span className="bg-secondary-blue size-2 rounded-full"></span>
              <Typography as="p" size="sm" className="cursor-pointer">Instagram</Typography>
            </div>
            <div className="flex gap-1 items-center">
              <span className="bg-secondary-blue size-2 rounded-full"></span>
              <Typography as="p" size="sm" className="cursor-pointer">Linkedin</Typography>
            </div>
        </div>
        <div className="">
            <Typography as="p" size="sm" className="cursor-pointer">2024. All rights reserved</Typography>
        </div>
      </div>
  </footer>
  )
}

export default Footer