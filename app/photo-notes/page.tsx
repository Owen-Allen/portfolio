import BackButton from '@/components/backButton'
import Icon from '@/components/icon'
import Link from 'next/link'
import React from 'react'


export default function Clucker() {
    return (
        <div className="w-full flex flex-col justify-center items-center">

            {/* desktop, row, images on left, description on right */}
            {/* mobile, col, description above, images below */}

            <div className="flex w-full sm:w-10/12 flex-row items-center justify-start space-x-8 m-10">
                <BackButton />
                <Link className=" text-3xl font-bold" href="/photo-notes"> photo-notes </Link>
                <Link className=" text-2xl mt-auto" href="https://github.com/Owen-Allen/photo-notes"> Github </Link>
            </div>
            <div className="relative flex flex-col-reverse sm:flex-row w-full sm:w-10/12">


                {/* images */}
                <div className="flex flex-col py-auto px-4">
                    <video
                        width="960"
                        height="540"
                        controls={true}
                        src="/photo-notes/demo.mp4"
                    >
                    </video>
                </div>

                <section className="w-full flex flex-col p-8 sm:w-2/3 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl">
                        Project Descrition
                    </h2>
                    <p className="py-4">
                        photo-notes is a tool that makes it easier to insert screenshots into your Markdown files. The script works by monitoring the user&apos;s
                        screenshots directory for new files. When a new file is added, it moves it to the desired directory and creates a Markdown insertion link that can be
                        added to your notes.
                        <br />
                        <br />
                        During my lectures I would often take notes in Markdown and I wanted to include the diagrams my professors created directly in my notes.
                        I found that trying to add the images myself during class was time-consuming and would cause me to fall behind, so I created a script to do it instead,
                    </p>


                    <h2 className="text-2xl">
                        Key Features
                    </h2>
                    <ul className="p-4 list-disc">
                        <li>Python and asyncio: Python and asyncio allows the script to monitor the screenshots directory and wait for user input at the same time</li>
                        <li>CLI Tooling: By adding the tool to your PATH, you can use it from any directory</li>
                        <li>Bash Scripting: Using shutil, the script can safely perform OS commands to move the user&apos;s screenshot to the proper directory</li>
                    </ul>


                    <div className="mt-auto justify-center flex flex-row space-x-4 "> {/* flex flex-row w-full justify-center  items-center */}
                        <Link href="https://www.python.org/" className="flex flex-col justify-center items-center">
                            <svg height="36" width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" /></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" /></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" /><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" /><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" /><stop offset="1" stopColor="#7F7F7F" stopOpacity="0" /></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z" /></svg>
                            <p className='pt-1 text-xs font-semi'>Python</p>
                        </Link>
                        <Icon href="https://www.markdownguide.org/" className="devicon-markdown-original colored text-4xl">
                            <p className="pt-1 text-xs">Markdown</p>
                        </Icon>
                    </div>
                </section>


            </div>



        </div>

    )
}
