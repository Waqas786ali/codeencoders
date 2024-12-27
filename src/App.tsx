import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import Router from "./Router";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { AppProvider } from "./context/AppContext";
import Loader from "./components/shared/loader/Loader";
import { useAppContext } from "./context/AppContext"
import { BrowserRouter } from "react-router-dom";
import CustomCursor from "./components/ui/custom-cursor/customCursor";
import { useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {

  useLenis((lenis) => {
    lenis.on("scroll", ScrollTrigger.update);
  });


  return (
    <div className="parent">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          infinite: false,
          duration: 1.2,
        }}
      >
        <AppProvider>
          <BrowserRouter> 
          <RouteChangeHandler />
        </BrowserRouter>
        </AppProvider>
      </ReactLenis>
    </div>
  );
}


const RouteChangeHandler = () => {
  const { isLoading,setIsLoading, IsDesktop } = useAppContext();

  return (
    <>
     {isLoading ? <Loader start={0} end={100} speed={30} setIsLoading={setIsLoading} />
        :  
        (
          <>
            <Navbar />
            <Router />
            {IsDesktop && <CustomCursor />}
            <Footer />
          </>
        )
      }
    </>
  );
};

export default App;
