'use client'

import React, { useRef } from 'react'
import Grids from '../../grids'
import { useInView, motion, AnimatePresence } from 'motion/react';


function Why() {
    const phrase = "Experience from a small home kitchen to a large-scale restaurant"
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
            <Grids className='bg-white text-black my-40 md:mt-20'>
                <div className="flex flex-col md:col-span-1 items-start p-4 md:p-10 gap-4 md:gap-10">
                    <p className='text-[14px] font-bold uppercase text-orange-500'>Our Principle</p>
                    <div ref={feature}>
                        <div className='flex relative max-w-[560px]'>
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
                <div className='col-span-2 grid grid-row-3 gap-4 text-black bg-orange-100 p-4 md:p-40 rounded-xl'>
                    {
                        value.map((value, index) => {
                            return (
                                <div key={index} className='h-full w-full p-4 md:p-10 border border-[#767676] rounded-xl'>
                                    <div className=''>
                                        <h4>
                                            {value.valueName}
                                        </h4>
                                        <p>
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Grids>
        </AnimatePresence>
    )
}

export default Why