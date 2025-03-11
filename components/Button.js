import React from 'react'
import {PT_Sans } from "next/font/google";
import "../app/globals.css";

const ptsans = PT_Sans({ subsets: ["latin"], weight: ['400'] });

export default function Button(props) {
    const {text , dark} = props
  return (
    <button className={`rounded-full overflow-hidden duration-200 hover:opacity-60 flex items-center
        ${dark ? ' bgGradient ' : ' text-indigo-600 border border-2 border-indigo-600 '}`}>
    <p className = {'px-6 sm:px-10 whitespace-nowrap py-1 sm:py-1 ' + ptsans.className}>
        {text}
    </p>
   </button>
  )
}
