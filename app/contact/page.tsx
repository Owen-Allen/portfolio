import { Card, CardBody } from '@chakra-ui/card'
import React from 'react'

export default function Contact() {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-8 p-x-8 p-2">

    <Card className="bg-white rounded-lg py-8 p-2 m-2 shadow-md w-full lg:w-2/3">
        <CardBody className="sm:text-xl sm:mx-12 ">
            <p className="text-3xl pb-2">Thanks for checking out my site! </p>
            If you want to reach me, here are a few ways:
        </CardBody>
    </Card> 
    </div>  )
}
