import React, { useState } from 'react'
import { Typography } from '../../../components/shared/typography'
import { WorkGallery } from '../WorkGallery'

const Header = () => {
  const pexel = (id: any) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
  const [images, setImages] = useState([
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: '/assets/images/our-work/1.jpg', text: "img1", id: 1, },
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
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("all"); // Default category

  const blockchainImages = [
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970), text: "img1", id: 1 },
    // ... other blockchain category images
  ];

  const allImages = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: '/assets/images/our-work/1.jpg', text: "img1", id: 1, },
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

  const designImages = [
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970), text: "img1", id: 1 },
    // ... other design category images
  ];
  const frontendImages = [
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970), text: "img1", id: 1 },
    // ... other design category images
  ];

  const handleCategoryChange = (selectedCategory: string) => {
    setIsLoading(true); // Set loading state to true when images are being updated
    setCategory(selectedCategory);

    // Simulate loading time before setting the new images
    setTimeout(() => {
      switch (selectedCategory) {
        case "all":
          setImages(allImages);
          break;
        case "blockchain":
          setImages(blockchainImages);
          break;
        case "frontend":
          setImages(frontendImages);
          break;
        case "design":
          setImages(designImages);
          break;
        default:
          setImages(allImages); // Default to frontend images
      }
      setIsLoading(false); // Reset loading state after images are set
    }, 1000); // Simulate a 1-second loading time
  };

  return (
    <header className="header w-[90%] mx-auto">
      <div className='relative'>
        {/* Category selection */}
        <div className='z-10 absolute bottom-0 left-0 w-full flex justify-center'>
          <div>

            <div className="w-fit grid grid-cols-2 sm:flex justify-center gap-1.5 p-1.5 mx-auto rounded-xl bg-[rgba(217,217,217,0.10)] backdrop-blur-[6px]">
              <button onClick={() => handleCategoryChange("all")} className={`px-5 py-1.5 border rounded-md bg-[#3E3E3E] ${category === "all" ? "border-secondary-blue text-secondary-blue bg-secondary-blue bg-opacity-20" : "border-[#707070]  text-[#BFBFBF]"}`}>All</button>
              <button onClick={() => handleCategoryChange("blockchain")} className={`px-5 py-1.5 border rounded-md bg-[#3E3E3E] ${category === "blockchain" ? "border-secondary-blue text-secondary-blue bg-secondary-blue bg-opacity-20" : "border-[#707070]  text-[#BFBFBF]"}`}>Blockchain</button>
              <button onClick={() => handleCategoryChange("frontend")} className={`px-5 py-1.5 border rounded-md bg-[#3E3E3E] ${category === "frontend" ? "border-secondary-blue text-secondary-blue bg-secondary-blue bg-opacity-20" : "border-[#707070]  text-[#BFBFBF]"}`}>Web Apps</button>
              <button onClick={() => handleCategoryChange("design")} className={`px-5 py-1.5 border rounded-md bg-[#3E3E3E] ${category === "design" ? "border-secondary-blue text-secondary-blue bg-secondary-blue bg-opacity-20" : "border-[#707070]  text-[#BFBFBF]"}`}>Mobile Apps</button>
            </div>
          </div>
        </div>

        
        <div className='h-[calc(100vh-100px)] w-full'>
          {/* Loader */}
          {isLoading && (
            <div className="flex items-center justify-center h-full w-full z-50">
              <span className="text-white text-xl font-semibold animate-pulse">Loading...</span>
            </div>
          )}

          {/* Gallery with smooth transition */}
          <div className={`h-full w-full transition-all duration-1000 opacity-${isLoading ? '0' : '100'}`}>
            {!isLoading && <WorkGallery images={images} />}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
