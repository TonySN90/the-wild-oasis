import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ebrsmmdpgodncdqfmbxm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicnNtbWRwZ29kbmNkcWZtYnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0OTExMDgsImV4cCI6MjAyMzA2NzEwOH0.K1F6q5UQOU5r_nQXiuRShiKdcDwyGvP0DqbPtLQwHpc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
