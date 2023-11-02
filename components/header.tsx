'use client'

import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

import Image from 'next/image'
import Link from 'next/link'

import DottedButton from '@/components/dottedButton'

const links = [
    { href: '/experience', label: "experience" },
    { href: '/projects', label: "projects" },
    { href: '/contact', label: "contact" },
]

const uhh = () => {
    console.log('uhh')
}
export default function Header() {
    const path = usePathname()
    return (
        <div className="pt-24 p-8 sm:px-32 mb-4 ">

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
                        <h1 className="sm:w-[432px] lg:text-8xl text-6xl break-keep font-bold">I&apos;m Owen</h1>
                    </div>
                    <p className='lg:w-2/3 pb-4 sm:text-lg '>
                        I&apos;m a <b>Software Developer</b>, experienced in Web Development and Cloud computing. I&apos;m interested in building you a solution, and providing the infrastructure to host and maintain it.
                    </p>
                    <div className="w-full flex flex-col items-center lg:items-start">
                        <DottedButton className="w-64" onClick={uhh}/>
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
            

            <ul className="-mb-8 flex flex-row justify-evenly space-x-5 text-2xl pt-48">
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