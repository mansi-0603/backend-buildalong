# 03 - Notes Creation

A simple notes API to practice CRUD operations.

## What I learned
- Creating, reading, updating and deleting notes
- Structuring routes and using the right status codes
- Testing each route in Postman

## Endpoints
| Method | Route | Purpose |
|---|---|---|
| POST | `/notes` | Create a note |
| GET | `/notes` | Get all notes |
| PATCH | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

## Run
```bash
npm install
node server.js
```
