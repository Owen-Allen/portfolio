import React from 'react'

import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'
import { Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleGrid } from '@chakra-ui/react'

import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'

import Icon from '@/components/icon'
import Nav from '@/components/nav'

export default function Projects() {
    return (
        <> 
        <Nav />
        <div className="flex flex-col justify-center items-center space-y-8 w-full px-2">

            <SimpleGrid className="xl:w-2/3 lg:w-3/4 w-full " columns={{ sm: 1, md: 2 }} spacing={8}>

                <Card
                    className="flex flex-col items-center justify-center"
                    boxShadow='lg'
                    overflow='overflowWrap'
                >
                    <CardBody className="flex flex-col">
                        <Link href='/clucker' className='w-full'>
                            <div className="shadow-lg w-full flex justify-center rounded-lg bg-sky-400">
                                <Image priority width={120} height={120} src='/clucker2.png' alt='Clucker Logo' className='p-4 mb-auto block' />
                            </div>
                        </Link>
                        <div className="mt-6 flex flex-row items-center">
                            <Link className="text-xl font-bold" href="/clucker"> Clucker </Link>
                            <Link className="mt-1 ml-4 hover:underline" href="https://github.com/Owen-Allen/clucker"> Github </Link>
                            <Link className="mt-1 ml-4 hover:underline" href="https://clucker.vercel.app/"          > Website </Link>
                        </div>
                        <Text className="mt-4 break-words">
                            Clucker is a text-based social media app where people can share short messages, called clucks, with their friends.
                        </Text>
                    </CardBody>
                    <CardFooter className="space-x-4 "> {/* flex flex-row w-full justify-center  items-center */}
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
                    </CardFooter>
                </Card>

                {/* ON HOLD FOR NOW */}
                {/* <Card className="flex flex-col items-center justify-center" boxShadow="lg" overflow="overflowWrap">
                    <CardBody className="flex flex-col p-4">
                        <Link href="/image-stitcher" className="w-full">
                            <div className=" w-full flex justify-center rounded-lg">
                                <Image priority width={120} height={120} src="/opencv.png" alt="OpenCV Logo" className="p-4 mb-auto block" />
                            </div>
                        </Link>
                        <div className="mt-6 flex flex-row items-center">
                            <Link className="text-xl font-bold" href="/image-stitcher">
                                Image Stitcher
                            </Link>
                            <Link className="mt-1 ml-4 hover:underline" href="https://github.com/Owen-Allen/image-stitcher">
                                Github
                            </Link>
                        </div>
                        <Text className="mt-4">
                            A program that uses Akaze feature matching to stitch two images of a scene together.
                        </Text>
                    </CardBody>
                    <CardFooter className="space-x-4">
                        <Link href="https://www.python.org/" className="flex flex-col justify-center items-center">
                            <svg height="36" width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" /></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" /></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" /><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" /><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" /><stop offset="1" stopColor="#7F7F7F" stopOpacity="0" /></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z" /></svg>
                            <p className='pt-1 text-xs font-semi'>Python</p>
                        </Link>
                        <Icon href="https://opencv.org/" className="devicon-opencv-plain colored text-4xl" > <p className="pt-1 text-xs font-semi">OpenCV</p></Icon>
                        <Icon href="https://flask.palletsprojects.com/en/3.0.x/" className="devicon-flask-original colored text-4xl " > <p className="pt-1 text-xs font-semi">Flask</p></Icon>
                        <Link href="https://aws.amazon.com/pm/lambda/" className="flex flex-col justify-center items-center">
                            <svg height="36" width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><linearGradient id="a" x1="0%" y1="100%" y2="0%"><stop offset="0" stopColor="#c8511b" /><stop offset="1" stopColor="#f90" /></linearGradient><g fill="none" fillRule="evenodd"><path d="M0 0h80v80H0z" fill="url(#a)" /><path d="M28.008 66H15.59l13.733-28.704 6.222 12.81zm2.212-31.447a1.005 1.005 0 0 0-.902-.564h-.003a1.001 1.001 0 0 0-.903.569L13.098 66.569A1 1 0 0 0 14.002 68h14.64c.388 0 .74-.223.906-.572l8.016-16.9a.995.995 0 0 0-.005-.863zM64.995 66H52.66L32.867 24.57a1.002 1.002 0 0 0-.905-.57H23.89l.009-10h15.82L59.42 55.429c.166.348.519.571.906.571h4.67zm1.003-12H60.96l-19.7-41.429a1.003 1.003 0 0 0-.907-.571H22.898c-.553 0-1.002.447-1.003.999l-.01 12A1 1 0 0 0 22.886 26h8.442l19.793 41.43c.167.348.517.57.904.57h13.972A1 1 0 0 0 67 67V55a1 1 0 0 0-1.002-1z" fill="#fff" /></g></svg>
                            <p className='pt-1 text-xs font-semi'>Lambda</p>
                        </Link>
                        <Link href="https://aws.amazon.com/pm/serv-s3/" className="flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 428 512"><path fill="#e25444" d="M378,99L295,257l83,158,34-19V118Z" /><path fill="#7b1d13" d="M378,99L212,118,127.5,257,212,396l166,19V99Z" /><path fill="#58150d" d="M43,99L16,111V403l27,12L212,257Z" /><path fill="#e25444" d="M42.637,98.667l169.587,47.111V372.444L42.637,415.111V98.667Z" /><path fill="#58150d" d="M212.313,170.667l-72.008-11.556,72.008-81.778,71.83,81.778Z" /><path fill="#58150d" d="M284.143,159.111l-71.919,11.733-71.919-11.733V77.333" /><path fill="#58150d" d="M212.313,342.222l-72.008,13.334,72.008,70.222,71.83-70.222Z" /><path fill="#7b1d13" d="M212,16L140,54V159l72.224-20.333Z" /><path fill="#7b1d13" d="M212.224,196.444l-71.919,7.823V309.105l71.919,8.228V196.444Z" /><path fill="#7b1d13" d="M212.224,373.333L140.305,355.3V458.363L212.224,496V373.333Z" /><path fill="#e25444" d="M284.143,355.3l-71.919,18.038V496l71.919-37.637V355.3Z" /><path fill="#e25444" d="M212.224,196.444l71.919,7.823V309.105l-71.919,8.228V196.444Z" /><path fill="#e25444" d="M212,16l72,38V159l-72-20V16Z" /></svg>
                            <p className='pt-1 text-xs font-semi'>S3</p>
                        </Link>
                    </CardFooter>
                </Card> */}

                <Card className="flex flex-col items-center justify-center" boxShadow="lg" overflow="hidden">
                    <CardBody className="flex flex-col p-4">
                        <Link href="/bookstore-web-app" className="w-full">
                            <div className="shadow-lg w-full flex justify-center rounded-lg bg-orange-300">
                                <Image priority width={120} height={120} src="/book2.png" alt="Book Icon" className="mb-auto block" />
                            </div>
                        </Link>
                        <div className="mt-6 flex flex-row items-center">
                            <Link className="text-xl font-bold" href="/bookstore-web-app">
                                Bookstore Web App
                            </Link>
                            <Link className="mt-1 ml-4 hover:underline" href="https://github.com/Owen-Allen/bookstore-webapp">
                                Github
                            </Link>
                            <Link className="mt-1 ml-4 hover:underline" href="https://bookstore-webapp.vercel.app/">
                                Website
                            </Link>
                        </div>
                        <Text className="mt-4">
                            I created a bookstore app, where users can explore books, add items to the cart, and check out.
                        </Text>
                    </CardBody>
                    <CardFooter className="space-x-4">
                        <Icon href="https://www.typescriptlang.org/" className="devicon-typescript-plain colored text-4xl">
                            <p className="pt-1 text-xs font-semi">TypeScript</p>
                        </Icon>
                        <Icon href="https://nextjs.org/" className="devicon-nextjs-original colored text-4xl">
                            <p className="pt-1 text-xs font-semi">Next.JS</p>
                        </Icon>
                        <Icon href="https://www.postgresql.org/" className="devicon-postgresql-plain colored text-4xl">
                            <p className="pt-1 text-xs font-semi">PostgreSQL</p>
                        </Icon>
                        <Icon href="https://tailwindcss.com/" className="devicon-tailwindcss-plain colored text-4xl">
                            <p className="pt-1 text-xs font-semi">Tailwind</p>
                        </Icon>
                    </CardFooter>
                </Card>




                <Card
                    className="flex flex-col items-center justify-center"
                    boxShadow='lg'
                    overflow='overflowWrap'
                >
                    <CardBody id="photo-notes" className="flex flex-col">
                        {/* TITLE */}
                        <Link href='/photo-notes' className='w-full'>
                            <div className="w-full flex justify-center rounded-lg">
                                <Image width={120} height={120} src="/crop.png" alt="Crop Icon" className="p-4" />
                            </div>
                        </Link>
                        <div className="mt-6 flex flex-row items-center">
                            {/* logo(small) Name, Github, Website */}
                            <Link href='/photo-notes' className="text-xl font-bold">photo-notes</Link>
                            <Link className="mt-1 ml-4 hover:underline" href="https://github.com/Owen-Allen/photo-notes">Github</Link>
                        </div>
                        {/* BODY */}
                        <Text className="mt-4">
                            photo-notes is a tool that makes it easier to add screenshots to your Markdown notes
                        </Text>
                        {/* FOOTER */}

                    </CardBody>
                    <CardFooter className="space-x-4">

                        <Link href="https://www.python.org/" className="flex flex-col justify-center items-center">
                            <svg height="36" width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" /></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" /></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" /><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" /><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" /><stop offset="1" stopColor="#7F7F7F" stopOpacity="0" /></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z" /></svg>
                            <p className='pt-1 text-xs font-semi'>Python</p>
                        </Link>
                        <Icon href="https://www.markdownguide.org/" className="devicon-markdown-original colored text-4xl">
                            <p className="pt-1 text-xs">Markdown</p>
                        </Icon>
                    </CardFooter>
                </Card>

                <Card
                    className="flex flex-col items-center justify-center"
                    boxShadow='lg'
                    overflow='overflowWrap'
                >
                    <CardBody id="restaurantapp" className="flex flex-col">
                        {/* TITLE */}
                        <Link href='/restaurant-web-app' className='w-full'>
                            <div className="w-full flex justify-center rounded-lg">
                                <Image width={120} height={120} src="/fork-and-knife.svg" alt="Fork and knife" className="p-4" />
                            </div>
                        </Link>
                        <div className="mt-6 flex flex-row items-center">
                            {/* logo(small) Name, Github, Website */}
                            <Link href='/restaurant-web-app' className="text-xl font-bold">Restaurant Web App</Link>
                            <Link className="mt-1 ml-4 hover:underline" href="https://github.com/Owen-Allen/restaurant-app">Github</Link>
                        </div>
                        {/* BODY */}
                        <Text className="mt-4">
                            A restaurant app where users can create an account, order food and review their previous orders.
                        </Text>
                        {/* FOOTER */}

                    </CardBody>
                    <CardFooter className="space-x-4">
                        <Icon href="https://nodejs.org/en/" className="devicon-nodejs-plain colored text-4xl">
                            <p className="pt-1 text-xs">Node.JS</p>
                        </Icon>
                        <Icon href="https://expressjs.com/" className="devicon-express-original colored text-4xl">
                            <p className="pt-1 text-xs">Express</p>
                        </Icon>
                        <Link href="https://pugjs.org/api/getting-started.html" className="flex flex-col justify-center items-center">
                            <Image alt="pug logo" src="/pug.png" width={36} height={36}></Image>
                            <p className='pt-1 text-xs font-semi'>Pug</p>
                        </Link>
                        <Icon href="https://www.markdownguide.org/" className="devicon-css3-plain colored text-4xl">
                            <p className="pt-1 text-xs">CSS</p>
                        </Icon>
                        <Icon href="https://www.markdownguide.org/" className="devicon-mongodb-plain colored text-4xl">
                            <p className="pt-1 text-xs">MongoDB</p>
                        </Icon>

                    </CardFooter>
                </Card>


            </SimpleGrid>

            <br />
            <br />
            <br />
        </div>
    </>
    )
}

