import Grids from "../components/grids"
import Link from 'next/link';
import { getAllPostMeta, PostMeta } from './lib/posts';


function Blog() {
    const posts: PostMeta[] = getAllPostMeta();
  return (
    <>
        <Grids className="text-black">
            <div className="col-span-2 p-4 md:p-10">
                <div className="flex flex-col gap-6">
                    <h1 className="text-[40px] md:text-[72px] leading-[1]">
                        Ideas to own your table.
                    </h1>
                </div>
            </div>

            <div className="col-start-2 col-span-2 p-4 md:p-10 flex flex-col gap-4 items-end">
                <ul className="space-y-4 w-full">
                    {posts.map(({ slug, title, date }) => (
                        <div key={slug} className="p-2 border-b w-full duration-300 hover:text-orange-500">
                            <h4 className="flex flex-row items-end justify-between">
                                <Link href={`/blog/${slug}`} className="text-[24px] md:text-[32px]">
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

export default Blog