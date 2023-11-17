
import BackButton from '@/components/backButton'
import Icon from '@/components/icon'
import { Card, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Bookstore() {
    return (
        <div className="w-full flex flex-col justify-center items-center">

            {/* desktop, row, images on left, description on right */}
            {/* mobile, col, description above, images below */}

            <div className="flex w-full sm:w-10/12 flex-row items-center justify-start space-x-8 m-10">
                <BackButton />
                <Link className="text-3xl font-bold" href="/bookstore-web-app"> Bookstore Web App </Link>
                <Link className="text-2xl mt-auto" href="https://github.com/Owen-Allen/bookstore-webapp"> Github </Link>
                <Link className="text-2xl mt-auto" href="https://bookstore-webapp.vercel.app/"> Website </Link>

            </div>
            <div className="relative flex flex-col-reverse sm:flex-row w-full sm:w-10/12">


                {/* images */}
                {/* <div className="flex flex-col w-full sm:w-1/3 h-screen bg-red-100"> */}
                <div className="flex flex-col space-y-2 px-8">

                    <Link href="/bookstore-web-app/home.jpg"><Image className="shadow-lg rounded-md" src="/bookstore-web-app/home.jpg" width={400} height={240} alt="Image of Bookstore home page" /></Link>
                    <Link href="/bookstore-web-app/browse.jpg"><Image className="shadow-lg rounded-md" src="/bookstore-web-app/browse.jpg" width={400} height={240} alt="Image of Bookstore browse page" /></Link>
                    <Link href="/bookstore-web-app/book.jpg"><Image className="shadow-lg rounded-md" src="/bookstore-web-app/book.jpg" width={400} height={240} alt="Image of Bookstore book page" /></Link>
                    <Link href="/bookstore-web-app/checkout.jpg"><Image className="shadow-lg rounded-md" src="/bookstore-web-app/checkout.jpg" width={400} height={240} alt="Image of Bookstore checkout page" /></Link>

                </div>
                {/* </div> */}

                <section className="w-full flex flex-col p-8 sm:w-2/3 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl">
                        Project Description
                    </h2>
                    <p className="py-4">
                        An online bookstore application with a featuring a Hero Page, a Browse page, individual book pages, and an efficient checkout system.                    </p>
                    <h2 className="text-2xl">
                        Key Features
                    </h2>

                    <ul className="p-4 list-disc">
                        <li><span className="font-semibold">Persistent User State:</span> React <a className="font-semibold" href="https://react.dev/reference/react/useContext">useContext</a> hook allows for persistent state on the client side between page changes and page refreshes </li>
                        <li><span className="font-semibold">Server-side and Client-side JavaScript:</span> Used <a className="font-semibold" href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">Server-side Rendering</a> for efficient page loading, supplemented by client side React for responsive user interaction</li>
                        <li><span className="font-semibold">Smart Checkout:</span> The checkout process takes tax and shipping into account when calculating the user&apos;s total</li>
                        <li><span className="font-semibold">Web Hosting:</span> Using Vercel and Supabase for free application and database hosting</li>
                    </ul>


                    <h3 className="text-2xl"> Design Decisions </h3>
                    <ul className="p-4 list-disc">
                        <li> Utilized Prisma ORM for easy integration between Next.JS and PostgreSQL</li>
                        <li> Implemented Next.JS dynamic routes to create a repeatable template for individual book pages </li>
                        <li> Simple layout to align with what users expect in an online store </li>

                        {/* <li> Incorporated rounded borders and offset for a bubbly depth effect, complementing the overall cute aesthetic</li>
                        <li> Maintained a consistent theme and color scheme for a cohesive and branded feel</li> */}
                    </ul>
                    <div className="mt-auto justify-center flex flex-row space-x-4 "> {/* flex flex-row w-full justify-center  items-center */}
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
                    </div>
                </section>


            </div>



        </div>

    )
}
