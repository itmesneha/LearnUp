import React from 'react'
import { Fugaz_One, Inter } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Hero() {
  return (
    <div className = {'py-10 sm:py-14 md:py-20'}>
      <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + fugaz.className}>
        <span>LearnUp</span> helps you learn anything!
      </h1>
    </div>
  )
}
