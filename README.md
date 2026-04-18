# BlogVista — MEAN Stack Blog Post Viewer

A beautiful, simple blog post viewer built with the MEAN stack (MongoDB, Express, Angular, Node.js). 
This project displays a list of pre-defined blog posts in a modern, red-themed UI with expandable cards.

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

## How to Run Locally

Follow these exact steps to run the project on your local device:

### 1. Clone the repository and navigate into it
```bash
git clone https://github.com/Omar-Lash1n/basic-blog-post-viewer-mean-stack.git
cd basic-blog-post-viewer-mean-stack
```

### 2. Install dependencies for both Backend and Frontend
First, install the backend dependencies in the root folder:
```bash
npm install
```
Then, install the frontend dependencies in the client folder:
```bash
npm run client:install
```

### 3. Start the application
You can start both the backend server and the frontend Angular app simultaneously using the following command:
```bash
npm run dev
```
*(This command will automatically open your default browser to the correct URL)*

Alternatively, if you want to run them separately:
- **Start Backend:** `npm start` (Runs on http://localhost:3000)
- **Start Frontend:** `npm run client:dev` (Runs on http://localhost:4200)

## Accessing the App

Once both servers are running, click the link below to view the app:
**[http://localhost:4200](http://localhost:4200)**

## Tech Stack
- **Frontend:** Angular 18+, Vanilla CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Note: The app currently uses static in-memory data, so a running MongoDB instance is not required to use the app).