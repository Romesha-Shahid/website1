"use client";
import Image from "next/image";

export default function Product() {
  return (
    <main className="bg-slate-200">
      <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-6 pl-14">
        <div className="flex flex-col gap-y-3">
          <div>
            <Image
              src="/image89.jpg"
              alt="image89jpg"
              width={400}
              height={100}
            />
            <p>Price $2</p>
          </div>
          <div>
            <Image
              src="/image123.jpg"
              alt="image123.jpg"
              width={400}
              height={100}
            />
            <p>Price $3</p>
          </div>
          <div>
            <Image
              src="/image999.avif"
              alt="image999.avif"
              width={400}
              height={100}
            />
            <p>Price $4</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <div>
            <Image
              src="/image123456.jpg"
              alt="image123456.jpg"
              width={400}
              height={100}
            />
            <p>Price $6</p>
          </div>
          <div>
            <Image
              src="/images67.jpg"
              alt="images67.jpg"
              width={400}
              height={100}
            />
            <p>Price $7</p>
          </div>
          <div>
            <Image
              src="/images78.jpg"
              alt="images78.jpg"
              width={400}
              height={100}
            />
            <p>Price $8</p>
          </div>
          <div>
            <Image
              src="/image012.jpg"
              alt="image012.jpg"
              width={400}
              height={100}
            />
            <p>Price $2.99</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <div>
            <Image
              src="/images910.jpg"
              alt="images910.jpg"
              width={400}
              height={100}
            />
            <p>Price $3.99</p>
          </div>
          <div>
            <Image
              src="/images11.jpg"
              alt="images11.jpg"
              width={400}
              height={100}
            />
            <p>Price $4.99</p>
          </div>
          <div>
            <Image
              src="/images12.jpg"
              alt="images12.jpg"
              width={400}
              height={100}
            />
            <p>Price $5.99</p>
          </div>
        </div>
      </div>
    </main>
  );
}
