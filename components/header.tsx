'use client'

import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

import Image from 'next/image'
import Link from 'next/link'


const links = [
    { href: '/experience', label: "experience" },
    { href: '/projects', label: "projects" },
    { href: '/contact', label: "contact" },
]

export default function Header() {
    const path = usePathname()
    return (
        <div className="pt-24 p-4 sm:px-24 mb-4 ">

            {/* left side is "Hi ... (about)", right side is Image */}
            <div className="flex flex-row justify-center">

                <div className="space-y-8 h-96 w-full flex flex-col justify-center">
                    <div className="">
                        <div className="flex flex-row">
                            <h1 className="text-7xl font-bold block mt-auto md:mt-0">Hi!</h1>
                            <Image // MOBILE IMAGE
                                className="ml-auto mr-12 rounded-full md:hidden"
                                src='/me.PNG'
                                width={160}
                                height={160}
                                alt="Drawing of me!"
                            />
                        </div>
                        <h1 className=" text-7xl font-bold block">I&apos;m Owen</h1>
                    </div>
                    <p className='max-w-xs sm:max-w-6xl sm:w-3/4'>
                        I&apos;m a <b>Software Developer</b>, experienced in Web Development and Cloud computing. I&apos;m interested in building you a solution, and providing the infrastructure to host and maintain it.
                    </p>
                </div>
                <div className="sm:block">
                    <Image
                        className="rounded-full hidden md:block"
                        src='/me.PNG'
                        width={600}
                        height={600}
                        alt="Drawing of me!"
                    />
                </div>
            </div>

            <ul className="flex flex-row justify-evenly text-2xl pt-16">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link className="relative" href={link.href}>
                            {link.href === path && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute top-full h-[1.5px] w-full bg-black"
                                />
                            )}
                            {/* This logic is only for default page at "/" */}
                            { path == "/" && link.href == "/experience" && (
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
        </div>
    )
}


{/* <Link className={path == '/about' ? "underline" : ""} id="about" href='/about'>about</Link> */ }
{/* <Link id="experience" href='/experience'>experience</Link>
                <Link id="projects" href='/projects'>projects</Link>
                <Link id="contact" href='/contact'>contact</Link> */}