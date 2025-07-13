import Grids from "./components/grids";
import OptimizedImage from "./components/OptimizedImage";
import main from "@/public/img/main.svg"
import dummy from "@/public/img/dummy-photo.jpg"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Landing header */}
      <Grids className="bg-black text-[#f1f1f5]">
        <div className="flex flex-col items-start md:justify-end gap-4 md:pt-0 md:p-10 p-4 md:col-span-1">
          <OptimizedImage
            src={main.src}
            height={40}
            width={120}
            alt="dummy-photo"
            className="image col-span-full w-full h-[40px]"
            priority={true}
          />
          <h1 className="text-[48px] md:text-[56px] leading-[1.15]">
            Recipes with soul.
            <br />
            Stories with flavor.
          </h1>
          <p className="text-[#767676]">
            Ray’s Table shares simple, healthy meals for everyday joy—served with kindness, a bit of humor, and always a story.
          </p>
          <div className="mt-6 hidden md:block">
            <Button
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-400 hover:text-gray-100">
              <Link href="/recipes">
                <span>Visit Recipes</span>
              </Link>
            </Button>
          </div>
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
      <Grids className='bg-[#fff] text-[#000] border border-[#f1f1f5] md:h-[900px] md:p-10'>
        <div className="p-4 md:p-10">
          <h2 className="text-[40px] md:text-[48px] leading-[1.15]">Why Ray's Table?</h2>
        </div>
        <OptimizedImage
          src={dummy.src}
          alt=""
          height={400}
          width={1200}
          className="w-full md:col-span-1 self-end"
        />
        <div className="flex flex-col gap-10 md:col-start-3 p-4 md:p-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] md:text-[32px] md:leading-[1.5]">
              <span className="text-orange-500">✦ </span>Storytelling first
            </h3>
            <p className="text-[16px] leading-[1.45] md:text-[18px] text-[#767676]">
              Recipes that bring memories, feelings, and connection to the table.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] md:text-[32px] md:leading-[1.5]">
              <span className="text-orange-500">✦ </span>Simple & healthy
            </h3>
            <p className="text-[16px] leading-[1.45] md:text-[18px] text-[#767676]">
              No stress. No fluff. Just feel-good food made accessible.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] md:text-[32px] md:leading-[1.5]">
              <span className="text-orange-500">✦ </span> Real, kind, and funny
            </h3>
            <p className="text-[16px] leading-[1.45] md:text-[18px] text-[#767676]">
              You're not alone in the kitchen. We laugh, spill, and eat together.
            </p>
          </div>
        </div>
      </Grids>

      {/* Recipe overlooking */}
      <Grids className="bg-black text-[#fff]">
        <div className="flex flex-row justify-between p-4 md:p-10">
          <h2 className="text-[40px] md:text-[48px] leading-[1.15]">
            To inspire you
          </h2>
        </div>

        {/* Grid for featured recipes, make it dynamic? */}
        <div className="md:col-span-2 md:grid md:grid-cols-2 md:pt-10 gap-0">
          <OptimizedImage
            src={dummy.src}
            alt="dummy"
            height={400}
            width={600}
            className=""
          />
          <OptimizedImage
            src={dummy.src}
            alt="dummy"
            height={400}
            width={600}
            className=""
          />
          <OptimizedImage
            src={dummy.src}
            alt="dummy"
            height={400}
            width={600}
            className=""
          />
          <OptimizedImage
            src={dummy.src}
            alt="dummy"
            height={400}
            width={600}
            className=""
          />
        </div>
      </Grids>

      {/* About Ray */}
      <Grids className="bg-[#fff] text-[#000]">
        <div className="p-4 flex flex-col gap-4 md:p-10">
          <h2 className="text-[40px] md:text-[48px] leading-[1.15]">
            Little about Ray
          </h2>
          <p className="text-[#555]">
            Hi, I’m Ray. I cook, I feel things, and I believe food should make you feel a little more whole.
          </p>
        </div>
      </Grids>

      {/* Newsletter? */}
      <Grids className="bg-orange-500 text-white">
        <div>

        </div>
      </Grids>
    </>
  );
}
