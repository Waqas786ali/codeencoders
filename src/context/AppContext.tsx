// src/contexts/AppContext.tsx
import React, { useEffect,createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context data
interface AppContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isNavbarHovered: boolean;
  setIsNavbarHovered: (value: boolean) => void;
  IsDesktop: boolean;
  images: any;
  setImages: any;
  handleCategoryChange: any;
  isWorkGalleryLoading: boolean;
  category: string;
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNavbarHovered, setIsNavbarHovered] = useState<boolean>(false);
  const [IsDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  // --------------- Work Gallery ------------- //
    const pexel = (id: any) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

    const [images, setImages] = useState([
      // Front
      { position: [0, 0, 1.5], rotation: [0, 0, 0], url: '/assets/images/our-work/header/PawPlayLove.svg', text: "PawPlayLove", id: 1, },
      // Back
      // { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: "/assets/images/our-work/header/Lawnolu.svg", text: "Lawnolu", id: 2, },
      // { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: "/assets/images/our-work/header/single.svg", text: "singles n seene", id: 3, },
      // { position: [2, 0, -1.6], rotation: [0, -Math.PI / 2.5, 0], url: pexel(358578), text: "img4", id: 4, },
      // { position: [-2, 0, -1.6], rotation: [0, Math.PI / 2.5, 0], url: pexel(358578), text: "img5", id: 5, },
      // Left
      { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: '/assets/images/our-work/header/Lawnolu.svg', text: "Lawnolu", id: 6, },
      { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: '/assets/images/our-work/header/The_365_NFT.svg', text: "The 365 NFT", id: 7, },
      { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: '/assets/images/our-work/header/Neanderbros.svg', text: "Neanderbros", id: 8, },
      // { position: [-2, 0, 4], rotation: [0, Math.PI / 2.5, 0], url: pexel(344575), text: "img9", id: 9, },
      // { position: [-2, 0, 5.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(358576), text: "img10", id: 10, },
      // { position: [-2, 0, 6.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(358578), text: "img11", id: 11, },
      // { position: [-2, 0, 7.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358578), text: "img12", id: 12, },
      // { position: [-2, 0, 9], rotation: [0, Math.PI / 2.5, 0], url: pexel(358578), text: "img13", id: 13, },
      // Right
      { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: '/assets/images/our-work/header/single.svg', text: "Singles n Seene", id: 14, },
      { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: '/assets/images/our-work/header/Golden_Years.svg', text: "Golden Years", id: 15, },
      { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: '/assets/images/our-work/header/FITS.svg', text: "FITS", id: 16, },
      // { position: [2.25, 0, 4], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986), text: "img17", id: 17, },
      // { position: [2.25, 0, 5.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738987), text: "img18", id: 18, },
      // { position: [2.25, 0, 6.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738988), text: "img19", id: 19, },
      // { position: [2.25, 0, 7.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738988), text: "img20", id: 20, },
      // { position: [2.25, 0, 9], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738988), text: "img21", id: 21, },
    ]);

    const [isWorkGalleryLoading, setIsWorkGalleryLoading] = useState(false);
    const [category, setCategory] = useState("all");
  
    const allImages = [
      // Front
      { position: [0, 0, 1.5], rotation: [0, 0, 0], url: '/assets/images/our-work/1.png', text: "img1", id: 1, },
      // Back
      { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430), text: "img2", id: 2, },
      { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452), text: "img3", id: 3, },
      { position: [2, 0, -1.6], rotation: [0, -Math.PI / 2.5, 0], url: pexel(358578), text: "img4", id: 4, },
      { position: [-2, 0, -1.6], rotation: [0, Math.PI / 2.5, 0], url: pexel(358578), text: "img5", id: 5, },
      // Left
      { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482), text: "img6", id: 6, },
      { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185), text: "img7", id: 7, },
      { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574), text: "img8", id: 8, },
      { position: [-2, 0, 4], rotation: [0, Math.PI / 2.5, 0], url: pexel(344575), text: "img9", id: 9, },
      { position: [-2, 0, 5.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(358576), text: "img10", id: 10, },
      { position: [-2, 0, 6.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(358578), text: "img11", id: 11, },
      { position: [-2, 0, 7.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358578), text: "img12", id: 12, },
      { position: [-2, 0, 9], rotation: [0, Math.PI / 2.5, 0], url: pexel(358578), text: "img13", id: 13, },
      // Right
      { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675), text: "img14", id: 14, },
      { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738), text: "img15", id: 15, },
      { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986), text: "img16", id: 16, },
      { position: [2.25, 0, 4], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986), text: "img17", id: 17, },
      { position: [2.25, 0, 5.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738987), text: "img18", id: 18, },
      { position: [2.25, 0, 6.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738988), text: "img19", id: 19, },
      { position: [2.25, 0, 7.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738988), text: "img20", id: 20, },
      { position: [2.25, 0, 9], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738988), text: "img21", id: 21, },
    ];
    const blockchainImages = [
      { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970), text: "img1", id: 1 },
      // ... other blockchain category images
    ];
    const designImages = [
      { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970), text: "img1", id: 1 },
      // ... other design category images
    ];
    const developementImages = [
      { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970), text: "img1", id: 1 },
      // ... other design category images
    ];
  
    const handleCategoryChange = (selectedCategory: string) => {
      setIsWorkGalleryLoading(true);
      setCategory(selectedCategory);
  
      setTimeout(() => {
        switch (selectedCategory) {
          case "all":
            setImages(allImages);
            break;
          case "design":
            setImages(designImages);
            break;
          case "developement":
            setImages(developementImages);
            break;
          case "blockchain":
            setImages(blockchainImages);
            break;
          case "integrations":
            setImages(developementImages);
            break;
          default:
            setImages(allImages);
        }
        setIsWorkGalleryLoading(false);
      }, 1000); 
    };

  return (
    <AppContext.Provider value={{ 
        isLoading, setIsLoading, isNavbarHovered, setIsNavbarHovered, IsDesktop,
        // Our Work Gallery
        images, setImages,handleCategoryChange,isWorkGalleryLoading,category
      }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
