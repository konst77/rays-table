import Grids from "./components/grids";
import OptimizedImage from "./components/OptimizedImage";
import main from "@/public/img/main.svg"
import dummy from "@/public/img/dummy-photo.jpg"

export default function Home() {
  return (
    <>
    {/* Landing header */}
    <Grids className="bg-orange-700 text-[#f1f1f5]">
      <div className="flex flex-col items-start col-span-full gap-4 md:pt-0 md:p-10 p-4 md:col-span-1">
      <OptimizedImage
      src={main.src}
      height={800}
      width={1680}
      alt="dummy-photo"
      className="image col-span-full w-full h-full"
      priority={true}
      />
      <h2 className="text-[18px] font-medium md:text-[24px]">Transparent and lavishing table</h2>
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
      

      {/*dummy text*/}
      <div className="col-span-full lg:p-20 md:p-10 p-4 grid md:grid-cols-3 grid-cols-1 gap-4 w-full text-pretty">
        <div className="col-span-1">
          <p>
            Ray's table started from the small kitchen in the apartment complex near University of Washington.
            Trying to distinguish an identity for myself, food was something that I wanted to distinguish as my identity.
          </p>
        </div>

        <div className="col-span-1">
          <p>
            Everything started out as a self-interest, until it became a lifestyle, identity, and a career.
            We are pusuing to make home dining easier, healthier, and tastier. Maybe also a bit of humor to lighten up your day.
          </p>
        </div>

        <div className="col-span-1">
          <p>
            We want audiences who are willing to learn how to cook, try a good dish, or discover a cooking method.
            Beginners are welcome as well as who have some experience in home dining. We mix culture and food together.
          </p>
        </div>
      </div>
    </Grids>

    <Grids className='bg-[#f1f1f5] text-[#000]'>
      <div>

      </div>
    </Grids>
    </>
  );
}
