import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/shared/buttons"
import { Typography } from "../../../components/shared/typography"
import HeaderGlobe from "./HeaderGlobe";

const Header = () => {
  const navigate = useNavigate(); 

  return (
    <header className="header w-[90%] mx-auto">
      <div className="relative flex flex-col items-center justify-end min-h-[calc(100vh-100px)] w-full">

        <div className="header_shade left_shade"></div>
        <div className="header_shade right_shade"></div>

        <div className="flex w-full h-full items-center justify-center absolute">
          <HeaderGlobe />
        </div>

        <div className="flex items-end justify-between text-light-gray h-full w-full overflow-x-hidden">
          <div className="space-y-2.5">
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
              <Button onClick={() => navigate("/contact")} iconClassName="size-5" className="text-secondary-blue text-md text_apear text_apear1">Contact us</Button>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header