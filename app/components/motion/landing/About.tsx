'use client'

import { AnimatePresence, useInView, motion } from 'motion/react'
import React, { useRef } from 'react'
import Grids from '../../grids'
import Link from 'next/link'
import OptimizedImage from '../../OptimizedImage'
import profile from '@/public/img/profile-dummy.jpg'

function About() {
    const phrase = "A dish is a way for me to preserve my past. A table is how I connect with everyone."
    const quote = useRef(null)
    const isInView = useInView(quote)

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

    const imgSlideUp = {
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
            y: "-5%",
            opacity: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <AnimatePresence>
            <Grids className="my-40">
                <div className="p-4 flex flex-col md:p-0 md:col-span-2 md:pl-10 gap-4 md:gap-10 text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15]">
                    <p className='text-[14px] font-bold uppercase text-orange-500'>About</p>
                    <div ref={quote}>
                        <div className='flex justify-center relative'>
                            <h1 className=''>
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
                    <div className="">
                        <Link
                            href="/about"
                            className="underline text-[#767676] text-[14px]"
                        >
                            <p>
                                Read More
                            </p>
                        </Link>
                    </div>
                </div>
                <div className='overflow-hidden relative rounded-xl'>
                    <motion.div
                        variants={imgSlideUp}
                        animate={isInView ? "open" : "closed"}
                    >
                        <OptimizedImage
                            alt='profile-photo'
                            src={profile.src}
                            height={1080}
                            width={800}
                            className='object-cover rounded-xl'
                        />
                    </motion.div>
                </div>
            </Grids>
        </AnimatePresence>
    )
}

export default About