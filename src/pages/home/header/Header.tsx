
import { Button } from "../../../components/shared/buttons"
import { Typography } from "../../../components/shared/typography"
import HeaderGlobe from "./HeaderGlobe";

const Header = () => {

  return (
    <header className="w-[90%] mx-auto header min-h-[calc(100vh-100px)] relative flex flex-col items-center justify-end">
      <div className="left_shade"></div>
      <div className="right_shade"></div>
      <div className="flex h-full items-center justify-center absolute">
        <HeaderGlobe />
      </div>
      <div className="flex items-end justify-between text-light-gray h-full w-full">
        <div className="space-y-1">
          <div className="overflow-hidden">
          <Typography as="p" size="sm" className="font-euro-semibold text-white text_apear text_apear1">EST.  —  2022</Typography>
          </div>
          <div className="overflow-hidden">
          <div className="overflow-hidden">
          <Typography as="p" size="lg" className="font-euro-light text_apear text_apear1" >Crafting Solutions.</Typography>
          </div>
          <div className="overflow-hidden">
          <Typography as="p" size="lg" className="font-euro-light text_apear text_apear1" >Beyond Code.</Typography>
          </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="overflow-hidden flex flex-col">
            <div className="overflow-hidden">
              <Typography as="p" size="lg" className="font-euro-light text_apear text_apear1" >Design.</Typography>
            </div>
            <div className="overflow-hidden">
              <Typography as="p" size="lg" className="font-euro-light text_apear text_apear1" >Develop.</Typography>
            </div>
            <div className="overflow-hidden">
              <Typography as="p" size="lg" className="font-euro-light text_apear text_apear1" >Decentralize.</Typography>
            </div>
          </div>
          <div className="overflow-hidden hidden sm:block">
          <Button iconClassName="size-5" className="text-secondary-blue text-md text_apear text_apear1">Contact us</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header