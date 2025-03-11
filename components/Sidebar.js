import React from 'react';
import Link from 'next/link'; // For Next.js routing
import {PT_Sans } from "next/font/google";
import { Fugaz_One, Inter } from "next/font/google";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Button from './Button';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });
const ptsans = PT_Sans({ subsets: ["latin"], weight: ['400'] });

export default function Sidebar() {
    const header = (
        <header className = {'p-2'}>
          <h1 className = {'text-3xl pb-5 textGradient ' + fugaz.className}>LearnUp</h1>
        </header>
    )
    return (
        <aside className="w-[17vw] bg-gray-100 h-screen p-4">
        {header}
        <div className="flex gap-4">
            <Button
            className="iconButton rounded-full"
            text={<><AddIcon /> New Plan</>}
            dark
            />
            <Button text = {<SearchIcon />} dark />
      </div>
      <br />
        <hr />
        <br /><br />
        <nav className={' ' + ptsans.className}>
            <ul className="space-y-2">
            <li>
                <Link href="/" className="block p-2 rounded hover:bg-gray-200">
                Home
                </Link>
            </li>
            <li>
                <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-200">
                Dashboard
                </Link>
            </li>
            </ul>
        </nav>
        </aside>
    );
}