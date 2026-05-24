# 🔐 Encrypt App

A full-stack web application for securely hashing text using **bcrypt**, built with a React frontend and a Node.js/Express backend.

---

## 🚀 Features

- 🔐 Hash text with bcrypt (salt rounds: 12)
- ⚠️ 72-byte truncation warning (bcrypt limit)
- 🧠 Developer panel — visual breakdown of the hash structure (version, cost, salt, hash)
- 📋 Copy hash to clipboard
- 💡 Educational panel explaining how bcrypt works
- ✨ Smooth animations (Framer Motion)
- 🎨 Glassmorphism UI
- 📱 Fully responsive

---

## 🧩 Tech Stack

### Frontend
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- react-hot-toast

### Backend
- Node.js + Express + TypeScript
- bcryptjs
- Helmet, CORS, express-rate-limit
- Joi validation

---

## 📂 Project Structure

```
/
├── frontend/   → React app (Vite, port 5173)
└── backend/    → Express API (port 3030)
```

---

## ⚙️ Setup

### Backend

```bash
cd backend
cp .env.example .env   # set PORT and CLIENT_URL
npm install
npm run dev
```

### Frontend

```bash
cd frontend
cp .env.example .env   # set VITE_API_ENCRYPT_URL
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Backend (`backend/.env`)

| Variable     | Default                 | Description         |
|---|---|---|
| `PORT`       | `3030`                  | Express server port |
| `CLIENT_URL` | `http://localhost:5173` | Allowed CORS origin |

### Frontend (`frontend/.env`)

| Variable               | Example                             | Description               |
|---|---|---|
| `VITE_API_ENCRYPT_URL` | `http://localhost:3030/api/encrypt` | Full backend endpoint URL |

---

## 📡 API

### `POST /api/encrypt`

**Request body:**
```json
{ "text": "my password" }
```

**Response:**
```json
{ "msg": "ok", "text": "$2b$12$..." }
```

**Rate limit:** 20 requests / minute.

---

## 🌐 Deployment

| Service  | Platform |
|---|---|
| Frontend | Vercel   |
| Backend  | Render   |
