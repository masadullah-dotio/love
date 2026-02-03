"use client";

import { useRef, type FC } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import QuestionTextComponent from "./QuestionTextComponent";
import QuestionActionsComponent from "./QuestionActionsComponent";

export interface QuestionCardComponentProps {
  onYesClick?: () => void;
}

const QuestionCardComponent: FC<QuestionCardComponentProps> = ({
  onYesClick,
}) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Entrance animation
      gsap.from(container.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.6)",
      });

      // Tilt effect setup
      if (!container.current) return;

      const xTo = gsap.quickTo(container.current, "rotationY", {
        duration: 0.4,
        ease: "power3",
      });
      const yTo = gsap.quickTo(container.current, "rotationX", {
        duration: 0.4,
        ease: "power3",
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!container.current) return;
        const { left, top, width, height } =
          container.current.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        xTo(xPct * 20); // Tilt range
        yTo(yPct * -20);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      container.current.addEventListener("mousemove", handleMouseMove);
      container.current.addEventListener("mouseleave", handleMouseLeave);

      // Floating animation
      gsap.to(container.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      // Floating Particles (Simple Hearts)
      const particles = container.current.querySelectorAll(".particle");

      // Initial Random Positioning via GSAP (removes inline styles)
      particles.forEach((p) => {
        gsap.set(p, {
          left: `${10 + Math.random() * 80}%`,
          top: "100%",
        });

        gsap.to(p, {
          y: -100 - Math.random() * 100,
          x: (Math.random() - 0.5) * 50,
          opacity: 0,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          ease: "power1.out",
          delay: Math.random() * 2,
        });
      });

      return () => {
        container.current?.removeEventListener("mousemove", handleMouseMove);
        container.current?.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: container },
  );

  return (
    <div className="perspective-1000 group">
      <article
        ref={container}
        className="transform-style-3d relative bg-white/30 dark:bg-white/5 backdrop-blur-2xl p-8 md:p-12 lg:p-16 rounded-[2.5rem] flex flex-col items-center gap-8 md:gap-12 max-w-sm md:max-w-2xl lg:max-w-4xl w-full mx-4 overflow-hidden card-gloss transition-colors duration-500"
      >
        {/* Glossy Reflection for Bubble Effect */}
        <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-[2.5rem] pointer-events-none" />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden font-serif text-pink-400/40 select-none">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="particle absolute text-4xl blur-[1px]">
              ♥
            </span>
          ))}
        </div>

        <QuestionTextComponent />
        <QuestionActionsComponent onYesClick={onYesClick} />
      </article>
    </div>
  );
};

export default QuestionCardComponent;
