

import Image from 'next/image'
import React from 'react'

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'



export default function Blob() {
    // top left, image
    // title, subtitle

  return (
    <Card className="bg-white rounded-lg p-4 m-2">
        <CardHeader className="mb-4 flex flex-row space-x-4">
            <Image alt="bmo logo" className="w-10 h-10 rounded-full" src='/bmo.png' width={40} height={40} />
            <a>
                <h2 className="block font-semibold">Bank of Montreal</h2>
                <h3 className="block">Software Developer</h3>
            </a>
        </CardHeader>
        <CardBody>
            While working at bmo I...
        </CardBody>
        {/* <CardFooter></CardFooter> */}
    </Card>


 )
}

// 
{/* <div className='w-full h-72 p-4 bg-white border-gray border-2 rounded-xl '>
<div id='header' className="flex flex-row w-full">
    <Image alt="bmo logo" src='/bmo.png' width={40} height={40} className="rounded-full"/>
    <div>
        <h2>Bank of Montreal</h2>
        <h3>Software Developer</h3>
    </div>
</div>
</div> */}