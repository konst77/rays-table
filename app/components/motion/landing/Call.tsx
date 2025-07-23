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
            onClick={scrollToSection}
        >
            <p>
                Join our newsletter
            </p>
        </Button>
    )
}

export default Call