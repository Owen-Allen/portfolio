"use client"
import React from 'react'

import { usePathname } from 'next/navigation';
import { motion } from "framer-motion"
import Link from 'next/link';

const links = [
    { href: '/projects', label: "projects" },
    { href: '/about', label: "about" },
    // { href: '/experience', label: "experience" },
    { href: '/contact', label: "contact" },
]

export default function Nav() {

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
        <nav>
            <ul id="#top" className="py-8 space-x-6 flex flex-row items-center justify-evenly text-2xl">
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
                            {path == "/" && link.href == "/projects" && (
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
        </nav>
    )
}
