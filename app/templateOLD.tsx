"use client"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"


const links = [
  { href: '/about', label: "about" },
  // { href: '/experience', label: "experience" },
  { href: '/projects', label: "projects" },
  { href: '/contact', label: "contact" },
]

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