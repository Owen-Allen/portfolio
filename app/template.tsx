"use client"

import React from 'react'
import Nav from '@/components/nav'
import Header from '@/components/header'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'


const routesWithNavAndHeader = ['/', '/projects', '/about', '/contact']

export default function Template({ children }: { children: React.ReactNode }) {

    const path = usePathname()
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        exit: {opacity: 0, x: 0, y: 100},
        enter: { opacity: 1, x: 0, y: 0 },
      }
    return (
        <div>
            {routesWithNavAndHeader.includes(path) && <><Header /> <Nav /> </>}
                <motion.main
                variants={variants}
                initial="hidden"
                animate="enter"
                exit={{opacity: 0}}
                transition={{ type: "linear" }}
                >
                {children}
            </motion.main>
        </div>
    )
}
