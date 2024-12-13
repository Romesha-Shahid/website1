import  React from "react";
import Link from "next/link";
import { FaFacebook,FaYoutube,FaTiktok } from "react-icons/fa";

const  Footer = () => {
    return(
        <div className=" bg-slate-200 flex justify-items-centerw-[20px] h-[16px] gap-x-3" >
            <footer className=" py-10 px-8 text-indigo-600 ">
             <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
             <div>
              {/*this help service */}
              <h3 className="font-bold mt-4">
            Get support
              </h3>
              <ul className="text-lg">
                <li>Help Center</li>
                <li>Live chat</li>
                <li>Refunds</li>
                <li>Report abuse</li>
              </ul>
             </div>

            { /*company policy */}
             <div>
              <h3 className="font-bold mt-4">Trade Assurance</h3>
              <ul className="space-y-2 text-lg">
                <li>Safe and easy payments</li>
                <li>Money-back policy</li>
                <li>On-time shipping</li>
                <li>After-sales protections</li>
              </ul>
             </div>

               {/*conect to inside */}
             <div>
              <h3 className="font-bold mt-4">Get to know us </h3>
              <ul className="space-y-2 text-lg">
                <li>Corporate responsibility</li>
                <li>News center</li>
                <li>About Romi.com</li>
              </ul>
             </div>
 
              {/*connect to link */}
              <div>
              <h3 className="font-bold mt-4">Soical link</h3>
              <div className=" flex space-x-6  mb-4">
               <Link href="#"><FaFacebook className=" text-white h-6 w-6 rounded-full bg-blue-800 pt-1 pb-1" /></Link>
               <Link href="#"><FaYoutube  className=" text-white h-6 w-6 rounded-full bg-red-500 pt-1 pb-1"  /></Link>
               <Link href="#"><FaTiktok  className="  text-white h-6 w-6 rounded-full bg-gray-950 pt-1 pb-1" /></Link>

              </div>
              </div>
              </div>
            </footer>
        </div>
    )
}
export default Footer

