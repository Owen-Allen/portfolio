import React from 'react'


import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import Image from "next/image"

export default function Experience() {
  return (
      <div className="w-full flex flex-col justify-center items-center space-y-8 p-x-8 p-2">
        <Card className="bg-white rounded-lg p-2 m-2 shadow-md w-full lg:w-3/4">
          <CardHeader className="flex flex-col sm:flex-row w-full justify-around">
              <div className="flex flex-row space-x-4">
                <Image alt="bmo logo" className="w-10 h-10 rounded-full" src='/bmo.png' width={40} height={40} />
                <a>
                  <h2 className="font-semibold">Bank of Montreal</h2>
                  <h3>Software Developer</h3>
                </a>
              </div>
            <a className="pl-14 text-sm mt-0.5 sm:mt-0 sm:ml-auto">May 2022 - August 2022</a>
          </CardHeader>
          <CardBody className="">
            While working at BMO I focused on web app development as part of the Digital Core team. I worked with a team to develop a Managed File Transfer system using Next.JS, TypeScript, and Tailwind CSS.
          </CardBody>
        </Card>


        <Card className="bg-white rounded-lg p-2 m-2 shadow-md w-full lg:w-3/4">
          <CardHeader className="flex flex-col sm:flex-row w-full justify-around">
              <div className="flex flex-row space-x-4">
                <Image alt="ericsson logo" className="w-10 h-10" src='/ericsson.png' width={40} height={40} />
                <a>
                  <h2 className="font-semibold">Ericsson Canada</h2>
                  <h3>Automation Scripting Co-op</h3>
                </a>
              </div>
            <a className="pl-14 text-sm mt-0.5 sm:mt-0 sm:ml-auto">September 2020 - August 2021</a>
          </CardHeader>
          <CardBody className="">
            While working at BMO I focused on web app development as part of the Digital Core team. I worked with a team to develop a Managed File Transfer system using Next.JS, TypeScript, and Tailwind CSS.
          </CardBody>
        </Card>

        <Card className="bg-white rounded-lg p-2 m-2 shadow-md w-full lg:w-3/4">
          <CardHeader className="flex flex-col sm:flex-row w-full justify-around">
              <div className="flex flex-row space-x-4">
                <Image alt="Carleton Logo" className="w-10 h-10" src='/carleton.ico' width={40} height={40} />
                <a>
                  <h2 className="font-semibold">Carleton University</h2>
                  <h3>Teaching Assistant</h3>
                </a>
              </div>
            <a className="pl-14 text-sm mt-0.5 sm:mt-0 sm:ml-auto">January 2020 - May 2020</a>
          </CardHeader>
          <CardBody className="">
            While working at BMO I focused on web app development as part of the Digital Core team. I worked with a team to develop a Managed File Transfer system using Next.JS, TypeScript, and Tailwind CSS.
          </CardBody>
        </Card>


        <br />
        <br />
        <br />
      </div>

  )
}
