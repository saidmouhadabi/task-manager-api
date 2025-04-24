# **Task Management API with Supabase Auth**

## **Description**
API de gestion de tâches avec authentification via Supabase, permettant :
- L'inscription et la connexion des utilisateurs
- La gestion CRUD des tâches
- Le suivi des statuts des tâches
- L'analyse des performances

## **Technologies**
- Backend : Node.js + Express
- Base de données : PostgreSQL (via Supabase)
- Authentification : Supabase Auth + JWT
- ORM : Prisma (optionnel)

## **Prérequis**
| Composant       | Lien/Lien de téléchargement       |
|-----------------|-----------------------------------|
| Node.js (v14+)  | [https://nodejs.org/](https://nodejs.org/) |
| Compte Supabase | [https://app.supabase.io/](https://app.supabase.io/) |
| PostgreSQL      | Inclus avec Supabase              |

## **Installation**
```bash
# 1. Cloner le dépôt
git clone https://github.com/yourusername/task-management-api.git
cd task-management-api

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement
cp .env.example .env