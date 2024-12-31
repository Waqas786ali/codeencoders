
import { useAppContext } from '../../../context/AppContext';
import { WorkGallery } from '../WorkGallery'

const Header = () => {
 const {images, handleCategoryChange,isWorkGalleryLoading, category } = useAppContext();

  return (
    <header className="header w-[90%] mx-auto">
      <div className='relative'>
        {/* Category selection */}
        <div className='z-10 absolute bottom-0 left-0 w-full flex justify-center'>
          <div>

            <div className="w-fit grid grid-cols-2 sm:flex justify-center gap-1.5 p-1.5 mx-auto rounded-xl bg-[rgba(217,217,217,0.10)] backdrop-blur-[6px]">
              <button onClick={() => handleCategoryChange("all")} className={`px-5 py-1.5 border rounded-md bg-[#3E3E3E] ${category === "all" ? "border-secondary-blue text-secondary-blue bg-secondary-blue bg-opacity-20" : "border-[#707070]  text-[#BFBFBF]"}`}>All</button>
              <button onClick={() => handleCategoryChange("mobileApps")} className={`px-5 py-1.5 border rounded-md bg-[#3E3E3E] ${category === "mobileApps" ? "border-secondary-blue text-secondary-blue bg-secondary-blue bg-opacity-20" : "border-[#707070]  text-[#BFBFBF]"}`}>Mobile Apps</button>
              <button onClick={() => handleCategoryChange("webApps")} className={`px-5 py-1.5 border rounded-md bg-[#3E3E3E] ${category === "webApps" ? "border-secondary-blue text-secondary-blue bg-secondary-blue bg-opacity-20" : "border-[#707070]  text-[#BFBFBF]"}`}>Web Apps</button>
              <button onClick={() => handleCategoryChange("blockChain")} className={`px-5 py-1.5 border rounded-md bg-[#3E3E3E] ${category === "blockChain" ? "border-secondary-blue text-secondary-blue bg-secondary-blue bg-opacity-20" : "border-[#707070]  text-[#BFBFBF]"}`}>Blockchain</button>
            </div>
          </div>
        </div>

        
        <div className='h-[calc(100vh-100px)] w-full'>
          {/* Loader */}
          {isWorkGalleryLoading && (
            <div className="flex items-center justify-center h-full w-full z-50">
              <span className="text-white text-xl font-semibold animate-pulse">Loading...</span>
            </div>
          )}

          {/* Gallery with smooth transition */}
          <div className={`h-full w-full transition-all duration-1000 opacity-${isWorkGalleryLoading ? '0' : '100'}`}>
            {!isWorkGalleryLoading && <WorkGallery images={images} />}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
