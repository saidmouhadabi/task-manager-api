2. Install dependencies
Run the following command to install the necessary dependencies:

bash
Copier
Modifier
npm install
3. Set up environment variables
Create a .env file in the root directory by copying the .env.example file provided:

bash
Copier
Modifier
cp .env.example .env
Now, open the .env file and replace the placeholder values with your actual values from Supabase:

ini
Copier
Modifier
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SERVER_HOST=localhost
SERVER_PORT=3000
SUPABASE_URL: The URL for your Supabase project (find it in the Supabase dashboard).

SUPABASE_ANON_KEY: The public anon key for your Supabase project (available in the Supabase dashboard).

SERVER_HOST: The host for your server (default: localhost).

SERVER_PORT: The port on which the server will run (default: 3000).

4. Set up the Database (Supabase)
Go to your Supabase dashboard.

Create a new project if you haven’t already.

In the SQL Editor of Supabase, run the following migration SQL to create the necessary tables for tasks and categories.

migration.sql
sql
Copier
Modifier
-- Table Categories
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null
);

-- Table Tasks
create table tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  status text check (status in ('pending', 'in_progress', 'done', 'overdue')) default 'pending',
  due_date date,
  user_id uuid references auth.users(id),
  category_id uuid references categories(id),
  created_at timestamp default now()
);
5. Run the application
Once everything is set up, you can start the server using:

bash
Copier
Modifier
npm start
The application will run on http://localhost:3000.

API Endpoints
1. Authentication
POST /auth/signup: Registers a new user.

Request Body:

json
Copier
Modifier
{
  "email": "user@example.com",
  "password": "password123"
}
Response:

json
Copier
Modifier
{
  "user": { ...user data... }
}
POST /auth/login: Logs in a user.

Request Body:

json
Copier
Modifier
{
  "email": "user@example.com",
  "password": "password123"
}
Response:

json
Copier
Modifier
{
  "user": { ...user data... }
}
2. Tasks
POST /tasks: Create a new task.

Request Body:

json
Copier
Modifier
{
  "title": "Task 1",
  "description": "Task description",
  "due_date": "2023-12-31",
  "category_id": "category_uuid",
  "user_id": "user_uuid"
}
GET /tasks: Get all tasks.

GET /tasks/:id: Get a task by its ID.

PUT /tasks/:id: Update a task.

DELETE /tasks/:id: Delete a task.

3. Categories
POST /categories: Create a new category.

Request Body:

json
Copier
Modifier
{
  "name": "Category 1"
}
GET /categories: Get all categories.