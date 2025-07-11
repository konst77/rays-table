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
        <div className="flex flex-col items-start md:justify-end col-span-full gap-4 md:pt-0 md:p-10 p-4 md:col-span-1">
          <OptimizedImage
            src={main.src}
            height={800}
            width={1680}
            alt="dummy-photo"
            className="image col-span-full w-full"
            priority={true}
          />
          <h2 className="text-[18px] md:text-[24px]">Transparent and lavishing table</h2>
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
          className="image col-span-full w-full h-full md:col-span-2"
          priority={true}
        />
      </Grids>

      <Grids className='bg-[#f1f1f5] text-[#000]'>
        <div>

        </div>
      </Grids>
    </>
  );
}
