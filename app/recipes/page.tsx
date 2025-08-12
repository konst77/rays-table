import Grids from "../components/grids"
import Link from 'next/link';
import { getAllRecipeMeta, RecipeMeta } from "./lib/recipebook";


function Recipes() {
    const recipes: RecipeMeta[] = getAllRecipeMeta();
    return (
        <>
            <Grids className="text-black">
                <div className="col-span-2 p-4 md:p-10">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-[40px] md:text-[72px] leading-[1]">
                            Inspiration for your table.
                        </h1>
                        <p className="text-[#767676] text-pretty max-w-[320px]">
                            Don't choose dishes based on visuals. Choose a dish based on intentions and impressions you want to leave.
                        </p>
                    </div>
                </div>

                <div className="col-start-2 col-span-2 p-4 md:p-10 flex flex-col items-end">
                    <ul className="w-full">
                        {recipes.map(({ slug, title, date }) => (
                            <div key={slug} className="p-4 border-b w-full duration-150 hover:text-orange-500">
                                <h4 className="flex flex-row items-end justify-between">
                                    <Link href={`/recipes/${slug}`} className="text-[24px] md:text-[32px]">
                                        {title}
                                    </Link>
                                    <span className="ml-2 text-[#767676] text-sm">{date}</span>
                                </h4>
                            </div>
                        ))}
                    </ul>
                </div>
            </Grids>
        </>
    )
}

export default Recipes