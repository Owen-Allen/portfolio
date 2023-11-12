'use client'

import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

import Image from 'next/image'
import Link from 'next/link'

import DottedButton from '@/components/dottedButton'
import { useEffect, useRef, useState } from 'react'



export default function Header() {



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
        <div className="w-full mx-2 h-screen flex flex-col justify-center items-center">
            <div className="-mt-12 w-full lg:w-2/3"> {/* -mt-12 just to bring it up a little bit*/}
                {/* left side is "Hi ... (about)", right side is Image */}
                <div className="min-h-[500px] ">
                    <div className="flex flex-row justify-center w-full">
                        <div className="space-y-8 h-96 w-full flex flex-col justify-center">
                            <div className="">
                                <div className="flex flex-row">
                                    <h1 className="lg:text-8xl text-6xl font-bold block mt-auto lg:mt-32">
                                        Hi
                                    </h1>
                                    <Image // MOBILE IMAGE
                                        priority
                                        className="ml-auto mr-4 lg:hidden rounded-2xl mt-24"
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
                            <div className="flex flex-col lg:flex-row lg:space-x-4 items-center space-y-1 lg:justify-start lg:items-start"> {/* lg:justify-start lg:items-start */}
                                <DottedButton className="w-64" />

                                <button className="hover:font-bold  text-black transition-all duration-150 flex flex-row items-center font-semi" onClick={(e) => handleClick(e)}>
                                <span>Learn more</span>
                                   
                                    <div className="flex flex-col items-center -space-y-6 text-lg">
                                        <svg height="2em" width="2em" stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9"></polyline></svg>
                                        <svg height="2em" width="2em" stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9"></polyline></svg>                                
                                    </div>

                                </button>
                            </div>
                        </div>
                        <div className="sm:block">
                            <Image
                                priority
                                className="rounded-2xl hidden lg:block"
                                src='/me.PNG'
                                width={650}
                                height={650}
                                alt="Drawing of me!"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}