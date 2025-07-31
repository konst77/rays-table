'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import OptimizedImage from '@/app/components/OptimizedImage'
import { Button } from '@/components/ui/button'
import React from 'react'
import logo from '@/public/img/logo.jpg'
import Link from 'next/link';
import { LogOut } from 'lucide-react';

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
        <div className='top-0 w-[400px] h-screen z-10 bg-[#222] border-b border-[#131313] flex flex-col items-start justify-between'>
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

            <div
                onClick={handleSignOut}
                className="w-full min-h-[64px] border-t border-[#333] cursor-pointer items-center text-white p-4 px-8 flex flex-row gap-4 duration-300 hover:bg-[#333]"
            >
                <LogOut className='w-4 h-4' />
                <p>
                    Sign Out
                </p>
            </div>
        </div>
    )
}

export default AdminNav