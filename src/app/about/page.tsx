
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-slate-100 p-4 sm:p-6">
      {/* Part 1: About Romi.com */}
      <div className="text-center sm:text-left">
        <h2 className="font-bold text-2xl sm:text-3xl mb-4">About Romi.com</h2>
        <p className="font-serif text-lg sm:text-xl text-left">
          Launched in 1999, Romi.com is the leading platform for global wholesale trade. <br />
          We serve millions of buyers and suppliers around the world.
        </p>
      </div>

      <div className="flex justify-center sm:justify-end mt-6">
        <Image
          src="/image.1999.avif"
          alt="Romi.com History"
          height={400}
          width={400}
          className="rounded-lg w-full sm:w-3/4 md:w-1/2"
        />
      </div>

      {/* Part 2: Our Mission */}
      <div className="mt-8 sm:mt-12">
        <h2 className="font-bold text-2xl sm:text-3xl text-center sm:text-left mx-4 mb-4 sm:mx-96">
          Our Mission
        </h2>
        <p className="font-serif text-lg sm:text-xl text-center sm:text-right mx-4 sm:mx-96">
          As part of the Romi Group, our mission is to make it easy to do business anywhere. <br /><br />
          We do this by giving suppliers the tools necessary to reach a global audience for their products, and by helping buyers find products and suppliers quickly and efficiently.
        </p>
      </div>

      {/* Image Section for Part 2 */}
      <div className="flex justify-center sm:justify-start mt-6">
        <div className="rounded-lg sm:mr-20 w-full sm:w-3/4 md:w-1/2">
          <Image
            src="/Screenshot (14).png"
            alt="Romi.com Screenshot"
            height={400}
            width={400}
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

 
