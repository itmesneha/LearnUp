import React from 'react';
import Link from 'next/link'; // For Next.js routing

export default function Sidebar() {
  return (
    <aside className="w-[17vw] bg-gray-100 h-screen p-4">
      <nav>
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