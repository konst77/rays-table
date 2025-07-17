'use server'

import { createClient } from '@/utils/supabase/server'
import { toast } from 'sonner'

export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        toast.error('Uh oh, either email or passwords is not correct. 😓');
    }
}