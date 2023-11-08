'use client'

import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

import Image from 'next/image'
import Link from 'next/link'

import DottedButton from '@/components/dottedButton'

const links = [
    { href: '/about', label: "about" },
    // { href: '/experience', label: "experience" },
    { href: '/projects', label: "projects" },
    { href: '/contact', label: "contact" },
]

export default function Header() {
    const path = usePathname()


    // CHECK IF WE ARE GETTING A TARGET
    const handleClick = (event: any) => {
        // event.preventDefault();
        const target = document.getElementById('#top')
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="pt-24 p-8 sm:px-32 xl:mx-40 mb-4 ">

            {/* left side is "Hi ... (about)", right side is Image */}
            <div className="min-h-[444px]">
                <div className="flex flex-row justify-center w-full">
                    <div className="space-y-8 h-96 w-full flex flex-col justify-center">
                        <div className="">
                            <div className="flex flex-row">
                                <h1 className="lg:text-8xl text-6xl font-bold block mt-auto lg:mt-32">Hi!</h1>
                                <Image // MOBILE IMAGE
                                    className="ml-auto mr-4 lg:hidden rounded-2xl"
                                    src='/me.PNG'
                                    width={200}
                                    height={200}
                                    alt="Drawing of me!"
                                />
                            </div>
                            <h1 className="sm:w-[432px] lg:text-8xl text-6xl break-keep font-bold whitespace-nowrap">I&apos;m Owen</h1>
                        </div>
                        <p className='2xl:w-2/3 lg:w-[470px] sm:w-full pb-4 sm:text-lg'>
                            I&apos;m a <b>Software Developer</b>, experienced in Web Development, Python Scripting, and Cloud Technologies. I&apos;m interested in building you a solution and providing the infrastructure to host and maintain it.  {/*or and building the infrastruction to support it*/}
                        </p>
                        <div className="w-full flex justify-center items-center lg:justify-start lg:items-start">
                            <DottedButton className="w-64" />

                            <button className="flex flex-col items-center -space-y-6 px-2 text-lg"  onClick={(e) => handleClick(e)}>
                                <svg height="2em" width="2em" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="6 9 12 15 18 9"></polyline></svg>
                                <svg height="2em" width="2em" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="6 9 12 15 18 9"></polyline></svg>
                            </button>
                        </div>
                    </div>
                    <div className="sm:block">
                        <Image
                            className="rounded-2xl hidden lg:block"
                            src='/me.PNG'
                            width={650}
                            height={650}
                            alt="Drawing of me!"
                        />
                    </div>
                </div>
            </div>


            <ul id="#top" className="-mb-8 pt-8 -mx-6 space-x-6 sm:mx-0 flex flex-row justify-evenly text-2xl sm:mt-48 mt-40">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link className="relative"
                            onClick={(e) => { handleClick(e) }}
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
        </div>
    )
}