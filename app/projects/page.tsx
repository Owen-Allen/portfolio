import React from 'react'

import Blob from '@/components/blob'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/card'
import { Text } from '@chakra-ui/react'


import Image from 'next/image'
import Link from 'next/link'
import { Heading, Stack } from '@chakra-ui/react'

export default function Projects() {
  return (
    <div className="w-full lg:w-3/4 flex flex-col justify-center space-y-8 p-x-8">
      <Card
        className="bg-white m-2 shadow-md"
        direction={{ xs: 'column', lg: 'row' }}
        overflow='hidden'
        >
        <Image width={250} height={250} src='/clucker.png' alt='Clucker Logo' className='hidden md:block'
        />

        <CardBody className="p-4">
          {/* TITLE */}
          <div className="flex flex-row items-center">
            {/* logo(small) Name, Github, Website */}
            <Image className="h-10 w-10 md:hidden" alt="clucker logo" src='/clucker2.png' width={40} height={40}></Image>
            <h1    className="ml-4 md:ml-0 text-xl font-bold"> Clucker </h1>
            <Link  className="ml-4 hover:underline" href="https://github.com/Owen-Allen/clucker"> Github </Link>
            <Link  className="ml-4 hover:underline" href="https://clucker.vercel.app/"          > Website </Link>
          </div>
          {/* BODY */}
          <Text className="mt-4">
            Clucker is a web based social media app I created for my friends during the summer.
            blah blah blah.               Clucker is a web based social media app I created for my friends during the summer.
            blah blah blah. This
            Clucker is a web based social media app I created for my friends during the summer.
            blah blah blah.
          </Text>
        </CardBody>
      </Card>

      <Card
        className="bg-white m-2 shadow-md"
        direction={{ xs: 'column', lg: 'row' }}
        overflow='hidden'
        >
        <Image width={250} height={250} src='/opencv.png' alt='OpenCV Logo' className='p-4 hidden md:block'
        />

        <CardBody className="p-4">
          {/* TITLE */}
          <div className="flex flex-row items-center">
            {/* logo(small) Name, Github, Website */}
            <Image className="h-10 w-10 md:hidden" alt="OpenCV logo" src='/opencv.png' width={40} height={40}></Image>
            <h1    className="ml-4 md:ml-0 text-xl font-bold"> Image Stitcher </h1>
            <Link  className="ml-4 hover:underline" href="https://github.com/Owen-Allen/image-stitcher"> Github </Link>
            <Link  className="ml-4 hover:underline" href="https://clucker.vercel.app/"          > Website </Link>
          </div>
          {/* BODY */}
          <Text className="mt-4">
            Clucker is a web based social media app I created for my friends during the summer.
            blah blah blah.               Clucker is a web based social media app I created for my friends during the summer.
            blah blah blah. This
            Clucker is a web based social media app I created for my friends during the summer.
            blah blah blah.
          </Text>
        </CardBody>
      </Card>

      <Card
        className="bg-white m-2 shadow-md"
        direction={{ xs: 'column', lg: 'row' }}
        overflow='hidden'
        >
        <Image width={250} height={250} src='/book.png' alt='Book Icon' className='p-4 hidden md:block'
        />

        <CardBody className="p-4">
          {/* TITLE */}
          <div className="flex flex-row items-center">
            {/* logo(small) Name, Github, Website */}
            <Image className="h-10 w-10 md:hidden" alt="Book Icon" src='/book2.png' width={40} height={40}></Image>
            <h1    className="ml-4 md:ml-0 text-xl font-bold"> Bookstore Web App </h1>
            <Link  className="ml-4 hover:underline" href="https://github.com/Owen-Allen/bookstore-webapp"> Github </Link>
            <Link  className="ml-4 hover:underline" href="https://bookstore-webapp.vercel.app/"          > Website </Link>
          </div>
          {/* BODY */}
          <Text className="mt-4">
            Clucker is a web based social media app I created for my friends during the summer.
            blah blah blah.               Clucker is a web based social media app I created for my friends during the summer.
            blah blah blah. This
            Clucker is a web based social media app I created for my friends during the summer.
            blah blah blah.
          </Text>
        </CardBody>
      </Card>


      <Card
        className="bg-white m-2 shadow-md"
        direction={{ xs: 'column', lg: 'row' }}
        overflow='hidden'
        >
        <Image width={250} height={250} src='/crop.png' alt='Crop Icon' className='p-8 hidden md:block'
        />

        <CardBody className="p-4">
          {/* TITLE */}
          <div className="flex flex-row items-center">
            {/* logo(small) Name, Github, Website */}
            <Image className="h-10 w-10 md:hidden" alt="Crop Icon" src='/crop.png' width={40} height={40}></Image>
            <h1    className="ml-4 md:ml-0 text-xl font-bold"> photo-notes </h1>
            <Link  className="ml-4 hover:underline" href="https://github.com/Owen-Allen/photo-notes"> Github </Link>
          </div>
          {/* BODY */}
          <Text className="mt-4">
            Photo-notes is a script I developed to make it easier to add images to my MarkDown notes while in lecture. 
          </Text>
        </CardBody>
      </Card>





      <br />
      <br />
      <br />
    </div>

  )
}

