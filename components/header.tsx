'use client'

import { usePathname } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'

import { GeistSans, GeistMono } from 'geist/font'



<Image
    className="rounded-full"
    src='/me.PNG'
    width={500}
    height={500}
    alt="Drawing of me!"
/>

export default function Header() {
    const path = usePathname()
    return (
        <div className="pt-24 p-4 sm:px-24 mb-4 ">

            {/* left side is "Hi ... (about)", right side is Image */}
            <div className="flex flex-row justify-center">

                <div className="space-y-8 h-96 w-full flex flex-col justify-center">
                    <div className="">
                        <div className="flex flex-row">
                            <h1 className=" text-7xl font-bold block mt-auto md:mt-0">Hi!</h1>
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
                    <p className='w-96 '>The easiest way to vertically center something is to do what we did before, and use flexbox. This time, though, we&apos;ll remove justify-center. The item will then be centered only along the vertical axis.</p>
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

            <div id="menu" className="flex flex-row justify-evenly text-2xl pt-16">
                {/* <Link className={path == '/about' ? "underline" : ""} id="about" href='/about'>about</Link> */}
                <Link className={path == '/experience' || path == '/' ? "underline" : ""} id="experience" href='/experience'>experience</Link>
                <Link className={path == '/projects' ? "underline" : ""} id="projects" href='/projects'>projects</Link>
                <Link className={path == '/contact' ? "underline" : ""} id="contact" href='/contact'>contact</Link>
            </div>
        </div>
    )
}

