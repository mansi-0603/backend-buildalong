# 04 - Mongoose

Connecting the notes API to a real MongoDB database.

## What I learned
- Connecting to MongoDB with `mongoose.connect()`
- Defining a schema and model
- Saving data with `create`, and reading it with `find` and `findOne`
- Keeping the connection string in `.env`

## Setup
Copy `.env.example` to `.env` and fill in your value:
```
MONGO_URI=your_mongodb_connection_string
```

## Run
```bash
npm install
npm run dev
```
