// Supabase bağlantısını yöneten dosya
const URL = 'https://rovzbxstktopuewlyobo.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvdnpieHN0a3RvcHVld2x5b2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNjMxODMsImV4cCI6MjA5NzczOTE4M30.6mm2V4H4sNTEeRacV-sTygesF3VV0Q1GG68lYwAzsYg';

export const supabase = window.supabase.createClient(URL, KEY);
