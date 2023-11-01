import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/header'

import { GeistSans, GeistMono } from 'geist/font'
import { ChakraProvider } from '@chakra-ui/react'

import Favicon from '/public/favicon.ico';

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
  return (
    <html lang="en">
      <body className={`${GeistSans.className} flex min-h-screen flex-col items-center bg-purple-100`}>
        <ChakraProvider>
          <Header />
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
