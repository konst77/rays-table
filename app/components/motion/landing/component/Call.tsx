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
            variant={'default'}
            onClick={scrollToSection}
            className='bg-orange-500 rounded-xl hover:bg-orange-700'
        >
            <p>
                Join our newsletter
            </p>
        </Button>
    )
}

export default Call