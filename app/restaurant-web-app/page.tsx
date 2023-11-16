
import BackButton from '@/components/backButton'
import Icon from '@/components/icon'
import { Card, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Restaurant() {
    return (
        <div className="w-full flex flex-col justify-center items-center">

            {/* desktop, row, images on left, description on right */}
            {/* mobile, col, description above, images below */}

            <div className="flex w-full sm:w-10/12 flex-row items-center justify-start space-x-8 m-10">
                <BackButton />
                <Link className="text-3xl font-bold" href="/restaurant-app"> Restaurant Web App </Link>
                <Link className="text-2xl mt-auto" href="https://github.com/Owen-Allen/restaurant-app"> Github </Link>
                <Link className="text-2xl mt-auto" href="https://restaurant-app-e9w4.onrender.com/"> Website </Link>

            </div>
            <div className="relative flex flex-col-reverse sm:flex-row w-full sm:w-10/12">


                {/* images */}
                {/* <div className="flex flex-col w-full sm:w-1/3 h-screen bg-red-100"> */}
                <div className="flex flex-col space-y-2 px-8">

                    <Link href="/restaurant-web-app/order_page.jpg"><Image className="shadow-lg rounded-md" src="/restaurant-web-app/order_page.jpg" width={400} height={240} alt="Image of order" /></Link>
                    <Link href="/restaurant-web-app/user.jpg"><Image className="shadow-lg rounded-md" src="/restaurant-web-app/user.jpg" width={400} height={240} alt="Image of user table" /></Link>
                    <Link href="/restaurant-web-app/orders.jpg"><Image className="shadow-lg rounded-md" src="/restaurant-web-app/orders.jpg" width={400} height={240} alt="Image of orders table" /></Link>

                </div>
                {/* </div> */}

                <section className="w-full flex flex-col p-8 sm:w-2/3 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl">
                        Project Description
                    </h2>
                    <p className="py-4">
                        A restaurant ordering application built with Node.JS and Express. Users can create a profile, order from different restaurants and view their previous orders within their profile.

                    </p>
                    <h2 className="text-2xl">
                        Key Features
                    </h2>



                    <ul className="p-4 list-disc">
                        <li><span className="font-semibold">Express Routing:</span> Mapped API requests mirror front-end page routes with added functionality for login, logout, and form submissions </li>

                        <li><span className="font-semibold">Express Session Middleware:</span>  Express Session allows the application to store and retrieve user-specific data, ensuring accurate content rendering based on the user&apos;s status and interactions </li>
                        <li><span className="font-semibold">MongoDB Integration:</span> Utilized MongoDB to track user details, past orders, and establish a connection between users and their respective orders</li>
                        <li><span className="font-semibold">Robust Order Page:</span> Flexible order page adept at handling various scenarios, including users changing restaurants mid-order or not meeting the minimum total, while also calculating tax and delivery fees</li>
                        <li><span className="font-semibold">Web Hosting:</span> Using <a href="https://render.com/" className="font-semibold">Render</a> and <a href="https://www.mongodb.com/atlas/database" className="font-semibold">MongoDB Atlas</a> for free application and database hosting</li>
                    </ul>



                    <div className="mt-auto justify-center items-center flex flex-row space-x-4 "> {/* flex flex-row w-full justify-center  items-center */}
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
                    </div>
                </section>


            </div>



        </div>

    )
}
