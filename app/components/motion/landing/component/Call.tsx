'use client'

import { Button } from '@/components/ui/button';
import React from 'react'

function Call() {
    const scrollToSection = () => {
        const section = document.getElementById('newsletter');
        section && window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    };

    return (
        <Button
            variant={'ghost'}
            size={'sm'}
            onClick={scrollToSection}
            className='bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 text-white hover:text-white flex flex-row items-center gap-1 px-3 py-2 rounded-[8px] overflow-hidden'
        >
            <p className='z-10'>
                Join our newsletter
            </p>
        </Button>
    )
}

export default Call