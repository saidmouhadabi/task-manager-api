require('dotenv').config();
const express = require('express');
const bodyParserMiddleware = require('./middleware/bodyParserMiddleware');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();

// Récupérer les variables d'environnement
const host = process.env.SERVER_HOST || 'localhost';  // Par défaut localhost si non défini dans .env
const port = process.env.SERVER_PORT || 3000;  // Par défaut 3000 si non défini dans .env

// Middleware
app.use(bodyParserMiddleware);

// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/analytics', analyticsRoutes);

// Route de base
app.get('/', (req, res) => {
  res.send('Welcome to API Task Management !');
});

// Démarrer le serveur avec l'host et le port définis dans le .env
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
