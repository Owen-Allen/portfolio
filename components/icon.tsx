import React from 'react'

import Link from 'next/link'

type IconProps = {
    href: string,
    className: string,
    text: string
    children?: ReactNode;
}

import { ReactNode } from 'react';

interface MyProps {
}


export default function Icon( props : IconProps) {
  return (
    <Link href={props.href} className="flex flex-col justify-center items-center"><i className={props.className}></i><p className='pt-1 text-xs font-semi'>{props.text}</p></Link>
  )
}
