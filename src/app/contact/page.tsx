import  React from "react";
import Image from "next/image";

const contact= () =>{
    return(
        <div className="bg-slate-200">
          <p>
       <br />   
      contact no :03332455998 
      <br />
      <br />
      address no : ma jinnah road 
      <br />
      <br />
     delivery service to karachi
          </p>
          <div className=" flex justify-center">
          <Image src="/images.de.jpg" alt="imagesde.jpg"width={400} height={100} />

          </div>
        </div>
    )
}
export default  contact


