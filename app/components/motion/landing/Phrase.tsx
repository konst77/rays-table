'use client'

import Grids from '../../grids'
import { useRef } from 'react'
import { useInView, motion, AnimatePresence } from 'motion/react'

function Phrase() {
    const phrase = 'We tell beautiful stories, focusing on simple and healthy meals, and to see you live your moment'
    const description = useRef(null)
    const isInView = useInView(description)

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
            <Grids className='bg-[#fff] text-[#000] my-20 md:py-40 md:p-10'>
                <div className="flex flex-col gap-10 p-4 md:p-10 md:col-span-full self-center
            text-[40px] md:text-[56px] lg:text-[80px] leading-[1.15]
            ">
                    <p className='text-[12px] md:text-[14px] text-center font-bold uppercase text-orange-500'>What we do</p>
                    <div ref={description}>
                        <div className='flex justify-center relative'>
                            <h1 className='text-center max-w-[800px]'>
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
                    </div>
                </div>
            </Grids >
        </AnimatePresence>
    )
}

export default Phrase