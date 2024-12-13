"use client";
 import Image from "next/image"
import footer from "@/components/footer";
export default function home(){
  
  return  (
      <main className="bg-slate-200">
    
       <div className="flex gap-x-3 pl-14">
        <div>
       <Image  src="/image89.jpg" alt="image89jpg"width={400} height={100} />
       <p>price $2</p>
       <Image src="/image123.jpg" alt="image123.jpg"width={400} height={100} />
       <p>price $3</p>
       <Image src="/image999.avif" alt="image999.avif"width={400} height={100}/>
       <p>price $4</p>
        
       </div>
      <div>
      <Image src="/image123456.jpg" alt="image123456.jpg"width={400} height={100}/>
      <p>price $6</p>
      <Image src="/images67.jpg" alt="images67.jpg"width={400} height={100}/>
      <p>price $7</p>
      <Image src="/images78.jpg" alt="images78.jpg"width={400} height={100}/>
      <p>price $8</p>
      <Image src="/image012.jpg" alt="image012.jpg"width={400} height={100}/>
      <p>price $2.99</p>
      </div>
        <div>
        <Image src="/images910.jpg" alt="images910.jpg"width={400} height={100}/>
        <p>price $3.99</p>
        <Image src="/images11.jpg" alt="images11.jpg"width={400} height={100}/>
        <p>price $4.99</p>
        <Image src="/images12.jpg" alt="images12.jpg"width={400} height={100}/>
        <p>price $5.99</p>
        </div>


        </div> 
        </main>
          
  
  );
} className="text-gray-600 body-font
