const { supabase } = require('../services/supabaseService');

// Endpoint pour les statistiques des tâches (complétées, en retard)
exports.getAnalytics = async (req, res) => {
  const { data, error } = await supabase
    .from('tasks')
    .select('status');

  if (error) return res.status(400).json({ error: error.message });

  const completedTasks = data.filter(task => task.status === 'terminée').length;
  const overdueTasks = data.filter(task => task.status === 'en retard').length;

  res.json({
    completedTasks,
    overdueTasks,
    totalTasks: data.length,
    completionRate: (completedTasks / data.length) * 100,
  });
};
