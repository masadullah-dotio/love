import { type FC } from "react";
import { Code, Heart } from "lucide-react";

export interface FooterComponentProps {}

const FooterComponent: FC<FooterComponentProps> = () => {
  return (
    <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-auto max-w-fit p-4 px-8 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl z-50 text-center text-pink-400/90 dark:text-pink-600/90 text-base font-serif select-none pointer-events-none flex justify-center items-center gap-2">
      <p className="flex items-center gap-2 font-medium">
        <Code className="w-5 h-5 text-indigo-500 fill-current inline-block" />{" "}
        with{" "}
        <Heart className="w-5 h-5 text-red-500 fill-current inline-block animate-pulse" />{" "}
        just for you
      </p>
    </footer>
  );
};

export default FooterComponent;
