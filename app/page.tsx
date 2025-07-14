import Grids from "./components/grids";
import OptimizedImage from "./components/OptimizedImage";
import main from "@/public/img/main.svg"
import dummy from "@/public/img/dummy-photo.jpg"

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
          <h1 className="text-[48px] md:text-[56px] lg:text-[72px] leading-[1.15]">
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
        text-[40px] md:text-[56px] lg:text-[80px] leading-[1.25]
        ">
          <div className="flex flex-col self-center text-center">
            <h2 className="">
              We tell beautiful stories,
              <br />
              focusing on simple and healthy meals,
              <br />
              and to see you feel and live your moment.
            </h2>
          </div>
        </div>
      </Grids>

      {/* Recipe overlooking */}
      <Grids className="bg-white text-black md:mt-20">
        {/* Grid for featured recipes, make it dynamic? */}
        <div className="md:col-span-full p-4 md:p-10">
          <p className="text-[40px] leading-[1.15]">
            Just feel, read, and
            <br />
            create your dish.
          </p>
        </div>
        <div className="md:col-span-3 flex flex-row gap-6">
          <div className="h-[640px] w-full bg-[#f3f3f3]" />
          <div className="h-[640px] w-full bg-[#f3f3f3]" />
          <div className="h-[640px] w-full bg-[#f3f3f3]" />
        </div>
      </Grids>

      {/* About Ray */}
      <Grids className="">
        <div className="p-4 flex flex-col gap-4 md:p-10">
          <h2 className="text-[40px] md:text-[48px] leading-[1.15]">
            Welcome to my table
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
