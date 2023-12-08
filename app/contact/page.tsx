import { Card, CardBody } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import EmailForm from '@/components/emailForm'
import Nav from '@/components/nav'

export default function Contact() {
    return (
        <> 
        <div className="w-full h-screen flex flex-col items-center space-y-8 px-2">
            <Card boxShadow='lg' className="mb-20 bg-white rounded-lg py-8 p-2 shadow-lg w-full lg:w-2/3">
                <CardBody className="w-full flex flex-col items-center justify-center sm:text-xl text-center">
                <h2 className="sm:hidden block text-lg">Here are a few ways you can reach me!</h2>

                    <div className="w-72 sm:w-3/4 flex flex-row pt-6 justify-center">
                        <h2 className="sm:block hidden mr-16 text-xl">Here are a few ways you can reach me!</h2>
                        <Link href="https://www.linkedin.com/in/owen-allen00/" className="flex flex-row items-center mx-4 space-x-2"><i className="devicon-linkedin-plain colored text-3xl"></i> <p className="text-base">LinkedIn</p></Link>
                        <Link href="mailto:owenallen.2000@gmail.com" className="flex flex-row items-center mx-4 space-x-2"><Image width={32} height={32} alt="mail symbol" src="/mail.png" />    <p className="text-base">Email</p></Link>
                        {/* <Link href="https://github.com/owen-allen" className="flex flex-row items-center space-x-2"><i className="devicon-github-original colored text-4xl"></i> <p>GitHub</p></Link> */}
                    </div>

                    <EmailForm />
                </CardBody>
            </Card>
        </div>
        </>
    );
}
