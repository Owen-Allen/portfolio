"use client"
import { motion } from "framer-motion"

import Image from 'next/image'
import DottedButton from '@/components/dottedButton'

export default function Header() {

    const handleClick = (event: any) => {
        // event.preventDefault();
        const target = document.getElementById('#top')
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const container2 = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.9,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className="w-full mx-2 mt-8 p-8 h-screen flex flex-col justify-center items-center">
            <div className="-mt-24 w-full lg:w-3/4 2xl:w-2/3"> {/* -mt-12 just to bring it up a little bit*/}
                {/* left side is "Hi ... (about)", right side is Image */}
                <div className="min-h-[500px] ">
                    <div className="flex flex-row justify-center w-full">
                        <div className="space-y-8 h-96 w-full flex flex-col justify-center">
                            <div className="">
                                <div className="flex flex-row">
                                    <motion.ul
                                        className="flex flex-row mt-auto lg:mt-32"
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {['H', 'i', '!'].map((index) => (
                                            <motion.li key={index} className="item" variants={item} >
                                                <h1 className="lg:text-8xl text-6xl font-bold block">
                                                    {index}
                                                </h1>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                    <motion.div
                                initial={{ y:-360 }}
                                animate={{ rotate: 3, scale: 1, x:9, y:0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 25,
                                    delay: 1.8
                                }}
                            >
                                    <Image // MOBILE IMAGE
                                        priority
                                        className="shadow-xl mr-auto sm:mr-4 ml-4 mb-2 lg:hidden rounded-2xl mt-48" // mr-4 and mb-2 aligns it nicely with the "Hi! I'm Owen" text
                                        src='/me.PNG'
                                        width={200}
                                        height={200}
                                        alt="Drawing of me!"
                                    />
                                    </motion.div>
                                </div>
                                <motion.ul
                                    className="sm:w-[432px] lg:text-8xl text-6xl break-keep font-bold whitespace-nowrap flex flex-row"
                                    variants={container2}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {["I'm", ' ', 'Owen'].map((index) => (
                                        <motion.li key={index} className="item" variants={item} >
                                            <h1 className="lg:text-8xl text-6xl font-bold block">
                                                {index}
                                            </h1>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                            <p className='2xl:w-2/3 lg:w-[470px] sm:w-full pb-4 sm:text-lg'>
                                I&apos;m a <b>Software Developer</b>, experienced in Web Development, Python Scripting, and Cloud Technologies. I&apos;m interested in building you a solution and providing the infrastructure to host and maintain it.  {/*or and building the infrastruction to support it*/}
                            </p>
                            <div className="flex flex-col lg:flex-row lg:space-x-4 items-center space-y-1 lg:justify-start lg:items-start"> {/* lg:justify-start lg:items-start */}
                                <DottedButton className="" />

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
                            <motion.div
                                // initial={{ rotate: -3, scale: 1 }}
                                animate={{ rotate: 3, scale: 1, }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 1.8
                                }}
                            >
                                <Image
                                    priority
                                    className="rounded-2xl hidden lg:block shadow-xl"
                                    src='/me.PNG'
                                    width={650}
                                    height={650}
                                    alt="Drawing of me!"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}