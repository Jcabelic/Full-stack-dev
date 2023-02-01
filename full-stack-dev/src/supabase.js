/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hmnofguqmdluxveozuhz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtbm9mZ3VxbWRsdXh2ZW96dWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5MTQzODMsImV4cCI6MTk5MDQ5MDM4M30.pwTg8TGCVvCJFKc4sdkHRZz97nralaPWQAIuizDjrp4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
