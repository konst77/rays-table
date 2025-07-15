import Grids from "./components/grids";
import OptimizedImage from "./components/OptimizedImage";
import main from "@/public/img/main.svg"
import dummy from "@/public/img/dummy-photo.jpg"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Landing header */}
      <Grids className="bg-black text-[#fff]">
        <div className="flex flex-col items-start gap-4 md:pt-0 md:p-10 p-4 md:col-span-1">
          <OptimizedImage
            src={main.src}
            height={40}
            width={120}
            alt="dummy-photo"
            className="image col-span-full w-full h-[40px]"
            priority={true}
          />
          <h1 className="text-[48px] md:text-[56px] lg:text-[64px] leading-[1.15]">
            Recipes with soul.
            <br />
            Stories with flavor.
          </h1>
        </div>
        {/*dummy photo*/}
        <OptimizedImage
          src={dummy.src}
          height={800}
          width={1680}
          alt="dummy-photo"
          className="col-span-full w-full h-full md:col-span-2"
        />
      </Grids>

      {/* Value Proposition */}
      <Grids className='bg-[#fff] text-[#000] md:h-[640px] md:p-10'>
        <div className="flex flex-col gap-10 p-4 md:p-10 md:col-span-full self-center
        text-[40px] md:text-[56px] lg:text-[80px] leading-[1.15]
        ">
          <div className="flex flex-col self-center text-center">
            <h2 className="">
              We tell beautiful stories,
              <br />
              focusing on simple and healthy meals,
              <br />
              and to see you live your moment.
            </h2>
          </div>
        </div>
      </Grids>

      {/* Recipe overlooking */}
      <Grids className="bg-white text-black md:mt-20">
        {/* Grid for featured recipes, make it dynamic? */}
        <div className="md:col-span-full p-4 md:p-10">
          <h4 className="text-[16px] md:text-[32px] lg:text-[40px] leading-[1.125]">
            Just read, feel, and
            <br />
            create your dish.
          </h4>
        </div>
        <div className="md:col-span-3 flex flex-row gap-6">
          <div className="h-[440px] w-full bg-[#f3f3f3]" />
          <div className="h-[440px] w-full bg-[#f3f3f3]" />
          <div className="h-[440px] w-full bg-[#f3f3f3]" />
        </div>
      </Grids>

      <Grids className="">
        <div className="w-full p-4 border-t border-[#f1f1f5] md:col-span-full md:px-10" />
      </Grids>

      {/* About Ray */}
      <Grids className="">
        <div className="p-4 flex flex-col md:p-0 md:col-span-2 md:justify-between md:pl-10">
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Cooking a dish is a way for me to preserve a connection with the past. A table is how I see the whole."
          </h2>
          <div className="self-end">
              <Link
              href="/about"
              className="underline text-[#767676] text-[14px]"
              >
                <span>
                  Read More
                </span>
              </Link>
          </div>
        </div>
        <div className="h-[440px] bg-[#f3f3f3]" />
      </Grids>

      {/* Newsletter? */}
      <Grids className="bg-orange-500 text-white">
        <div className="md:col-span-1 p-4 md:p-10">
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15]">
            Let's spirit up
            <br />
            your table.
          </h2>
        </div>

        {/* Form Field for Email signup */}
      </Grids>
    </>
  );
}
