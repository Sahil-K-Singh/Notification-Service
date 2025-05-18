# Notification-Service

# 📣 Notification Service

A minimal Node + Express + MongoDB micro-service that lets you:

| Endpoint                       | Method | Description                               |
|--------------------------------|--------|-------------------------------------------|
| `/notification`                | POST   | Send an Email / SMS / In-App notification |
| `/user/{id}/notification`      | GET    | List every notification sent to a user    |



---

## 🛠 Tech Stack
- **Node.js / Express 4**
- **MongoDB** with **Mongoose 7**
- Dummy `emailservice`, `smsservice`, `inAppservice` that just `console.log` (swap with real providers later)

---

## 🚀 Quick Start

```bash
# 1. Clone & install
git clone <your-repo>.git
cd notification-service
npm install

# 2. Make sure MongoDB is running locally
mongod

# 3. Start the API
node app.js          # default port 3000
