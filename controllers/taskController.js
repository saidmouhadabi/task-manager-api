const { supabase } = require('../services/supabaseService');

// Route GET pour récupérer toutes les tâches
exports.getAllTasks = async (req, res) => {
  const { data, error } = await supabase.from('tasks').select('*');

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// Route POST pour ajouter une tâche
exports.addTask = async (req, res) => {
  const { title, description } = req.body;

  const { data, error } = await supabase
    .from('tasks')
    .insert([{ title, description, status: 'en attente' }]);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// Route PUT pour mettre à jour une tâche
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const { data, error } = await supabase
    .from('tasks')
    .update({ title, description, status })
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// Route DELETE pour supprimer une tâche
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase.from('tasks').delete().eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// Route PUT pour changer le statut d'une tâche
exports.updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const { data, error } = await supabase
    .from('tasks')
    .update({ status })
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};
