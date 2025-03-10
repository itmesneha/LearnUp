import React from 'react'
import {PT_Sans } from "next/font/google";

const ptsans = PT_Sans({ subsets: ["latin"], weight: ['400'] });

export default function Hero() {
  return (
    <div className = {'py-4 md:py-10 flex flex-col gap-4 sm:gap-8'}>
      <h1 className={'text-5xl sm:text-text-6xl md:text-7xl' + ptsans.className}>
        Hi there! <br />
        Ready to learn something new? <br />
        <span className = 'textGradient font-semibold'>What would you like to explore today?</span>
      </h1>
      {/* <p className = 'text-lg sm:text-xl md:text-2xl text-center'>
        Hi there!
        Ready to learn something new?
        <span className='font-medium'>What would you like to explore today?</span>
      </p> */}
    </div>
  )
}
