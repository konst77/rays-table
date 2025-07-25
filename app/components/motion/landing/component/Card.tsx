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
        description: "High protein, high satisfaction, and exceptionally easy.",
        href: 'recipes/chicken',
        alt: "rice and chicken",
        source: chicken,
        height: 560,
        width: 560,
        className: "w-full md:h-full  object-cover saturate-[1.25]",
        color: "f1f1f5"
    },
    {
        title: "Ray's Original Curry",
        description: "Mixed diversity, culture, and identity in one.",
        href: 'recipes/curry',
        alt: "curry",
        source: curry,
        height: 560,
        width: 560,
        className: "w-full md:h-full  object-cover saturate-[1.25]",
        color: "f1f1f5"
    },
    {
        title: "Sweet Dreams Sangria",
        description: "We desire what we can't have the most.",
        href: 'recipes/sangria',
        alt: "sangria",
        source: sangria,
        height: 560,
        width: 560,
        className: "w-full md:h-full  object-cover saturate-[1.25]",
        color: "f1f1f5"
    },
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
            y: "-25%",
            opacity: 0,
            transition: { duration: 0.5 }
        }
    }
    return (
        <div className='md:col-span-full'>
            <AnimatePresence>
                <div ref={card} className='flex flex-col md:flex-row overflow-hidden gap-4'>
                    {
                        recipes.map((recipes, index) => {
                            return (
                                <div key={recipes.title}
                                    className='overflow-hidden relative max-w-[800px]'
                                >
                                    <motion.div
                                        variants={slideUp}
                                        custom={index}
                                        animate={isInView ? "open" : "closed"}
                                        className='flex flex-col md:grid md:grid-cols-2 rounded-2xl'
                                        style={{ backgroundColor: `#${recipes.color}` }}
                                    >
                                        <div className='p-4 md:p-6 h-full flex flex-col mb-4 md:mb-8 order-2 md:order-1 items-start justify-between'
                                        >
                                            <div className='flex flex-col gap-4'>
                                                <h3 className='text-[24px] md:text-[32px] leading-[1.15]'>
                                                    {recipes.title}
                                                </h3>
                                                <p className='text-[14px] md:text-[16px] text-[#555]'>
                                                    {recipes.description}
                                                </p>
                                            </div>

                                            <Link
                                                href={recipes.href}
                                                className='self-end'
                                            >
                                                <Button variant={'secondary'} className='text-[#333]'>
                                                    <p>
                                                        Read story
                                                    </p>
                                                </Button>
                                            </Link>
                                        </div>

                                        <div className='overflow-hidden m-5 rounded-xl'>
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