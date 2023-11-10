"use client"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default function Template({ children }: { children: React.ReactNode }) {

  
  const path = usePathname()
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    exit: {opacity: 0, x: 0, y: 100},
    enter: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit={{opacity: 0}}
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  )
}