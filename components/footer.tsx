import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <p className='text-sm text-slate-800 p-8 flex flex-row justify-center'>
            Built with
            <Link href="https://nextjs.org/">
            &nbsp;Next.JS 14&nbsp;
            </Link>
            and
            <span><Link href="https://www.framer.com/motion/">
            &nbsp;Framer Motion
            </Link></span>
        </p>
    )
}
