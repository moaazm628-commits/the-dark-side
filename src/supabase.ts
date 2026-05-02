import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fuzeppjtsbdyfaemyuwj.supabase.co'
const supabaseKey = 'sb_publishable_K1wn-09KN5QTktpQoEHAWA_ddO0tcjq'

export const supabase = createClient(supabaseUrl, supabaseKey)