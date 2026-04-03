import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vizeygavrfwbxjlxfyvq.supabase.co";
const supabaseKey = "sb_publishable_WnH55ELKtDuqxZn51UfBKg_DSBYf4hR";

export const supabase = createClient(supabaseUrl, supabaseKey);