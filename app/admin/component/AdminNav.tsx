'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import OptimizedImage from '@/app/components/OptimizedImage'
import React from 'react'
import logo from '@/public/img/logo.jpg'
import Link from 'next/link';
import { AppWindow, Laptop, LogOut, MessageCircle } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';


const navigation = [
    {
        href: '/admin',
        name: 'Dashboard',
        icon: AppWindow
    },
    {
        href: '/admin/chat',
        name: 'Chat',
        icon: MessageCircle
    },
]

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
        <Sidebar variant='sidebar'>
      <SidebarHeader>
      <OptimizedImage
                alt='logo'
                height={40}
                width={80}
                src={logo.src}
                className='bg-none'
            />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel><p>Work</p></SidebarGroupLabel>
            <SidebarMenu>
                {navigation.map((items, index) => (
                    <SidebarMenuButton key={items.name} className='rounded-xl'>
                        <Link
                    href={items.href}
                    className='flex flex-row gap-2 items-center'
                    >
                        <items.icon className='w-4 h-4' />
                        <p>
                            {items.name}
                        </p>
                </Link>
                    </SidebarMenuButton>
                ))}
            </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div
                onClick={handleSignOut}
                className="w-full min-h-[64px] rounded-xl border border-[#f1f1f5] cursor-pointer items-center text-[#131313] p-4 px-8 flex flex-row gap-4 duration-300 hover:bg-[#e5e5e5]"
            >
                <LogOut className='w-4 h-4' />
                <p>
                    Sign Out
                </p>
            </div>
      </SidebarFooter>
    </Sidebar>
    )
}

export default AdminNav