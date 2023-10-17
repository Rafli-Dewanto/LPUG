"use client";

import { AiOutlineArrowUp } from "react-icons/ai";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScroll from "@/hooks/use-scroll";

export default function FabArrowUp() {
  const { scrolling } = useScroll(300);

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.3,
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <AnimatePresence>
      {scrolling && (
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed bottom-16 right-6"
        >
          <button onClick={() => window.scrollTo(0, 0)}>
            <motion.div
              className="
              grid h-12 w-12
              place-items-center
              rounded-2xl border
              border-white
              bg-[#ffa26c] text-sm
              "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineArrowUp className="text-2xl" />
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
