-- Table Catégories
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null
);

-- Table Tâches
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
