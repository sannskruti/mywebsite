"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotatingTextProps {
  items: string[];
  interval?: number;
}

export default function RotatingText({
  items,
  interval = 1950,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer: ReturnType<typeof setInterval> = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval]);

  return (
    <div
      className="
    relative inline-flex 
    w-[150px] sm:w-[170px] md:w-[190px] 
    h-8 sm:h-9 
    items-center justify-center px-3
    rounded-lg border border-slate-300/60 shadow-sm
    bg-white/60 backdrop-blur-sm
    dark:bg-white/5 dark:border-white/10
  "
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ rotateX: 90, opacity: 0, y: -4 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: -90, opacity: 0, y: 4 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="
            absolute inline-block whitespace-nowrap
            text-sm sm:text-base font-semibold
            text-slate-900 dark:text-slate-50
          "
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
