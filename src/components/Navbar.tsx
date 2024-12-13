 "use client";

 import Link from "next/link";
 import React from "react";
 
 
 const Navbar = () =>{
    return(

      <div>

<nav className="bg-slate-300 h-10 py-1 px-2 flex justify-between items-center text-teal-500 font-bold">
      <div>
        <h1 className=" text-2xl italic">
            <a href="#!">Romi.com</a>
            </h1> 
      </div>
      <div>
         <ul className="flex space-x-7">
         <li><Link  href="/contact">contact</Link></li>
         <li><Link href="/about">about</Link></li>
         <li><Link href="/"></Link>home</li>

         </ul>      
        </div>
      <div>
        <ul>
          <li><Link href="/signup">signup</Link></li>
          </ul>
           </div>
           

    </nav>
    </div>

      

    );
}
 export default  Navbar
 
