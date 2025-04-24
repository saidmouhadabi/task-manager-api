const { supabase } = require('../services/supabaseService');

// Route d'inscription (signup)
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });
  res.json(user);
};

// Route de connexion (login)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });
  res.json(user);
};
