import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tkzeyvrfjrfjurdyvthu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRremV5dnJmanJmanVyZHl2dGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3MzAwOTAsImV4cCI6MjAzODMwNjA5MH0.MPCNv8V1zyxxGami9Uj53zolWA3DIL8BQdro_GjrkFU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
