"use client";

import { useRef, type FC } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Heart } from "lucide-react";

export interface QuestionActionsComponentProps {
  onYesClick?: () => void;
}

const QuestionActionsComponent: FC<QuestionActionsComponentProps> = ({
  onYesClick,
}) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("button", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.5, // Slight delay to wait for text
        ease: "elastic.out(1, 0.3)",
        stagger: 0.2,
      });
    },
    { scope: container },
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 0.9,
      duration: 0.1,
      ease: "power1.out",
    });
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 0.1,
      ease: "power1.out",
    });
  };

  return (
    <div
      ref={container}
      className="flex gap-4 md:gap-8 lg:gap-12 w-full justify-center select-none"
    >
      <button
        type="button"
        disabled
        className="px-6 py-2 md:px-10 md:py-4 lg:px-16 lg:py-6 rounded-full bg-gray-200 text-gray-400 font-semibold md:text-2xl lg:text-4xl cursor-not-allowed opacity-50"
      >
        No
      </button>
      <button
        type="button"
        onClick={onYesClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="px-6 py-2 md:px-10 md:py-4 lg:px-16 lg:py-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold md:text-2xl lg:text-4xl shadow-lg shadow-pink-500/30 cursor-pointer flex items-center gap-3"
      >
        Yes{" "}
        <Heart className="fill-current w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </button>
    </div>
  );
};

export default QuestionActionsComponent;
