// ============================================
// Supabase 클라이언트
// env(VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY) 가 모두 있을 때만 생성.
// 없으면 null → db 레이어가 localStorage 폴백 모드로 동작.
// ============================================

import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = (import.meta.env.VITE_SUPABASE_URL || 'https://hcmgdztsgjvzcyxyayaj.supabase.co')
const anonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw')

export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null

export const isSupabaseMode = (): boolean => supabase !== null
