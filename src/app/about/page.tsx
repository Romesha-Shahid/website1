
import  React from "react";
import Image from "next/image";

const about= () =>{
    return(

                  
        <div className="bg-slate-100 ">
            {/**part 1 */}
            
            <h2 className=" font-bold title">About Romi.com</h2>
        <p className= " w-3x-2 font-serif  text-left">
            Launched in 1999, Romi.com is the leading platform for global wholesale trade. <br /> 
            We serve millions of buyers and suppliers around the world.</p>
           
           <div className="flex justify-end ">
          <img src="https://img.alicdn.com/tps/i4/TB12rC6FVXXXXbeXFXXjP6tPXXX-372-205.jpg"></img>
            <br />
           {/**part 2 */}
           </div><br />
           <div className="  mr-20 pt-50">
            <h2 className=" font-bold title mx-96">Our Mission</h2>
           <p className=" font-serif text-right mx-96 ">
           As part of the Romi Group, our mission is to make it easy to do business anywhere.
           <br /><br />
           We do this by giving suppliers the tools necessary to reach a global
         audience for their products, and by helping buyers find products and suppliers quickly and efficiently.
           </p>
           <br />
           <div className=" rounded-l-sm mr-20 pt90">
           < div className="bg-left-top">
           <img src="//img.alicdn.com/tps/i3/TB1vN1_FVXXXXa7XpXXViktNVXX-400-289.jpg"></img>
           </div>
           </div>


        </div>
        </div>
    )
}
export default  about

 