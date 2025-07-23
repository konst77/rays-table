'use client'

import { Button } from '@/components/ui/button'
import Grids from '../../grids'
import Card from './component/Card'
import Link from 'next/link'
import { useRef } from 'react'
import { useInView, motion, AnimatePresence } from 'motion/react'

function Recipes() {
    const phrase = "Take a glimpse on our table while you walk by."
    const feature = useRef(null)
    const isInView = useInView(feature)

    const slideUp = {
        initial: {
            y: "100%"
        },
        open: (i: number) => ({
            y: "0%",
            transition: { duration: 0.7, delay: 0.025 * i }
        }),
        closed: {
            y: "100%",
            transition: { duration: 0.5 }
        }
    }

    return (
        <AnimatePresence>
            <Grids className="bg-white text-black my-40 md:mt-20">
                {/* Grid for featured recipes, make it dynamic? */}
                <div className="flex flex-col md:col-span-2 p-4 md:p-10 gap-4 md:gap-10">
                    <p className='text-[14px] font-bold uppercase text-orange-500'>Featured Recipes</p>
                    <div ref={feature}>
                        <div className='flex relative'>
                            <h2 className='text-[56px] leading-[1.15]'>
                                {
                                    phrase.split(" ").map((word, index) => {
                                        return <span key={index} className='relative overflow-hidden inline-flex mr-2 md:mr-6'>
                                            <motion.span variants={slideUp}
                                                custom={index}
                                                animate={isInView ? "open" : "closed"}
                                                key={index}>
                                                {word}
                                            </motion.span>
                                        </span>
                                    })
                                }
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start md:col-span-1 p-4 md:p-10 gap-4 md:gap-10">
                    <Link
                        href={'/recipes'}
                        className='self-end'
                    >
                        <Button variant={'link'}>
                            <p className='text-[#767676]'>
                                View all
                            </p>
                        </Button>
                    </Link>
                </div>
                <Card />
            </Grids>
        </AnimatePresence>
    )
}

export default Recipes