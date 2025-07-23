import OptimizedImage from '@/app/components/OptimizedImage'
import Link from 'next/link'
import React, { useRef } from 'react'
import sangria from "@/public/img/sangria.jpg"
import chicken from "@/public/img/rice-and-chicken.jpg"
import curry from "@/public/img/rays-original-curry.jpg"
import { Button } from '@/components/ui/button'
import { useInView, motion, AnimatePresence } from 'motion/react'

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
        color: "#ffffff"
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
        color: "#333333"
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
    const card = useRef(null)
    const isInView = useInView(card)

    const slideUp = {
        initial: {
            y: "25%",
            opacity: 0
        },
        open: (i: number) => ({
            y: "0%",
            opacity: 1,
            transition: { duration: 0.7, delay: 0.25 * i }
        }),
        closed: {
            y: "25%",
            opacity: 0,
            transition: { duration: 0.5 }
        }
    }
    return (
        <div className='md:col-span-full'>
            <AnimatePresence>
                <div ref={card} className='flex flex-col md:grid md:grid-cols-2 gap-8'>
                    {
                        recipes.map((recipes, index) => {
                            return (
                                <div key={recipes.title} className='overflow-hidden relative'>
                                    <motion.div
                                        variants={slideUp}
                                        custom={index}
                                        animate={isInView ? "open" : "closed"}
                                        className='flex flex-col md:grid md:grid-cols-2 max-h-[440px]'>
                                        <div className={`p-4 md:p-10 h-full flex flex-col  order-2 md:order-1 items-start justify-between bg-[${recipes.color}]`}>
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
                                    </motion.div>
                                </div>
                            )
                        })
                    }
                </div>
            </AnimatePresence>
        </div >
    )
}

export default Card