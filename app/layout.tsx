import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/footer'
import { GeistSans, GeistMono } from 'geist/font'
import { ChakraProvider } from '@chakra-ui/react'
import Favicon from '/public/square-glasses.png';

export const metadata: Metadata = {
  title: "Owen's Portfolio",
  description: 'Created using NextJS',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  // if the pathname is not projects, about or contact, we dont need the header
  return (
    <html lang="en">
      {/* <Head> */}  
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      </head>
      {/* </Head> */}
      <body className={`${GeistSans.className} bg-purple-100`}>
        <ChakraProvider>
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  )
}
