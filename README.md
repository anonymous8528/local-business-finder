# Local Business Finder 🚀

A minimal **MERN stack** (MongoDB, Express.js, React, Node.js) application for discovering local businesses. It features a simple backend API to store and retrieve business data (name and address) from MongoDB, and a responsive frontend built with React, Vite, and Tailwind CSS to display the businesses in a styled grid.

This project is intentionally lightweight—no authentication, advanced routing, or complex features—to get you up and running quickly. It's perfect as a starter for full-stack development.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18%2B-blue.svg)](https://reactjs.org)
  
*(Replace with actual screenshot: A clean page with a header and grid of business cards on a gray background.)*

## Features
- **Backend**: Express server with MongoDB integration via Mongoose. Seeds dummy data (3 businesses) on startup.
- **Frontend**: React app that fetches and displays businesses. Responsive design with Tailwind CSS (grid layout, cards).
- **API Endpoint**: `GET /businesses` returns JSON array of businesses.
- **Error Handling**: Shows loading spinner and fetch errors.
- **Local Setup**: Runs on `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## Tech Stack
- **Frontend**: React 18+, Vite (build tool), Tailwind CSS (styling)
- **Backend**: Node.js, Express.js, Mongoose (MongoDB ORM), CORS, dotenv
- **Database**: MongoDB (local instance)
- **Tools**: npm, PowerShell (for setup), Git (version control)

## Prerequisites
Before setup, ensure you have:
- **Node.js** (v18+): Download from [nodejs.org](https://nodejs.org). Verify: `node --version` and `npm --version`.
- **MongoDB**: Community Edition (local). Download from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community). Install and start with `mongod` (runs on port 27017).
  - Alternative: Use MongoDB Atlas (free cloud tier) and update the connection string in `.env`.
- **Git**: For cloning. Download from [git-scm.com](https://git-scm.com).
- **PowerShell** (Windows) or Terminal (macOS/Linux): For commands.
- **VS Code** (optional): For editing files.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/anonymous8528/local-business-finder.git
   cd local-business-finder
