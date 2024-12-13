import  React from "react";


const signup= () =>{
    return(
        <div  className="bg-slate-200 min-h-screen flex items-center justify-center">
        <div className=" text-2xl w-1/2 px-4">
            <h1 className=" underline  font-extrabold-">SIGNUP</h1>
            <p  className=" ml-8 mt-8">To sign up for Gmail, create a Google Account. You can use the username and password to sign up .</p>

            
            </div>
        <div className="bg-white flex flex-col p-12 rounded-xl w-1/3">
            
         <input className="my-2 border border-1 border-gray-100 p-3 rounded-md" type="text" placeholder="Enter your email" />

         <input className="my-2 border border-1 border-gray-100 p-3 rounded-md" type="text"placeholder="password" />

         <button className="bg-blue-700 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-800 ">signup</button>
         
         <span className="my-3">
            <hr />
         </span>
         <button className="bg-green-500 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-green-800 w-fit mx-auto ">create new account</button>
        </div>
      

        </div>
    )
}
export default  signup
