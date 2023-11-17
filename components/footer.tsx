import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <p className='text-xs sm:text-sm text-slate-800 p-8 flex flex-row justify-center'>
            Built with
            <Link className="hover:text-black" href="https://nextjs.org/">
            &nbsp;Next.JS
            </Link>
            ,
            {/* &#10;&#13; */}
            <span><Link className="hover:text-black" href="https://www.framer.com/motion/">
            &nbsp;Framer Motion&nbsp;
            </Link></span>
            and
            <span><Link className="hover:text-black" href="https://chakra-ui.com/">
            &nbsp;Chakra UI
            </Link></span>
        </p>
    )
}
