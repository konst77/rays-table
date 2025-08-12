import React from 'react'
import Footer from '../components/Footer'
import { BottomNavbar } from '../components/bottom-nav'
import { MobileNav } from '../components/mobile-nav'
import Grids from '../components/grids'

function About() {
    return (
        <section>
            <BottomNavbar />
            <MobileNav /> 
            {/* Content section */}
            <div className='w-full h-full'>
                <Grids className=''>
                    <div>
                        <h1>
                            Hello,
                            <br />
                            I am Ray.
                        </h1>
                    </div>
                </Grids>
            </div>
            <Footer />
        </section>
    )
}

export default About 