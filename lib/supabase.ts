import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xtngufssvgqfsgspdzqk.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);