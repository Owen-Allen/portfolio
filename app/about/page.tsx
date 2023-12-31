import React from 'react'


import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import Image from "next/image"
import Link from 'next/link'
import Icon from '@/components/icon'
import Nav from '@/components/nav'


export default function About() {
    return (
        <> 
        <div className="w-full flex flex-col justify-center items-center space-y-8 px-2">
            <div className="lg:w-2/3 shadow-lg">
                <div className="flex p-4 md:flex-row flex-col  text-xl rounded-lg bg-white">
                    <div className="p-4 w-full ">{/* Section 1 */}
                        <p className="flex flex-col space-y-2 h-full justify-between sm:text-xl" >
                            <span className="text-base sm:text-xl block font-semibold w-full">A bit about me</span>
                            <span className="text-base sm:text-xl ">Recently, I completed my Honours in Computer Science with a Minor in Philosophy from Carleton University.</span>
                            <span className="text-base sm:text-xl ">Post-graduation, I&apos;ve been honing my full stack skills through creating web applications and gaining proficiency in web hosting and microservice management on AWS.</span>
                        </p>
                    </div>
                    <div className="md:p-4 px-4 w-full "> {/* Section 2 */}
                        <p className="h-full flex sm:text-xl">
                        <span className="text-base sm:text-xl md:m-auto">In addition to my studies, I gained practical experience through two co-op placements, one at the Bank of Montreal and the other at Ericsson Canada. I also contributed as a teaching assistant for the Introduction to Computer Science class.</span>
                        </p>
                    </div>
                </div>
            </div>


            <div className="py-12 sm:px-24 flex flex-col sm:flex-row items-center justify-center w-full lg:w-3/4"> {/*lg:w-3/4 looks good too*/}
                <p className="text-3xl font-bold sm:pb-0 pb-4 sm:pr-24">Skills</p>
                <div className="flex flex-row flex-wrap justify-center ">
                    <div className="w-28 py-2"><Icon href="https://www.typescriptlang.org/" className="devicon-typescript-plain colored text-5xl" > <p className="pt-1 text-xl">TypeScript</p></Icon></div>
                    <div className="w-28 py-2"><Icon href="https://www.javascript.com/" className="devicon-javascript-plain colored text-5xl bg-slate-800" > <p className="pt-1 text-xl">JavaScript</p></Icon></div>
                    <div className="w-28 py-2"><Link href="https://www.python.org/" className="flex flex-col justify-center items-center">                <svg height="48" width="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" /></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" /></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" /><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" /><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" /><stop offset="1" stopColor="#7F7F7F" stopOpacity="0" /></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z" /></svg>                <p className='pt-1 text-xl font-semi'>Python</p></Link></div>
                    <div className="w-28 py-2"><Icon href="https://www.react.dev/" className="devicon-react-plain colored text-5xl" > <p className="pt-1 text-xl">React</p></Icon></div>
                    <div className="w-28 py-2"><Icon href="https://nextjs.org/" className="devicon-nextjs-original colored text-5xl" > <p className="pt-1 text-xl">Next.JS</p></Icon></div>
                    <div className="w-28 py-2"><Icon href="https://tailwindcss.com/" className="devicon-tailwindcss-plain colored text-5xl" > <p className="pt-1 text-xl">Tailwind</p></Icon></div>
                    <div className="w-28 py-2"><Icon href="https://git-scm.com/" className="devicon-git-plain colored text-5xl" > <p className="pt-1 text-xl">Git</p></Icon></div>
                    <div className="w-28 py-2"><Icon href="https://nodejs.org/en" className="devicon-nodejs-plain colored text-5xl" > <p className="pt-1 text-xl">Node.JS</p></Icon></div>
                    <div className="w-28 py-2"><Link href="https://aws.amazon.com/" className="flex flex-col justify-center items-center">
                        <Image priority className="pt-4" src="/aws.png" width={48} height={48} alt="aws logo" />
                        <p className='pt-2 text-xl font-semi'>AWS</p></Link></div>
                    {/* <div className="w-28 py-2"><Link href="https://www.python.org/" className="flex flex-col justify-center items-center"> */}
                    {/* <Image className="pt-4" src="/aws.png" width={48} height={48} alt="aws logo" /> */}
                    {/* <p className='pt-2 text-xl font-semi'>AWS</p></Link></div> */}
                    {/* <div className="w-28 py-2"><Icon href="https://git-scm.com/" className="devicon-linux-plain colored text-5xl" > <p className="pt-1 text-xl">Linux</p></Icon></div> */}
                </div>
            </div>

            <Card boxShadow='lg' className="bg-white rounded-lg p-2 m-2 shadow-lg w-full lg:w-2/3">
                <CardHeader className="flex flex-col sm:flex-row w-full justify-around">
                    <div className="flex flex-row items-center space-x-4">
                        <Image alt="bmo logo" className="w-10 h-10 rounded-full" src='/bmo.png' width={40} height={40} />
                        <a>
                            <h2 className="sm:text-xl font-semibold">Bank of Montreal</h2>
                            <h3 className="sm:text-xl">Software Developer</h3>
                        </a>
                    </div>
                    <a className="pl-14 sm:text-base text-xs sm:ml-auto">May 2022 - August 2022</a>
                </CardHeader>
                <CardBody className="sm:text-xl sm:mx-12 mb-10 -mx-2">
                    As part of the Digital Core team at BMO, I contributed to the development of a Managed File Transfer application (MFT), where I focused on the front-end implementation using TypeScript, NextJS, and Tailwind CSS.
                    <br /><br />


                    At BMO, I got to learn from a lot of great developers and get a better understanding of how software is developed within a large-scale organization. Through overcoming challenges like state management, API development, and understanding client-server architecture, I gained valuable insights into the practical tools of web development.

                </CardBody>
            </Card>


            <Card boxShadow='lg' className="bg-white rounded-lg p-2 m-2 shadow-lg w-full lg:w-2/3">
                <CardHeader className="flex flex-col sm:flex-row w-full justify-around">
                    <div className="flex flex-row items-center space-x-4">
                        <Image alt="ericsson logo" className="w-10 h-10" src='/ericsson.png' width={40} height={40} />
                        <a>
                            <h2 className="sm:text-xl font-semibold">Ericsson Canada</h2>
                            <h3 className="sm:text-xl">Automation Scripting Co-op</h3>
                        </a>
                    </div>
                    <a className="pl-14 sm:text-base text-xs sm:ml-auto">September 2020 - August 2021</a>
                </CardHeader>
                <CardBody className="sm:text-xl sm:mx-12 mb-10 -mx-2">
                    During my time at Ericsson, I developed a variety of custom automation solutions to increase the efficiency of internal workflows. I collaborated with a team using the Agile approach to software development to delegate tasks and help each other implement solutions.
                    <br /><br />
                    Most of our solutions were very creative, since we were often addressing very niche issues within existing workflows and finding the best way to integrate our scripts with existing technology.
                    <br /><br />
                    In many of the projects I undertook, the focus was on achieving full automation, which led me to delve into Azure Functions.
                    This platform provided me with the capability to manage operations in the cloud while working in Python.
                    <br /><br />
                </CardBody>
            </Card>

            <Card boxShadow='lg' className="bg-white rounded-lg p-2 m-2 shadow-lg w-full lg:w-2/3">
                <CardHeader className="flex flex-col sm:flex-row w-full justify-around">
                    <div className="flex flex-row items-center space-x-4">
                        <Image alt="Carleton Logo" className="w-10 h-10" src='/carleton.ico' width={40} height={40} />
                        <a>
                            <h2 className="sm:text-xl font-semibold">Carleton University</h2>
                            <h3 className="sm:text-xl">Teaching Assistant</h3>
                        </a>
                    </div>
                    <a className="pl-14 sm:text-base text-xs sm:ml-auto">January 2020 - May 2020</a>
                </CardHeader>
                <CardBody className="sm:text-xl sm:mx-12 mb-10 -mx-2">
                    As a Teaching Assistant for the Introduction to Computer Science class, I guided students through fundamental software development practices in Python. I hosted office hours for project assistance and assisted with tutorial sessions when students needed help.
                    <br />
                    <br />
                    I gained a lot of experience in how to communicate programming problems with students, how to find common bugs, and how to decompose problems for easier understanding and troubleshooting.                </CardBody>
            </Card>

            <Card boxShadow='lg' className="bg-white  rounded-lg py-8 p-2 m-2 shadow-lg w-full lg:w-2/3">
                <CardBody className="sm:text-xl sm:mx-12">
                    In my spare time, I like to write and play music with my friends :)

                </CardBody>
            </Card>
            <br />
            <br />
            <br />
        </div >
        </>
    )
}
