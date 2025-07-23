import OptimizedImage from '@/app/components/OptimizedImage'
import Link from 'next/link'
import React from 'react'
import sangria from "@/public/img/sangria.jpg"
import chicken from "@/public/img/rice-and-chicken.jpg"
import curry from "@/public/img/rays-original-curry.jpg"
import { Button } from '@/components/ui/button'

const recipes = [
    {
        title: "Best Chicken Boil",
        description: "hi",
        href: 'recipes/chicken',
        alt: "rice and chicken",
        source: chicken,
        height: 560,
        width: 560,
        className: "w-full md:h-[560px] object-cover saturate-[1.25]",
        color: "#131313"
    },
    {
        title: "Ray's Original Curry",
        description: "hi",
        href: 'recipes/curry',
        alt: "curry",
        source: curry,
        height: 560,
        width: 560,
        className: "w-full md:h-[560px] object-cover saturate-[1.25]",
        color: "#131313"
    },
    {
        title: "Sweet Dreams Sangria",
        description: "hi",
        href: 'recipes/sangria',
        alt: "sangria",
        source: sangria,
        height: 560,
        width: 560,
        className: "w-full md:h-[560px] object-cover saturate-[1.25]",
        color: "#131313"
    },
    {
        title: "Clam Clam, Vongole",
        description: "hi",
        href: 'recipes/vongole',
        alt: "vongole",
        source: sangria,
        height: 560,
        width: 560,
        className: "w-full md:h-[560px] object-cover saturate-[1.25]",
        color: "#131313"
    }
]

function Card() {
    return (
        <div className='md:col-span-full flex flex-col md:grid md:grid-cols-2 gap-8'>
            {
                recipes.map((recipes, i) => {
                    return (
                        <div key={recipes.title}
                            className='flex flex-col md:grid md:grid-cols-2 max-h-[440px]'>
                            <div className='p-4 md:p-10 h-full flex flex-col border md:border-l-0 order-2 md:order-1 items-start justify-between'>
                                <div className='flex flex-col gap-4 md:gap-8'>
                                    <h3 className='text-[24px] md:text-[32px] leading-[1.15]'>
                                        {recipes.title}
                                    </h3>
                                    <p className='text-[14px] md:text-[18px] text-[#767676]'>
                                        {recipes.description}
                                    </p>
                                </div>

                                <Link
                                    href={recipes.href}
                                    className='self-end'
                                >
                                    <Button variant={'link'} className='text-[#767676]'>
                                        <p>
                                            Read our story
                                        </p>
                                    </Button>
                                </Link>
                            </div>

                            <div className='overflow-hidden'>
                                <OptimizedImage
                                    alt={recipes.alt}
                                    src={recipes.source.src}
                                    height={recipes.height}
                                    width={recipes.width}
                                    className={recipes.className}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card