# Oliver & Sarah Restaurant App

A full-stack restaurant website for a modern dining brand, built with React + Vite on the frontend and Express + Supabase on the backend. The app showcases the restaurant experience, includes a contact form, and allows reservation submissions to be stored and emailed.

## Overview

This project is designed as a polished restaurant landing and information site with:

- A hero section and brand-focused homepage
- Menu category pages
- A contact page with a validated message form
- Reservation booking flow
- Backend processing for contact and reservation requests
- Data persistence in Supabase
- Email notifications with Resend

## Tech Stack

### Frontend
- React 19
- Vite
- TypeScript
- React Router
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Supabase JS SDK
- Resend API
- CORS
- dotenv

## Project Structure

```text
Restaurant-App/
├── back-end/
│   ├── config/
│   │   └── supabase.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── reservations.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── front-end/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   ├── contactFormSubmit.ts
│   │   │   └── reservationForm.ts
│   │   ├── components/
│   │   │   └── ScrollReveal.tsx
│   │   ├── pages/
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── home.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── products.tsx
│   │   │   └── menus/
│   │   │       ├── delivery.tsx
│   │   │       ├── desserts.tsx
│   │   │       ├── dining.tsx
│   │   │       └── drinks.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── README.md
```

## Frontend Features

### Main app routes
The app uses React Router to manage these routes:

- `/` — home page with restaurant hero and brand overview
- `/contact` — contact form page
- `/menus/delivery` — delivery menu page
- `/menus/dining` — dining menu page
- `/menus/drinks` — drinks menu page
- `/menus/desserts` — dessert menu page

### UI behavior
- Animated sections using a custom `ScrollReveal` component
- Responsive navigation drawer
- Reservation modal and contact form validation
- Brand styling based on warm, premium restaurant aesthetics

## Backend Functionality

The backend is a simple Express API that exposes two main endpoints:

### 1) Contact form submissions
Endpoint: `POST /api/contact`

Validates:
- name
- email
- message

Actions:
- inserts the submission into the `contact_submissions` table in Supabase
- sends an email via Resend to the configured recipient

### 2) Reservation submissions
Endpoint: `POST /api/reservations`

Validates:
- fullName
- date
- time
- partySize
- phoneOrEmail

Actions:
- inserts a reservation record into the `reservations` table in Supabase

## API and Data Flow

### Contact form flow
1. User fills out the contact form in the frontend.
2. Frontend sends a request to the backend at `/api/contact`.
3. Backend validates input.
4. Data is stored in Supabase.
5. A customer-facing email is sent using Resend.

### Reservation flow
1. User opens the reservation modal or booking form.
2. Frontend sends request to `/api/reservations`.
3. Backend validates the request payload.
4. Reservation is inserted into Supabase.

## Environment Variables

The backend relies on environment variables stored in `back-end/.env`.

Example:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
RESEND_API_KEY=your_resend_api_key
TO_EMAIL=recipient@example.com
FRONTEND_URL=http://localhost:5173
PORT=5000
```

Important notes:
- `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are required for database access.
- `FRONTEND_URL` is used for CORS configuration and email links.
- `TO_EMAIL` is the recipient address for contact form emails.
- The Supabase client is initialized server-side only.

## Setup Instructions

### 1) Install backend dependencies

```bash
cd back-end
npm install
```

### 2) Install frontend dependencies

```bash
cd front-end
npm install
```

### 3) Run the backend

```bash
cd back-end
node server.js
```

If you want automatic restart during development:

```bash
cd back-end
npx nodemon server.js
```

### 4) Run the frontend

```bash
cd front-end
npm run dev
```

The frontend typically runs at:
- http://localhost:5173

The backend typically runs at:
- http://localhost:5000

## Development Notes

- Vite is configured for the React frontend and serves the app in development mode.
- Express handles API requests and cross-origin restrictions.
- The frontend uses fetch requests to the API endpoints.
- CORS is configured to accept the local Vite frontend and a production origin.

## Common Files

### Frontend API files
- `front-end/src/api/contactFormSubmit.ts` — sends the contact form payload to the backend
- `front-end/src/api/reservationForm.ts` — sends reservation data to the backend

### Backend routes
- `back-end/routes/contact.js` — validates and saves contact submissions
- `back-end/routes/reservations.js` — validates and saves reservations

### Supabase configuration
- `back-end/config/supabase.js` — initializes a server-side Supabase client

## Potential Improvements

- Add authentication for admin management
- Add a proper admin dashboard for reservation and contact submissions
- Add database schema documentation
- Add automated tests for API validation and frontend interactions
- Add deployment scripts for Vercel and Render or Railway

## Summary

This app is a modern restaurant website with a customer-facing landing page and backend processing for contact and reservation submissions. It combines a React frontend, Express API, Supabase data persistence, and Resend email delivery to deliver a clean end-to-end experience for a restaurant business.
