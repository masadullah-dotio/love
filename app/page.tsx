"use client";
import { useState, type FC } from "react";
import { motion, AnimatePresence } from "motion/react";
import QuestionCardComponent from "./components/QuestionCardComponent";
import ModalComponent from "./components/ModalComponent";
import ThankYouComponent from "./components/ThankYouComponent";

export interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const [viewState, setViewState] = useState<
    "question" | "modal" | "thank_you"
  >("question");

  return (
    <motion.section className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-purple-100 to-orange-50 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900 overflow-hidden relative touch-none">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

      <AnimatePresence mode="wait">
        {viewState === "question" && (
          <motion.div
            key="question"
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full flex justify-center"
          >
            <QuestionCardComponent onYesClick={() => setViewState("modal")} />
          </motion.div>
        )}

        {viewState === "thank_you" && (
          <motion.div
            key="thank_you"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full flex justify-center"
          >
            <ThankYouComponent />
          </motion.div>
        )}
      </AnimatePresence>

      {viewState === "modal" && (
        <ModalComponent onConfirm={() => setViewState("thank_you")} />
      )}
    </motion.section>
  );
};

export default HomePage;
