# Project Showcase Admin Portal

An admin portal for an e-commerce store, built with React + Vite. Lets an administrator view products, search them, add new products, and update or delete existing ones.

## Features
- Landing page describing the store
- Product listing with live search
- Add new product (POST)
- View single product + edit price/stock (PATCH)
- Delete product (DELETE)
- Client-side routing across 4+ pages
- Shared product state via Context + custom hooks

## Tech Stack
- React (Vite)
- React Router
- json-server (simulated backend)
- Vitest + React Testing Library

## Setup

```bash
# install dependencies
npm install

# start the mock API (port 3001)
npx json-server --watch db.json --port 3001

# start the dev server (in a second terminal)
npm run dev

# run tests
npm run test
```

## Known Limitations
- No authentication — anyone can access the admin portal
- Data resets whenever db.json is reset (no real database)
- No image upload — products use placeholder/URL images only

## Team
- Ian — Routing & Landing
- Allan — Add Product Form
- Edger — Product Display, Search & Editing
- Victor — Data Services, Context, Git & Testing
