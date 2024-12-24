"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "../../../lib/utils";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { Typography } from '../../../components/shared/typography';

gsap.registerPlugin(Draggable);

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    imageUrl: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const scrollerWidth = useRef(0); // To store scroller's total width for dragging

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
      scrollerWidth.current = scrollerRef.current.scrollWidth;
      makeDraggable();
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Make the scroller draggable
  const makeDraggable = () => {
    if (containerRef.current && scrollerRef.current) {
      Draggable.create(scrollerRef.current, {
        type: "x",
        edgeResistance: 0.65,
        throwProps: true, // Automatically handles deceleration after the drag
        onDrag: function () {
          if (pauseOnHover && scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = "paused"; // Pause the animation during drag
          }
        },
        onDragEnd: function () {
          if (pauseOnHover && scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = "running"; // Resume the animation after drag ends
          }
        },
        onThrowComplete: function () {
          if (pauseOnHover && scrollerRef.current) {
            scrollerRef.current.style.animationPlayState = "running"; // Ensure animation resumes after throw
          }
        },
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((member, index) => (
          <div key={index} className="card grid grid-cols-[200px,200px]">
          <img
            className="w-full rounded-[14px] h-[220px] object-cover"
            src={member.imageUrl} 
            alt={`${member.name}`}
          />
          <div className="h-full flex items-end">
            <div className="min-h-[40%] w-full rounded-r-[14px] border-shine-gradient">
              <div className="min-h-[100px] size-full bg-black rounded-r-[14px] flex flex-col justify-center gap-1 px-3">
              <Typography as="p" size="md" className="font-euro-semibold text-primary-orange">
                {member.name}
              </Typography>
              <Typography as="p" size="sm" className="font-euro-light text-white">
                {member.title}
              </Typography>
              </div>
            </div>
          </div>
        </div>
        ))}
      </ul>
    </div>
  );
};
