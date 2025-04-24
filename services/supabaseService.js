const { createClient } = require('@supabase/supabase-js');

// Initialiser Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Créer le client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
