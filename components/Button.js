import React from 'react'
import {PT_Sans } from "next/font/google";

const ptsans = PT_Sans({ subsets: ["latin"], weight: ['400'] });

export default function Button(props) {
    const {text , dark} = props
  return (
   <button className = {'rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600' + (dark ? ' text-white bg-indigo-600 border-indigo-600': ' tetx-indigo-600')}>
    <p className = {'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + ptsans.className}>
        {text}
    </p>
   </button>
  )
}
