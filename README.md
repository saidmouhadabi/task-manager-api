# **Task Management API with Supabase Auth**

## **Description**
Task management API with Supabase authentication, providing:
- User registration and login
- CRUD operations for tasks
- Task status tracking
- Performance analytics

## **Technologies**
- Backend: Node.js + Express
- Database: PostgreSQL (via Supabase)
- Authentication: Supabase Auth + JWT
- ORM: Prisma (optional)

## **Prerequisites**
| Component       | Download/Link                     |
|-----------------|-----------------------------------|
| Node.js (v14+)  | [https://nodejs.org/](https://nodejs.org/) |
| Supabase Account | [https://app.supabase.io/](https://app.supabase.io/) |
| PostgreSQL      | Included with Supabase            |

## **Installation**
```bash
# 1. Clone the repository
git clone https://github.com/yourusername/task-management-api.git
cd task-management-api

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env