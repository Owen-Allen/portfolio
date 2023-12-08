"use client"
import { useRouter } from 'next/navigation'

export default function BackButton() {
    const router = useRouter()

    return (
        <button type="button" onClick={() => router.push('/projects#nav')} className="rounded-full w-12 flex items-center justify-center sm:px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border gap-x-2 sm:w-auto hover:bg-gray-100">
            <svg className="sm:w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
        </button>
    )
}

{/*
<button onClick={() => onClick={router.back()}} type="button" class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
    <span>Go back</span>
</button>
*/}