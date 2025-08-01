import Grids from "@/app/components/grids"
import Image from "next/image"
import Link from "next/link"


interface Article {
    id: number
    title: string
    description: string
    cover: {
        name: string
        url: string
    }
    url: string
    slug: string
}

export default async function Call() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLOUD_URL}/api/articles?populate=*`)
    const strapi = await res.json()

    return (
        <Grids className="">
            <div className="col-span-3 p-4 md:p-10">
                <h1 className="text-[40px] md:text-[72px] leading-[1.15]">Ideas to own your table</h1>
            </div>
            <div className="col-span-3 flex flex-col md:grid md:grid-cols-2 gap-4">
            {(strapi.data as Article[]).map((item: Article) => (
                <div key={item.id}>
                    <Link href={`/blog/${item.slug}`}>
                        <div className="flex flex-col md:grid md:grid-cols-2 bg-orange-50 overflow-hidden rounded-xl h-full md:min-h-[360px]">
                            <div className="relative min-h-[320px] h-full w-full rounded-xl overflow-hidden">
                                <Image src={item.cover.url} alt={item.title} fill className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col gap-4 p-4 md:p-10">
                                <h2 className="text-[24px] md:text-[32px] leading-[1.15]">{item.title}</h2>
                                <p className="text-[12px] md:text-[14px] text-[#767676]">{item.description}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            </div>
        </Grids>
    )
}