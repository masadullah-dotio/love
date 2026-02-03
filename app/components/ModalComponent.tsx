"use client";

import { type FC } from "react";
import { motion } from "motion/react";

export interface ModalComponentProps {
  onConfirm: () => void;
}

const ModalComponent: FC<ModalComponentProps> = ({ onConfirm }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="relative bg-white/30 dark:bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl max-w-lg w-full text-center flex flex-col gap-8"
      >
        <p className="text-2xl md:text-3xl font-serif font-bold text-pink-600 dark:text-pink-400 leading-relaxed text-balance drop-shadow-sm">
          You are now bounded to Arthur for your whole life like this.
        </p>

        <div className="flex justify-end w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onConfirm}
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold shadow-lg transition-colors"
          >
            Ok
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalComponent;
