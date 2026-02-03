"use client";

import { useRef, type FC } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export interface QuestionTextComponentProps {}

const QuestionTextComponent: FC<QuestionTextComponentProps> = () => {
  const container = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".char",
        {
          y: 50,
          opacity: 0,
          rotateX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.05,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
      );

      // Continuous bubbly/floating effect
      gsap.to(".char", {
        y: -10,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.1,
          from: "center",
        },
        duration: 1.5,
        ease: "sine.inOut",
        delay: 1,
      });
    },
    { scope: container },
  );

  const text = "Would you like to be my Girlfriend?";

  return (
    <p
      ref={container}
      className="text-4xl md:text-6xl lg:text-7xl font-black text-center text-pink-500 font-serif leading-tight perspective-1000 select-none drop-shadow-xl w-full max-w-4xl mx-auto text-bubble dark:text-pink-400"
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char inline-block whitespace-pre transform-style-3d"
        >
          {char}
        </span>
      ))}
    </p>
  );
};

export default QuestionTextComponent;
