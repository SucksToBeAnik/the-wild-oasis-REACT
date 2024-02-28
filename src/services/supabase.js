import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://hkfheksilbbusilljojy.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrZmhla3NpbGJidXNpbGxqb2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5ODcyMjAsImV4cCI6MjAyMDU2MzIyMH0.WyMxfI7dUpr-X6_Zy10ioE-iguCuUO6nO3Yb_O9hqDc"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;