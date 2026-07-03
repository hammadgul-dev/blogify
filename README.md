# 📝 Blogify

> A full-stack blogging platform built with the MERN stack — create, manage, and publish blogs with AI-powered tools, Google OAuth, and a clean admin dashboard.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-blogify--frontend--blue--seven.vercel.app-blue?style=for-the-badge&logo=vercel)](https://blogify-frontend-blue-seven.vercel.app)
<br/>
[![GitHub](https://img.shields.io/badge/GitHub-hammadgul--dev%2Fblogify-black?style=for-the-badge&logo=github)](https://github.com/hammadgul-dev/blogify)

---

---

## 🖼️ Screenshot

<img src="./Frontend/public/Blogify Img.PNG" />

---

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure signup, login & protected routes
- 🌐 **Google OAuth** — One-click Google sign-in via Passport.js
- 🤖 **AI-Powered Tools** — Auto-generate blog descriptions & thumbnails using Groq AI
- 🖼️ **Cloudinary Integration** — Cloud-based image upload & storage
- 📝 **Rich Blog Management** — Add, edit, publish/unpublish, and delete blogs
- 🗑️ **Trash Bin** — Soft delete with restore & permanent delete options
- 💬 **Comment System** — Add, approve, and moderate comments
- 🌙 **Dark / Light Mode** — Theme toggle with Redux persistence
- 📱 **Fully Responsive** — Works on all screen sizes
- ⚡ **TanStack Query** — Efficient data fetching & caching

---

---

## 🛠️ Tech Stack

### Frontend

| Tech            | Usage                  |
| --------------- | ---------------------- |
| React 19        | UI Library             |
| Vite            | Build Tool             |
| React Router v7 | Client-side Routing    |
| Redux Toolkit   | State Management       |
| TanStack Query  | Server State & Caching |
| CSS Modules     | Scoped Styling         |

### Backend

| Tech                | Usage                     |
| ------------------- | ------------------------- |
| Node.js + Express   | REST API                  |
| MongoDB + Mongoose  | Database                  |
| JWT                 | Authentication            |
| Passport.js         | Google OAuth              |
| Multer + Cloudinary | File Uploads              |
| Groq SDK            | AI Description Generation |
| cloudflare          | AI Image Generation       |
| Helmet + CORS       | Security                  |

---

---

## 📁 Project Structure

```
blogify/
├── Backend/
│   ├── config/         # DB, env, passport config
│   ├── controllers/    # Route handlers
│   ├── middleware/     # Auth middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # Express routes
│   ├── server.js       # Entry point
│   └── vercel.json     # Vercel deployment config
│
└── Frontend/
    ├── src/
    │   ├── Admin/      # Admin dashboard pages & components
    │   ├── Components/ # Shared components
    │   ├── Pages/      # Public pages
    │   ├── Redux/      # Store & slices
    │   ├── helper/     # API fetch helper
    │   └── Routes.jsx  # App routes
    └── vercel.json     # SPA routing fix
```

---

---

## 🔗 API Routes

| Method | Route                             | Description             |
| ------ | --------------------------------- | ----------------------- |
| POST   | `/auth/signup`                    | Register new user       |
| POST   | `/auth/login`                     | Login user              |
| GET    | `/auth/verify`                    | Verify JWT token        |
| GET    | `/auth/google`                    | Google OAuth login      |
| GET    | `/auth/google/callback`           | Google OAuth callback   |
| POST   | `/add-blog/add`                   | Create new blog         |
| POST   | `/add-blog/generateDescription`   | AI generate description |
| POST   | `/add-blog/generateThumbnail`     | AI generate thumbnail   |
| GET    | `/blog/getPublicBlogs`            | Get all public blogs    |
| GET    | `/blog/getAdminBlogs`             | Get admin blogs         |
| GET    | `/blog/getBlogById/:id`           | Get single blog         |
| PUT    | `/blog/updateBlog/:id`            | Update blog             |
| DELETE | `/blog/deleteBlog/:id`            | Move to trash           |
| PATCH  | `/blog/togglePublish/:id`         | Toggle publish status   |
| GET    | `/trash/getTrashBlogs`            | Get trashed blogs       |
| POST   | `/trash/restoreBlog/:id`          | Restore blog            |
| DELETE | `/trash/permanentDeleteBlog/:id`  | Permanently delete      |
| POST   | `/comment/addComment`             | Add comment             |
| GET    | `/comment/getComments/:id`        | Get blog comments       |
| DELETE | `/comment/deleteComment/:id`      | Delete comment          |
| PATCH  | `/comment/approveAllComments/:id` | Approve all comments    |

---

---

## 🚀 Local Setup

```bash
# Clone the repo
git clone https://github.com/hammadgul-dev/blogify.git
cd blogify

# Backend setup
cd Backend
npm install
cp .env.example .env   # Fill in your env vars
node server.js

# Frontend setup (new terminal)
cd Frontend
npm install
npm run dev
```

---

---

## 🌐 Deployment

Both frontend and backend are deployed on **Vercel**.

- Frontend: [blogify-frontend-blue-seven.vercel.app](https://blogify-frontend-blue-seven.vercel.app)
- Backend: [blogify-eta-sable.vercel.app](https://blogify-eta-sable.vercel.app)

---

---
