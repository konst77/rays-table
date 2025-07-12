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
        <Grids className="col-span-full border border-[#333]">
        <div className="flex flex-col items-start md:justify-end gap-4 md:pt-0 md:p-10 p-4 md:col-span-1">
          <OptimizedImage
            src={main.src}
            height={40}
            width={120}
            alt="dummy-photo"
            className="image col-span-full w-full h-[40px]"
            priority={true}
          />
          <h2 className="text-[32px] md:text-[56px] leading-[1.15]">Recipes with soul. Stories with flavor.</h2>
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
          className="col-span-full w-full h-full md:col-span-2 md:border-l border-[#333]"
          priority={true}
        />
        </Grids>
      </Grids>

      <Grids className='bg-[#f1f1f5] text-[#000] md:grid-rows-3'>
        <div className="md:col-start-1 md:row-start-1">
          <h3 className="text-[18px] md:text-[28px] md:leading-[1.5]">
            Storytelling first
          </h3>
          <p className="text-[14px] leading-[1.45] md:text-[18px] text-[#767676]">
            Recipes that bring memories, feelings, and connection to the table.
            </p>
        </div>
        <div className="md:col-start-2 md:row-start-2">
          <h3 className="text-[18px] md:text-[28px] md:leading-[1.5]">
            Simple & healthy (without pressure)
          </h3>
          <p className="text-[14px] leading-[1.45] md:text-[18px] text-[#767676]">
            No stress. No fluff. Just feel-good food made accessible.
          </p>
        </div>
        <div className="md:col-start-3 md:row-start-3">
          <h3 className="text-[18px] md:text-[28px] md:leading-[1.5]">
            Real, kind, and funny
          </h3>
          <p className="text-[14px] leading-[1.45] md:text-[18px] text-[#767676]">
          You're not alone in the kitchen. We laugh, spill, and eat together.
          </p>
        </div>
      </Grids>
    </>
  );
}
