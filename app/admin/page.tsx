'use client';

import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import NewsletterGenerator from './component/NewsletterGenerator';

function page() {
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
        <div>
            <NewsletterGenerator />
            <Button
                onClick={handleSignOut}
                className=""
            >
                Sign Out
            </Button>
        </div>
    )
}

export default page