import React, { useState, useEffect, useRef } from 'react';

const HeadingSection: React.FC = () => {
  const [scrollCount, setScrollCount] = useState(0); // Track number of scrolls
  const scrollThreshold = 3; // Number of scrolls before allowing normal page scroll
  const sectionRef = useRef<HTMLDivElement>(null); // Reference to the scrollable section

  // Handle the wheel event
  const handleWheel = (event: WheelEvent) => {
    // Prevent default scroll behavior until threshold is reached
    if (scrollCount < scrollThreshold) {
      event.preventDefault();
      setScrollCount((prevCount) => prevCount + 1); // Increment scroll count

      // Keep the section centered by adjusting transform based on scroll direction
      if (event.deltaY > 0) {
        // Scroll down logic: Move the section slightly down
        if (sectionRef.current) {
          sectionRef.current.style.transform = `translateY(${50 * (scrollCount + 1)}px)`;
        }
      } else {
        // Scroll up logic: Move the section slightly up
        if (sectionRef.current) {
          sectionRef.current.style.transform = `translateY(${-50 * (scrollCount + 1)}px)`;
        }
      }
    } else {
      // Allow normal scrolling after threshold is reached
      window.scrollBy(0, event.deltaY);
    }
  };

  useEffect(() => {
    // Add event listener for the wheel event
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [scrollCount]);

  return (
    <div className="scroll-control-container">
      <div
        ref={sectionRef}
        className="scrollable-section"
        style={{
          height: '100vh', // Full screen height
          overflow: 'hidden', // Hide overflowing content
          position: 'relative',
          transition: 'transform 0.3s ease', // Smooth transition for scrolling
        }}
      >
        <div
          className="content"
          style={{
            height: '200vh', // Content height for scrolling inside section
            background: 'linear-gradient(to bottom, #ff7e5f, #feb47b)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '2rem',
            textAlign: 'center',
          }}
        >
          Scroll me! This section stays fixed for the first few scrolls.
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
