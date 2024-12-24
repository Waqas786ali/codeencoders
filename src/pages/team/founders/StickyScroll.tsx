import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";
import { Typography } from "../../../components/shared/typography";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title?: string;
    name?: string;
    num?: string;
    description?: React.ReactNode | any;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);

  const cardLength = content.length;

  // Track scroll progress and determine active card
  const handleScroll = () => {
    if (ref.current) {
      const scrollProgress =
        ref.current.scrollTop / (ref.current.scrollHeight - ref.current.clientHeight);
      const progress = scrollProgress * cardLength;
      const closestCard = Math.min(Math.floor(progress), cardLength - 1);
      setActiveCard(closestCard);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      style={{
        transition: "background-color 0.3s ease",
        scrollBehavior: "smooth",
      }}
      className="stickyScroll min-h-screen w-full overflow-x-hidden grid grid-cols-1 lg:grid-cols-2 place-items-center items-end relative overflow-y-auto"
      ref={ref}
      data-lenis-prevent
    >
       <div
        className={cn(
          "rounded-xl sticky top-24 z-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
      <div className="relative flex justify-start items-end px-4 h-[100%]">
        <div className="min-h-[70%] max-h-[70%] lg:min-h-[40%] lg:max-h-[40%]">
          {content.map((item, index) => (
            <div key={index} className="my-0">
                <div className="text-center flex flex-col gap-4 items-center overflow-hidden">
                  <Typography as="h3" size="h3" style={{
                      opacity: activeCard === index ? 1 : 0.3,
                      transition: "opacity 0.3s ease",
                    }} className="font-euro-semibold w-[70%]">
                      {item?.title}
                  </Typography>
                  <Typography as="p" size="base" style={{
                      opacity: activeCard === index ? 1 : 0.3,
                      transition: "opacity 0.3s ease",
                    }} className="font-euro-light">
                    {item?.name}
                  </Typography>

                  <Typography as="p" size="md" style={{
                    opacity: activeCard === index ? 1 : 0.3,
                    transition: "opacity 0.3s ease",
                  }} className="font-euro-semibold text-primary-orange">
                      {item?.num}
                  </Typography>
                  <div style={{
                    opacity: activeCard === index ? 1 : 0.3,
                    transition: "opacity 0.3s ease",
                  }}>
                    {item?.description}
                  </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};
