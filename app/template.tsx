"use client"

import React from 'react'
import Nav from '@/components/nav'
import Header from '@/components/header'
import { usePathname } from 'next/navigation'


const routesWithNavAndHeader = ['/', '/projects', '/about', '/contact']

export default function Template({ children }: { children: React.ReactNode }) {

    const path = usePathname()

    return (
        <div>
            {routesWithNavAndHeader.includes(path) && <><Header /></>}
            {children}
        </div>
    )
}
