import Icon from '@/components/icon'
import { Card, CardBody } from '@chakra-ui/card'
import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
export default function Contact() {
    return (
        <div className="w-full min-screen flex flex-col justify-center items-center space-y-8 px-2">
            <Card className="flex flex-col justify-center items-center bg-white rounded-lg py-8 p-2 shadow-lg w-full lg:w-2/3">
                <CardBody className="sm:text-xl sm:mx-12 ">
                    <p className="text-xl sm:text-3xl pb-2">Thanks for checking out my site! </p>
                    <p className="sm:text-lg"> Here&apos;s a few ways you can reach me: </p> 

                    <div className="flex flex-row pt-8 -mr-4 justify-start space-x-2 sm:space-x-16">
                        <Link href="https://www.linkedin.com/in/owen-allen00/" className="flex flex-row items-center space-x-2"><i className="devicon-linkedin-plain colored text-4xl"></i> <p>LinkedIn</p></Link>
                        <Link href="mailto:owenallen.2000@gmail.com" className="flex flex-row items-center space-x-2"><Image width={36} height={36} alt="mail symbol" src="/mail.png" /> <p>Email</p></Link>
                        <Link href="https://github.com/owen-allen" className="flex flex-row items-center space-x-2"><i className="devicon-github-original colored text-4xl"></i> <p>GitHub</p></Link>
                    </div>

                </CardBody>
            </Card>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />        
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />



        </div>)
}
