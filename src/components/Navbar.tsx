 "use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-300">
      <nav className="h-16 py-2 px-4 flex flex-wrap items-center justify-between text-teal-500 font-bold">
        {/* Logo */}
        <h1 className="text-2xl italic">
          <a href="#!">Romi.com</a>
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-wrap space-x-4 md:space-x-7 text-sm md:text-base">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>

        {/* Signup Link */}
        <ul>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
