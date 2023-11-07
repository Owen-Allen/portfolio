import React from 'react'

import Link from 'next/link'

type IconProps = {
  href: string,
  className: string,
  text: string
  children?: ReactNode;
}

import { ReactNode } from 'react';

// built on top of devicon
export default function Icon({
  children, className, href
}: {
  children: React.ReactNode, className: string, href: string
}){
  return (
    <Link href={href} className="flex flex-col justify-center items-center"><i className={className}></i>{children}</Link>
  )
}
