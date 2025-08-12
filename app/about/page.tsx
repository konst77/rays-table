import React from 'react'
import Footer from '../components/Footer'
import { BottomNavbar } from '../components/bottom-nav'
import { MobileNav } from '../components/mobile-nav'
import dummy from '@/public/img/dummy-photo.jpg'
import Grids from '../components/grids'
import OptimizedImage from '../components/OptimizedImage'

function About() {
    return (
        <section>
            <BottomNavbar />
            <MobileNav />
            {/* Content section */}
            <div className='w-full h-full'>
                <Grids className='py-10 col-span-full'>
                    <div className='p-4 md:p-10'>
                        <h1 className='text-start text-pretty text-[48px] md:text-[56px] lg:text-[102px] leading-[1.15]'>
                            Hello,
                            <br />
                            I am Ray.
                        </h1>
                    </div>
                </Grids>
                <Grids className='py-10 col-span-full'>
                    <div className='p-4 md:p-10 col-start-1'>
                        <p className='text-[#767676]'>
                            From a mixture of diverse cultures, people, and experiences, I was able to uncover the meaning of food.
                            It's never only about what goes in and out of your body. The laughters, joy, and great memories create unforgetable bonds with others. It's the ultimate tool of gathering people into the table. Since the noble era of table manners, traditions, and even rituals.
                            <br />
                            <br />
                            Ray's table shares ideas of how we can all joyfully gather and experience each other to the core.
                        </p>
                    </div>
                    <OptimizedImage
                        alt='dummy image'
                        src='https://images.unsplash.com/photo-1608731002187-d3448d224d18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        height={640}
                        width={640}
                        className='w-full h-full object-cover col-span-1 row-span-1 col-start-2'
                    />
                    <OptimizedImage
                        alt='dummy image'
                        src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        height={2048}
                        width={2048}
                        className='h-fit object-cover row-span-2 col-start-3'
                    />
                    <OptimizedImage
                        alt='dummy image'
                        src='https://images.unsplash.com/photo-1590437084089-9f5ae1500176?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        height={1440}
                        width={1440}
                        className='w-full h-full object-cover col-span-2 col-start-1'
                    />
                </Grids>
            </div>
            <Footer />
        </section>
    )
}

export default About 