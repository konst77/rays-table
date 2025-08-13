import React from 'react'
import Footer from '../components/Footer'
import { BottomNavbar } from '../components/bottom-nav'
import { MobileNav } from '../components/mobile-nav'
import dummy from '@/public/img/dummy-photo.jpg'
import Grids from '../components/grids'

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
                    <div className='p-4 md:p-10'>
                        <p className='text-[#767676]'>
                            I was sent to the United States at 2007, camouflaged as a visit to my grandparents.
                            <br />
                            <br />
                            "Will you be okay without us son?" 
                            <br />
                            <br />
                            Imagine that's what you hear before you were left with your grandparents who you have never encountered before.
                            <br />
                            <br />
                            I obviously didn't even have the brain development to understand what that meant at the time.
                        </p>
                    </div>
                    <div className='p-4 md:p-10'>
                        <p className='text-[#767676]'>
                            Because I was never under the influence of my mother's cooking, it was my grandmother who created this interesting taste bud of mine.
                            <br />
                            <br />
                            She'd add a frozen veggie mix in a spaghetti sauce, add unheard ingredients because someone said it was healthy, or even create juices
                            that were horrifying. (Trust me, horrifying)
                            <br />
                            <br />
                            I don't know how many times I had to yuck trying to finish it because I felt bad for her. Until, I eventually had to tell her the truth.
                        </p>
                    </div>
                    <div className='p-4 md:p-10'>
                        <p className='text-[#767676]'>
                            She was furious with the fact that her efforts were neglected to keep us healthy.
                            <br />
                            <br />
                            But does food have to be one way or another? Why can't it be healthy, delicious, and cost effective?
                            <br />
                            <br />
                            This is the answer that I came up with. A story I can share, and the life that I have been surviving to.
                            <br />
                            <br />
                            This is Ray's Table.
                        </p>
                    </div>
                </Grids>
            </div>
            <Footer />
        </section>
    )
}

export default About 