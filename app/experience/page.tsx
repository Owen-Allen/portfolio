import React from 'react'


import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import Image from "next/image"

export default function Experience() {
  return (
      <div className="w-full lg:w-3/4 flex flex-col justify-center space-y-8 p-x-8">
        <Card className="bg-white rounded-lg p-2 m-2 shadow-md">
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
          <CardBody className="-mt-4">
            While working at BMO I focused on web app development as part of the Digital Core team. I worked with a team to develop a Managed File Transfer system using Next.JS, TypeScript, and Tailwind CSS.
          </CardBody>


        </Card>
        <Card className="bg-white rounded-lg p-4 m-2 shadow-md">
          <CardHeader className="mb-4 flex flex-row space-x-4">
            <Image alt="ericsson logo" className="w-10 h-10" src='/ericsson.png' width={40} height={40} />
            <a>
              <h2 className="block font-semibold">Ericsson Canada</h2>
              <h3 className="block">Automation Scripting Co-op</h3>
            </a>
          </CardHeader>
          <CardBody>
            While working at BMO I focused on web app development as part of the Digital Core team. I worked with a team to develop a Managed File Transfer system using Next.JS, TypeScript, and Tailwind CSS.
          </CardBody>
          {/* <CardFooter> Could show some logos here? </CardFooter> */}
        </Card>
        <Card className="bg-white rounded-lg p-4 m-2 shadow-md">
          <CardHeader className="mb-4 flex flex-row space-x-4">
            <Image alt="ericsson logo" className="w-10 h-10" src='/carleton.ico' width={40} height={40} />
            <a>
              <h2 className="block font-semibold">Carleton University</h2>
              <h3 className="block">Teaching Assistant</h3>
            </a>
          </CardHeader>
          <CardBody>
            While working at BMO I focused on web app development as part of the Digital Core team. I worked with a team to develop a Managed File Transfer system using Next.JS, TypeScript, and Tailwind CSS.
          </CardBody>
          {/* <CardFooter> Could show some logos here? </CardFooter> */}
        </Card>
        <br />
        <br />
        <br />
      </div>

  )
}
