const SUPABASE_URL = "https://vnkipuhkpwcjdjxxrpef.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_aFO8c5S7Lt3L2R1veNSJaQ_RYGsPQID";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase подключен");
