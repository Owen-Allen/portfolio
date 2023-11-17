
import BackButton from '@/components/backButton'
import Icon from '@/components/icon'
import { Card, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Clucker() {
    return (
        <div className="w-full flex flex-col justify-center items-center">

            {/* desktop, row, images on left, description on right */}
            {/* mobile, col, description above, images below */}

            <div className="flex w-full sm:w-10/12 flex-row items-center justify-start space-x-8 m-10">
                <BackButton />
                <Link className=" text-3xl font-bold" href="/clucker"> Clucker</Link>
                <Link className=" text-2xl mt-auto" href="https://github.com/Owen-Allen/clucker"> Github </Link>
                <Link className=" text-2xl mt-auto" href="https://clucker.vercel.app/"          > Website </Link>

            </div>
            <div className="relative flex flex-col-reverse sm:flex-row w-full sm:w-10/12">


                {/* images */}
                {/* <div className="flex flex-col w-full sm:w-1/3 h-screen bg-red-100"> */}
                <SimpleGrid className="px-4" columns={{ sm: 1, md: 2 }} spacing={2}>

                    <Link href="/clucker/login.jpg"><Image className="shadow-lg rounded-md" src="/clucker/login.jpg" width={200} height={240} alt="Clucker login" /></Link>
                    <Link href="/clucker/feed.jpg"><Image className="shadow-lg rounded-md" src="/clucker/feed.jpg" width={200} height={240} alt="Clucker feed" /></Link>
                    <Link href="/clucker/cluck.jpg"><Image className="shadow-lg rounded-md" src="/clucker/cluck.jpg" width={200} height={240} alt="Clucker cluck" /></Link>
                    <Link href="/clucker/profile.jpg"><Image className="shadow-lg rounded-md" src="/clucker/profile.jpg" width={200} height={240} alt="Clucker profile" /></Link>

                </SimpleGrid>
                {/* </div> */}

                <section className="w-full flex flex-col p-8 sm:w-2/3 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl">
                        Project Descrition
                    </h2>
                    <p className="py-4">
                    Clucker is a text-based social media app where people can share short messages, called clucks, with their friends. 
                    Users can create a custom profile, follow their friends and like other clucks.
                    </p>
                    <h2 className="text-2xl">
                        Key Features
                    </h2>
                    <ul className="p-4 list-disc">
                        <li><span className="font-semibold">Responsive Design:</span> The front-end layout adapts to various screen dimensions, prioritizing mobile devices</li>
                        <li><span className="font-semibold">Security:</span> Implemented NextAuth.js for secure authentication, using Google OAuth 2.0 and JSON Web Tokens (JWTs)</li>
                        <li><span className="font-semibold">Efficient </span>Forms: Used zod for quick and easy form validation, while not being too intrusive to the user if they made a mistake </li>
                        <li><span className="font-semibold">Web Hosting:</span> Hosting with Vercel & AWS: The application&apos;s frontend is hosted on Vercel, while AWS Elastic Beanstalk manages the backend, allowing for 100% uptime</li>
                    </ul>


                    <h3 className="text-2xl"> Design Decisions </h3>
                    <ul className="p-4 list-disc">
                        <li> Created a cute and fun aesthetic in response to the increasing &quot;maturity&quot; of platforms like Twitter/X</li>
                        <li> Employed font-mono for a nostalgic and digital touch, setting it apart from standard fonts like Inter and Arial</li>
                        <li> Engineered super-responsive profiles using React, allowing immediate updates with a single click on the follow/unfollow button, unlike apps like Instagram that require a full page refresh for an updated follower/following count</li>
                        <li> Incorporated rounded borders and offset for a bubbly depth effect, complementing the overall cute aesthetic</li>
                        <li> Maintained a consistent theme and color scheme for a cohesive and branded feel</li>
                    </ul>
                    <div className="mt-auto justify-center flex flex-row space-x-4 "> {/* flex flex-row w-full justify-center  items-center */}
                        <Icon href="https://www.typescriptlang.org/" className="devicon-typescript-plain colored text-4xl" > <p className="pt-1 text-xs font-semi">TypeScript</p></Icon>
                        <Icon href="https://nextjs.org/" className="devicon-nextjs-original colored text-4xl" > <p className="pt-1 text-xs font-semi">Next.JS</p></Icon>
                        <Icon href="https://www.djangoproject.com/" className="devicon-django-plain colored text-4xl" > <p className="pt-1 text-xs font-semi">Django</p></Icon>
                        <Icon href="https://tailwindcss.com/" className="devicon-tailwindcss-plain colored text-4xl" > <p className="pt-1 text-xs font-semi">Tailwind</p></Icon>
                        <Link href="https://aws.amazon.com/elasticbeanstalk/" className="mt-2 flex flex-col justify-center items-center">
                            <svg height="36" width="36" viewBox="0 0 63.75 85" fill="#fff" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
                                <use href="#A" x="1.875" y="2.5" />
                                <symbol id="A" overflow="visible">
                                    <g stroke="none">
                                        <path d="M19.711 4.956V40h-4.247v33.003L30 80l8.746-40L30 0 19.711 4.956z" fill="#9d5025" />
                                        <path d="M30 0v40 40l10.289-4.956V40h4.247V6.997L30 0z" fill="#f58536" />
                                        <path d="M60 29.777L41.61 31.449l-6.042-.729 19.166-18.805L60 29.777z" fill="#6b3a19" />
                                        <path d="M54.734 11.915L60 14.451v15.326l-5.266-1.011V11.915z" fill="#f58536" />
                                        <path d="M35.568 30.72l19.166-1.953V11.915L35.568 16.91V30.72z" fill="#9d5025" />
                                        <path d="M0 50.224l18.389-1.672 6.042.729L5.266 68.086 0 50.224z" fill="#fbbf93" />
                                        <path d="M5.266 68.086L0 65.55V50.224l5.266 1.069v16.793z" fill="#9d5025" />
                                        <path d="M24.432 49.281L5.266 51.293v16.793l19.166-4.995V49.281z" fill="#f58536" />
                                    </g>
                                </symbol>
                            </svg>
                            <p className=' text-xs font-semi'>Elastic</p>
                            <p className='-mt-1 text-xs font-semi'>Beanstalk</p>
                        </Link>
                    </div>
                </section>


            </div>



        </div>

    )
}
