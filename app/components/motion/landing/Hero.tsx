'use client'

import { useInView, motion, AnimatePresence } from 'motion/react'
import main from "@/public/img/main.svg"
import dummy from "@/public/img/dummy-photo.jpg"
import OptimizedImage from '../../OptimizedImage'
import Call from './Call'
import Grids from '../../grids'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Hero() {
    const phrase = "Recipes with soul. Stories with flavor."
    const heading = useRef(null)
    const isInView = useInView(heading)

    const slideUp = {
        initial: {
            y: "100%"
        },
        open: (i: number) => ({
            y: "0%",
            transition: { duration: 0.5, delay: 0.075 * i }
        }),
        closed: {
            y: "100%",
            transition: { duration: 0.5 }
        }
    }

    const opacity = {
        initial: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: { delay: 0.6, duration: 0.75 }
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.75 }
        }
    }

    const button = {
        initial: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: { delay: 0.7, duration: 0.75 }
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.75 }
        }
    }

    const photo = {
        initial: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: { delay: 0.8, duration: 0.75 }
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.75 }
        }
    }

    return (
        <AnimatePresence>
            <Grids className="bg-black text-[#fff] h-full">
                <div className="flex flex-col items-start gap-4 md:pt-0 md:pr-0 md:p-10 p-4 md:col-span-1">
                    <OptimizedImage
                        src={main.src}
                        height={40}
                        width={120}
                        alt="dummy-photo"
                        className="image col-span-full w-full h-[40px]"
                        priority={true}
                    />
                    <div ref={heading} className='flex flex-col gap-4'>
                        <div className='flex justify-center relative'>
                            <h1 className="text-[48px] md:text-[56px] lg:text-[64px] leading-[1.15]">
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
                            </h1>
                        </div>

                        <motion.p
                            ref={heading}
                            variants={opacity}
                            animate={isInView ? "open" : "closed"}
                            className="text-[14px] text-[#767676] md:text-[18px]">
                            A place for clarity, choice, and passion.
                        </motion.p>
                    </div>

                    <motion.div
                        ref={heading}
                        variants={button}
                        animate={isInView ? "open" : "closed"}
                        className='flex flex-row gap-4 mt-10'
                    >
                        <Call />
                        <Link
                            href={'/recipes'}
                        >
                            <Button variant={'secondary'}>
                                <p>
                                    View our table
                                </p>
                            </Button>
                        </Link>
                    </motion.div>

                </div>
                {/*dummy photo*/}
                <motion.div
                    ref={heading}
                    variants={photo}
                    animate={isInView ? "open" : "closed"}
                    className="col-span-full w-full h-full md:col-span-2">
                    <OptimizedImage
                        src={dummy.src}
                        height={800}
                        width={1680}
                        alt="dummy-photo"
                        className="w-full h-full"
                    />
                </motion.div>
            </Grids>
        </AnimatePresence>
    )
}

export default Hero