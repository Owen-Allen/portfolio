"use client"
import React from 'react'

import { motion } from "framer-motion"
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const links = [
    { href: '/about', label: "about" },
    // { href: '/experience', label: "experience" },
    { href: '/projects', label: "projects" },
    { href: '/contact', label: "contact" },
]

export default function Template({ children }: { children: React.ReactNode }) {
    const path = usePathname()

    // CHECK IF WE ARE GETTING A TARGET
    const handleClick = (event: any) => {
        // event.preventDefault();
        console.log(event)
        const target = document.getElementById('#top')
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div>
        <ul id="#top" className="py-8 space-x-6 flex flex-row justify-evenly text-2xl">

            {links.map((link) => (
                    <li key={link.href}>
                        <Link className="relative"
                            onClick={(e) => { handleClick(e) }} // hmmmmmm I dont know if I like this feature
                            href={link.href}
                        >
                            {link.href === path && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute top-full h-[1.5px] w-full bg-black"
                                />
                            )}
                            {/* This logic is only for default page at "/" */}
                            {path == "/" && link.href == "/about" && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute top-full h-[1.5px] w-full bg-black"
                                />
                            )}
                            {link.label}
                        </Link>
                    </li>
            ))}
        </ul>
                    {children}

                    </div>
    )
}
