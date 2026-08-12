# EduScholar – Backend & Database

EduScholar is a full-stack scholarship discovery platform developed using the MERN stack.

This repository contains the backend and database layer of the application, built with Node.js, Express.js, MongoDB, and Mongoose. It manages application data and provides REST API functionality used by the React frontend.

## Features

- RESTful API development
- MongoDB database integration
- Mongoose models and schema management
- CRUD operations
- Backend controllers and middleware
- Data validation and application logic
- Frontend, backend, and database integration
- Error handling and debugging
- API communication with the React frontend
- Scholarship data management

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- REST APIs
- Git
- GitHub

## My Contribution

I worked extensively on the backend and database integration of EduScholar.

My main responsibilities included designing and managing the MongoDB database, working with Mongoose models, integrating REST APIs, modifying and debugging backend code, and ensuring that the frontend, backend, and database communicated correctly.

I also worked across different parts of the application to resolve integration issues, improve data flow, and ensure the complete system functioned reliably.

## Application Architecture

The application follows a full-stack MERN architecture:

**React.js Frontend → REST APIs → Node.js/Express.js Backend → Mongoose → MongoDB**

This structure allows the frontend to communicate with backend API endpoints while MongoDB stores and manages application data.

## Frontend Repository

[EduScholar Frontend Repository](https://github.com/AsmaaTahir-hub/EduScholar-frontend-project-4)

## Installation

Clone the repository:

```bash
git clone https://github.com/AsmaaTahir-hub/EduScholar-backend-project-4.git
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project and configure the required environment variables.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
```

Never commit database passwords, connection credentials, API keys, or other sensitive information to GitHub.

## Run the Server

Run the backend using the script configured in `package.json`.

For example:

```bash
npm start
```

or, if the development script is configured:

```bash
npm run dev
```

## Related Repository

The frontend and backend repositories work together as one full-stack application.

**Frontend:** React.js, JavaScript, Axios  
**Backend:** Node.js, Express.js, REST APIs  
**Database:** MongoDB, Mongoose

## Project Type

Software Engineering Bootcamp – Full-Stack MERN Project
