"use client";

import { useRef, type FC } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export interface ThankYouComponentProps {}

const ThankYouComponent: FC<ThankYouComponentProps> = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".char", {
        y: 100,
        opacity: 0,
        rotateX: -90,
        stagger: 0.1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      });
    },
    { scope: container },
  );

  const text = "Thank You";

  return (
    <div
      ref={container}
      className="flex items-center justify-center h-full w-full"
    >
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-pink-500 dark:text-pink-400 font-serif text-center drop-shadow-2xl">
        {text.split("").map((char, index) => (
          <span key={index} className="char inline-block whitespace-pre">
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default ThankYouComponent;
