
import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-slate-200 p-4 sm:p-6">
      <div className="text-center sm:text-left">
        <p className="text-lg sm:text-xl">
          <br />
          <strong>Contact No:</strong> 03332455998
          <br />
          <br />
          <strong>Address:</strong> MA Jinnah Road
          <br />
          <br />
          <strong>Delivery Service:</strong> To Karachi
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <Image
          src="/images.de.jpg"
          alt="Contact Image"
          width={400}
          height={100}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Contact;


