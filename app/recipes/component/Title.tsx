'use client'

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Props = { phrase: string };

export default function Title({ phrase }: Props) {
    const phrases = phrase
    const title= useRef(null)
    const isInView = useInView(title)

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

  return(
    <div>
          <h1 ref={title} className="text-[40px] md:text-[56px] lg:text-[128px] leading-[1] text-orange-500">
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
  )
}