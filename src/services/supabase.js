import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pwhvnubavrnpjcbovsmp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3aHZudWJhdnJucGpjYm92c21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5NTI2NzIsImV4cCI6MjAxMzUyODY3Mn0.CozgPaziss15f8ZP5XdILeQP7g35A8wsaigbb0EXA6k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
