'use client'

import { useInView, motion, AnimatePresence } from 'motion/react'
import main from "@/public/img/main.svg"
import OptimizedImage from '../../OptimizedImage'
import Call from './component/Call'
import Grids from '../../grids'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Shader from '../../shader-gradient'

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

    return (
        <AnimatePresence>
            <div className='text-[#fff] relative h-[95vh] bg-black'>
                <div className="flex flex-col h-full items-center justify-center gap-4 md:pt-0 md:pr-0 md:p-10 p-4  md:col-span-full backdrop-blur-xl">
                    <div>
                        <OptimizedImage
                            src={main.src}
                            height={40}
                            width={120}
                            alt="dummy-photo"
                            className="w-full h-[40px]"
                            priority={true}
                        />
                    </div>
                    <div ref={heading} className='flex flex-col gap-4 max-w-[880px]'>
                        <div className='flex justify-center relative'>
                            <h1 className="text-center text-[48px] md:text-[56px] lg:text-[102px] leading-[1.15]">
                                {
                                    phrase.split(" ").map((word, index) => {
                                        return <span key={index} className='relative overflow-hidden inline-flex mr-2 md:mr-4'>
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
                    </div>

                    <motion.div
                        variants={button}
                        animate={isInView ? "open" : "closed"}
                        className='flex flex-row gap-4 mt-10'
                    >
                        <Call />
                        <Link
                            href={'/recipes'}
                        >
                            <Button variant={'ghost'}>
                                <p>
                                    View our table
                                </p>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
                {/*dummy photo*/}
                {/*<Shader className="absolute top-0 h-full w-full -z-10" /> */}
            </div>
        </AnimatePresence>
    )
}

export default Hero