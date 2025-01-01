import './loader.css';
import React, { useState, useEffect } from 'react';
import { BackgroundBeams } from '../../ui/background-beams/background-beams';
import { Typography } from '../typography';

interface NumberLoaderProps {
  start?: number;
  end: number;
  started?: boolean;
  speed?: number;
  setIsLoading: (value: boolean) => void;
  setShouldAnimePlay: (value: boolean) => void;
}

const Loader: React.FC<NumberLoaderProps> = ({
  start = 0,
  end,
  speed = 100,
  setIsLoading,
  setShouldAnimePlay,
  started = true, // default to true to start the loader by default
}) => {
  const [number, setNumber] = useState<number>(start);

  useEffect(() => {
    // Only run loader if `started` is true
    if (!started) return;
    setShouldAnimePlay(false);
    setIsLoading(true);

    let currentProgress = start;
    const interval = setInterval(() => {
      if (currentProgress < end) {
        currentProgress += 1;
        setNumber(currentProgress);
      }
      else {
        clearInterval(interval);
        setIsLoading(false);
        setShouldAnimePlay(true);
        console.log("done", currentProgress);
        
      }
    }, speed);
    
    // Cleanup interval on component unmount or route change
    return () => {
      clearInterval(interval);
    };
  }, [start, end, speed, setIsLoading, started]);

  return (
    <section className="z-[1000000] bg-black fixed inset-0 h-screen w-screen flex items-center justify-center text-white">
      <BackgroundBeams />
      <div className="flex flex-col gap-5">
        <Typography as="h3" size="h3" className="text-center font-euro-light text-white text_appear">
          {number}%
        </Typography>
        <div>
          <div
            className="loader"
            style={{ '--loader-width': `${number}%` } as React.CSSProperties}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
