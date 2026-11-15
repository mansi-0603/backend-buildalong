# 05 - Authentication

User registration with JWT stored in a cookie, and a protected route.

## What I learned
- Creating a user model with Mongoose
- Signing a token with `jsonwebtoken`
- Setting a cookie with `res.cookie()` and reading it with `cookie-parser`
- Protecting a route by verifying the token with `jwt.verify()`
- Debugging 401 errors by logging the real error in `catch`

## Structure
```
src/
├── controllers/auth.controller.js
├── db/
├── models/user.model.js
├── routes/auth.routes.js
├── routes/post.routes.js
└── app.js
server.js
```

## Endpoints
| Method | Route | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Create a user and set the `token` cookie |
| POST | `/api/post/create` | Protected route, needs a valid `token` cookie |

## Setup
Copy `.env.example` to `.env` and fill in your own values:
```
MONGO_URI=
JWT_SECRET=
```

## Run
```bash
npm install
npm run dev
```

## Next improvements
- Hash passwords with `bcrypt` before saving
- Add a login route
- Move the token check into a reusable middleware
