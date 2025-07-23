'use client'

import React, { useRef } from 'react'
import Grids from '../../grids'
import { useInView, motion, AnimatePresence } from 'motion/react';


function Why() {
    const phrase = ""
    const why = useRef(null);
    const value = useInView(why)

    return (
        <AnimatePresence>
            <Grids className='bg-white text-black my-40 md:mt-20'>
                <div>
                    Why
                </div>
            </Grids>
        </AnimatePresence>
    )
}

export default Why