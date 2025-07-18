import Link from "next/link";
import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'
import Grids from "./components/grids";
import OptimizedImage from "./components/OptimizedImage";
import main from "@/public/img/main.svg"
import dummy from "@/public/img/dummy-photo.jpg"
import sangria from "@/public/img/sangria.jpg"
import chicken from "@/public/img/rice-and-chicken.jpg"
import curry from "@/public/img/rays-original-curry.jpg"
import Shader from "./components/shader-gradient";

export default function Home() {
  return (
    <>
      {/* Landing header */}
      <Grids className="bg-black text-[#fff]">
        <div className="flex flex-col items-start gap-4 md:pt-0 md:pr-0 md:p-10 p-4 md:col-span-1">
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
        <div className="md:col-span-3 flex flex-col md:flex-row gap-4 md:gap-6">
          <Link
            href={'/recipes/rice-and-chicken'}
            className="overflow-hidden"
          >
            <OptimizedImage
              alt="rice-and-chicken"
              src={chicken.src}
              height={1080}
              width={1080}
              className="w-full md:h-[560px] object-cover saturate-[1.25]"
            />
          </Link>
          <Link
            href={'/recipes/sangria'}
            className="overflow-hidden"
          >
            <OptimizedImage
              alt="Sangria"
              src={sangria.src}
              height={1080}
              width={1080}
              className="w-full md:h-[560px] object-cover saturate-[1.25]"
            />
          </Link>
          <Link
            href={'/recipes/sangria'}
            className="overflow-hidden"
          >
            <OptimizedImage
              alt="Curry"
              src={curry.src}
              height={1080}
              width={1080}
              className="w-full md:h-[560px] object-cover saturate-[1.25]"
            />
          </Link>
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
      <div className="h-[640px] text-white relative">
        <Grids className="">
          <div className="md:col-span-1 p-4 md:p-10">
            <h2 className="text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15]">
              Let's spirit up
              <br />
              your table.
            </h2>
          </div>
          {/* Form Field for Email signup */}
        </Grids>
      </div>
    </>
  );
}
