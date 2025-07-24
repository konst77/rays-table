'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import OptimizedImage from '@/app/components/OptimizedImage'
import { Button } from '@/components/ui/button'
import React from 'react'
import logo from '@/public/img/logo.jpg'
import Link from 'next/link';

function AdminNav() {

    const supabase = createClient()
    const router = useRouter();

    async function handleSignOut() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            alert('Failed to sign out: ' + error.message);
        } else {
            router.push('/');
        }
    }

    return (
        <div className='fixed top-0 w-full px-6 py-4 z-10 bg-black border-b border-[#131313] flex flex-row items-center justify-between'>
            <OptimizedImage
                alt='logo'
                height={40}
                width={80}
                src={logo.src}
                className='bg-none'
            />
            <Link
                href={'/admin/studio'}
            >
                <Button>
                    <p>
                        Sanity Studio
                    </p>
                </Button>
            </Link>

            <Button
                onClick={handleSignOut}
                className=""
            >
                <p>
                    Sign Out
                </p>
            </Button>
        </div>
    )
}

export default AdminNav