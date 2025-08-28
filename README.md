# ChatApp

A **real-time chat application** built with **MERN stack + Socket.io**, featuring secure authentication, text & image messaging, and a modern responsive UI.  

---

## 🚀 Features  

- 🔐 **Authentication** – Secure login & signup using **JWT tokens**  
- 💬 **Real-time messaging** – Powered by **Socket.io**  
- 🖼 **Image sharing** – Upload & send images via **Cloudinary**  
- 🎨 **Modern UI** – Built with **React + Tailwind CSS**  
- 🔔 **Toast Notifications** – Instant feedback using **React-Toastify**  
- 📱 **Responsive Design** – Works smoothly on desktop & mobile  

---

## 🛠 Tech Stack  

**Frontend**  
- React  
- Tailwind CSS  
- React-Toastify  
- Socket.io-client  

**Backend**  
- Node.js  
- Express.js  
- MongoDB  
- Socket.io  
- Cloudinary (for image storage)  
- JWT (for authentication)  

---

## 📦 Installation  

Clone the repository:  

```bash
git clone https://github.com/Mayank-Pandey-Ji/chatApp.git
cd chatApp
```

### Backend Setup  
```bash
cd server
npm install
```

Create a `.env` file in `server/` and add:  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start backend server:  
```bash
npm start
```

### Frontend Setup  
```bash
cd client
npm install
npm run dev
```

Now open `http://localhost:5173` in your browser 🎉  

---

## ⚡ Usage  

1. Create an account or log in.  
2. Start a new chat with any registered user.  
3. Send **text or images** instantly in real-time.  

