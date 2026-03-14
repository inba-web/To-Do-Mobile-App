📱 Todo App – React Native Real-Time Task Manager

A modern cross-platform Todo application built using React Native with Expo and powered by a real-time backend using Convex.
The application focuses on simplicity, performance, and real-time synchronization, enabling users to manage daily tasks efficiently across devices.

This project demonstrates modern mobile development workflows, including real-time data updates, scalable backend integration, and clean mobile UI architecture.

🌐 Application Overview

Platform: Mobile (Android / iOS)

Framework: React Native + Expo

Backend: Convex (Serverless Real-Time Backend)

Status: ✅ Functional Development Build

🧩 Tech Stack
📱 Frontend

React Native

Expo

TypeScript

React Hooks

Functional Components

☁️ Backend

Convex (Real-time database & server functions)

🛠️ Dev Tools / Tooling

Node.js

npm

Git & GitHub

Expo CLI

Environment Variables (.env)

✨ Core Features

📝 Create new tasks instantly

✅ Mark tasks as completed

❌ Delete tasks

🔄 Real-time synchronization with backend

⚡ Fast development using Expo

📱 Cross-platform mobile support

🏗️ Project Structure

```
TODO_RN/
│
├── app/
│   ├── components/
│   │   └── TodoItem.js
│   │
│   ├── screens/
│   │   └── HomeScreen.js
│   │
│   └── hooks/
│
├── convex/
│   ├── schema.ts
│   └── todos.ts
│
├── assets/
│
├── node_modules/        # Project dependencies (auto-generated)
│
├── .env                 # Environment variables
├── package.json         # Project metadata & dependencies
├── package-lock.json
└── README.md
```

⚙️ Environment Variables

Create a .env file and configure the following:
```
CONVEX_DEPLOYMENT=dev:your-deployment
EXPO_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
EXPO_PUBLIC_CONVEX_SITE_URL=https://your-project.convex.site
```
▶️ Running Locally
1️⃣ Clone the Repository
```
git clone git@github.com:inba-web/To-Do-Mobile-App.git
cd todo-app
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Start Development Server
```
npx expo start
```
4️⃣ Run the Application

You can run the app using:

📱 Expo Go (Mobile App)

🤖 Android Emulator

🍎 iOS Simulator
