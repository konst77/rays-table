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
        title: "Chicken Boil",
        description: "High protein, high satisfaction, and exceptionally easy.",
        href: 'recipes/chicken',
        alt: "rice and chicken",
        source: chicken,
        height: 640,
        width: 640,
        className: "w-full h-full  object-cover saturate-[1.25]",
    },
    {
        title: "Ray's Curry",
        description: "Mixed diversity, culture, and identity in one.",
        href: 'recipes/curry',
        alt: "curry",
        source: curry,
        height: 640,
        width: 640,
        className: "w-full h-full  object-cover saturate-[1.25]",
    },
    {
        title: "Sweet Sangria",
        description: "We desire what we can't have the most.",
        href: 'recipes/sangria',
        alt: "sangria",
        source: sangria,
        height: 640,
        width: 640,
        className: "w-full h-full  object-cover saturate-[1.25]",
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
        open: {
            y: "0%",
            opacity: 1,
            transition: { duration: 0.7 }
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.5 }
        }
    }
    return (
        <div className='md:col-span-full'>
            <AnimatePresence>
                <div
                ref={card}
                className='flex flex-col md:grid md:grid-cols-3 overflow-hidden gap-4'>
                    {
                        recipes.map((recipes, index) => {
                            return (
                                <motion.div 
                                    key={recipes.title}
                                    className='overflow-hidden relative'
                                >
                                    <motion.div
                                    variants={slideUp}
                                    animate={isInView ? "open" : "closed"}
                                    custom={index}
                                        className='grid grid-rows-2 h-full rounded-[8px] border border-orange-200'
                                    >
                                        <div className='p-4 md:p-6 h-full flex flex-col mb-4 items-start justify-between'
                                        >
                                            <div className='flex flex-col gap-4'>
                                                <h3 className='text-[24px] md:text-[32px] leading-[1.15]'>
                                                    {recipes.title}
                                                </h3>
                                                <p className='text-[14px] md:text-[16px]'>
                                                    {recipes.description}
                                                </p>
                                            </div>

                                            <Link
                                                href={recipes.href}
                                                className='md:self-end mt-4'
                                            >
                                                <Button variant={'link'} className='text-[#767676]'>
                                                    <p>
                                                        Read story
                                                    </p>
                                                </Button>
                                            </Link>
                                        </div>

                                        <div className='overflow-hidden h-full w-full min-h-[360px] rounded-[4px]'>
                                            <OptimizedImage
                                                alt={recipes.alt}
                                                src={recipes.source.src}
                                                height={recipes.height}
                                                width={recipes.width}
                                                className={recipes.className}
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </AnimatePresence>
        </div >
    )
}

export default Card