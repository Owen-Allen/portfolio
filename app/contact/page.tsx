import Icon from '@/components/icon'
import { Card, CardBody } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import EmailForm from '@/components/emailForm'
import Nav from '@/components/nav'

export default function Contact() {
    return (
        <> 
        <Nav />
        <div className="w-full flex flex-col items-center space-y-8 px-2">
            <Card className="mb-20 bg-white rounded-lg py-8 p-2 shadow-lg w-full lg:w-2/3">
                <CardBody className="w-full flex flex-col items-center justify-center sm:text-xl text-center">
                    <p className="w-full sm:text-lg">Here are a few ways you can reach me:</p>
                    <div className="flex flex-row pt-8 space-x-4 sm:space-x-16">
                        <Link href="https://www.linkedin.com/in/owen-allen00/" className="flex flex-row items-center space-x-2"><i className="devicon-linkedin-plain colored text-4xl"></i> <p>LinkedIn</p></Link>
                        <Link href="mailto:owenallen.2000@gmail.com" className="flex flex-row items-center space-x-2"><Image width={36} height={36} alt="mail symbol" src="/mail.png" /> <p>Email</p></Link>
                        {/* <Link href="https://github.com/owen-allen" className="flex flex-row items-center space-x-2"><i className="devicon-github-original colored text-4xl"></i> <p>GitHub</p></Link> */}
                    </div>
                    <EmailForm />
                </CardBody>
            </Card>
        </div>
        </>
    );
}
