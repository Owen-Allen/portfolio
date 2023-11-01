'use client'
 
import { usePathname } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'

import { GeistSans, GeistMono } from 'geist/font'

export default function Header() {
    const path = usePathname()
    return (
        <div className="p-4 sm:p-x-24 mb-4">
            <div className="flex flex-row justify-start">
                <div id="name" className="space-y-8 h-96 w-full flex flex-col justify-center">
                    <div className="mb-4">
                        <h1 className="text-7xl font-bold block">Hi!</h1>
                        <h1 className="text-7xl font-bold block">I&apos;m Owen</h1>
                    </div>
                    <p className='w-96'>The easiest way to vertically center something is to do what we did before, and use flexbox. This time, though, we&apos;ll remove justify-center. The item will then be centered only along the vertical axis.</p>
                </div>
                <div className="rounded-lg">
                    <Image
                        className="rounded-full"
                        src='/me.PNG'
                        width={500}
                        height={500}
                        alt="Drawing of me!"
                    />
                </div>
            </div>

            <div id="menu" className="w-full flex flex-row justify-evenly text-2xl pt-16">
                {/* <Link className={path == '/about' ? "underline" : ""} id="about" href='/about'>about</Link> */}
                <Link className={path == '/experience' || path == '/' ? "underline" : ""} id="experience" href='/experience'>experience</Link>
                <Link className={path == '/projects' ? "underline" : ""} id="projects" href='/projects'>projects</Link>
                <Link className={path == '/contact' ? "underline" : ""} id="contact" href='/contact'>contact</Link>
            </div>
        </div>
    )
}
