'use client'

import React, { useRef } from 'react'
import Grids from '../../grids'
import { useInView, motion, AnimatePresence } from 'motion/react';
import AnimatedIcon from './component/AnimatedIcon';




function Why() {
    const phrase = "10 year experience in home kitchen to a large-scale restaurant"
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

    const value = [
        {
            gif: '',
            valueName: 'some kind of name',
            description: 'This is some kind of a description'
        },
        {
            gif: '',
            valueName: 'some kind of name',
            description: 'This is some kind of a description'
        },
        {
            gif: '',
            valueName: 'some kind of name',
            description: 'This is some kind of a description'
        },
    ]


    return (
        <AnimatePresence>
            <Grids className='bg-orange-50 text-black my-40 md:mt-20'>
                <div className="flex flex-col md:col-span-full items-center justify-center p-4 md:p-10">
                    <div className='max-w-[880px] flex flex-col gap-4 md:gap-10 text-center'>
                        <p className='text-[14px] font-bold uppercase text-orange-500'>Our values</p>
                        <div ref={feature}>
                            <div className='flex relative'>
                                <h2 className='text-[40px] md:text-[56px] leading-[1.15]'>
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
                    <div className='flex flex-col gap-4 md:col-span-full md:grid md:grid-cols-3 p-4 mt-10 max-w-[1080px]'>
                        <div className='bg-orange-100 col-span-2 p-4 md:p-10 flex flex-col items-start gap-2 rounded-xl'>
                            <AnimatedIcon variant='eye' />
                            <h4 className='text-[24px] md:text-[32px] leading-[1.15]'>
                                Diverse and Cultural
                            </h4>
                            <p className='text-[14px] md:text-[16px] text-[#767676]'>
                                From a plate of hard-dried rice, broken eggshell egg fries, and almost burnt spams cut in unequal pieces.
                                <br />
                                <br />
                                To perfectly al-dante pastas, fresh clams in white wine, and finely diced garlic and chopped italian parsley.
                            </p>
                        </div>
                        <div className='bg-orange-100 col-span-1 p-4 md:p-10 flex flex-col items-start gap-2 rounded-xl'>
                            <AnimatedIcon variant='chicken' />
                            <h4 className='text-[24px] md:text-[32px] leading-[1.15]'>
                                Cost efficient
                            </h4>
                            <p className='text-[14px] md:text-[16px] text-[#767676]'>
                                From a plate of hard-dried rice, broken eggshell egg fries, and almost burnt spams cut in unequal pieces.
                                <br />
                                <br />
                                To perfectly al-dante pastas, fresh clams in white wine, and finely diced garlic and chopped italian parsley.
                            </p>
                        </div><div className='bg-orange-100 col-span-1 p-4 md:p-10 flex flex-col items-start gap-2 rounded-xl'>
                            <AnimatedIcon variant='heart' />
                            <h4 className='text-[24px] md:text-[32px] leading-[1.15]'>
                                Health conscious
                            </h4>
                            <p className='text-[14px] md:text-[16px] text-[#767676]'>
                                From a plate of hard-dried rice, broken eggshell egg fries, and almost burnt spams cut in unequal pieces.
                                <br />
                                <br />
                                To perfectly al-dante pastas, fresh clams in white wine, and finely diced garlic and chopped italian parsley.
                            </p>
                        </div>
                        <div className='bg-orange-100 col-span-2 p-4 md:p-10 flex flex-col items-start gap-2 rounded-xl'>
                            <AnimatedIcon variant='note' />
                            <h4 className='text-[24px] md:text-[32px] leading-[1.15]'>
                                Restaurant secrets
                            </h4>
                            <p className='text-[14px] md:text-[16px] text-[#767676]'>
                                From a plate of hard-dried rice, broken eggshell egg fries, and almost burnt spams cut in unequal pieces.
                                <br />
                                <br />
                                To perfectly al-dante pastas, fresh clams in white wine, and finely diced garlic and chopped italian parsley.
                            </p>
                        </div>

                    </div>
                </div>

            </Grids>
        </AnimatePresence>
    )
}

export default Why