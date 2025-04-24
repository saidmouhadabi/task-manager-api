# Task Management API

## Overview

The **Task Management API** is a backend service designed for managing tasks, handling user authentication, and providing analytics for task statuses (such as completed and overdue tasks). This API allows users to register, log in, and perform CRUD operations on tasks. Additionally, it offers task-related statistics.

This API is built using **Node.js**, **Express**, and **Supabase** to handle authentication and data storage.

## Features

- **User Authentication**: Allows users to register and log in with email and password.
- **Task Management**: Perform CRUD operations on tasks.
- **Task Analytics**: View statistics on task statuses (e.g., completed, overdue).
- **Environment Configuration**: Easily configurable server host and port via environment variables.

## Tech Stack

- **Node.js**: JavaScript runtime used for building the backend API.
- **Express**: Web framework for Node.js used to build the RESTful API.
- **Supabase**: Open-source backend-as-a-service platform used for user authentication and database management.
- **Body-Parser**: Middleware used for parsing incoming request bodies.

## Prerequisites

To run this project locally, make sure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager): Comes bundled with Node.js.

## Installation and Setup

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/yourusername/task-management-api.git
cd task-management-api
