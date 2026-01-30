
# Lendsqr Frontend

This project is a frontend implementation for the **Lendsqr Frontend Engineering Assessment**, built using **Next.js (App Router)**.

The application displays a list of users and detailed user profiles based on data fetched from a mock API.
The focus is on **code structure, UI clarity, routing, data fetching, and correctness**, rather than backend logic.

---

##  Live Demo

 https://`<candidate-name>`-lendsqr-fe-test.vercel.app

##  Repository

https://github.com/jomoCode/lendsqr-fe-test

---

##  Tech Stack

* **Next.js 13+ (App Router)**
* **React**
* **TypeScript**
* **TanStack Query (React Query)** — data fetching & caching
* **SCSS / CSS Modules**
* **Mock API (mockapi.io)**
* **Vercel** (Deployment)

---

##  Project Structure

```
app/
├── auth/                     # Login page
├───── page.tsx              # Login page

├── dashboard/
│   └── page.tsx              # Dashboard
├──└── users/
│         └── page.tsx        # Users list
│   
│       	               # User details
├── components/               # Reusable UI components
├── services/                 # API requests
├── types/                    # TypeScript types/interfaces
├── utils/                    # Helpers (cookies, formatting, etc.)
└── styles/                   # Global and module styles
```

---

##  Features Implemented

* Login UI (mocked authentication)
* Users list fetched from a mock API
* User details page with dynamic routing
* Server-safe handling of browser APIs
* **Efficient client-side data fetching with TanStack Query**
* Request caching and background refetching
* Responsive dashboard layout
* Clean, professional UI consistent with Lendsqr design expectations

---

##  Data Fetching Strategy

* **TanStack Query** is used for:

  * API state management
  * Caching and request deduplication
  * Loading and error state handling
* Data is fetched from a **mock API**
* No backend or persistent authentication

---

##  SSR Considerations

* Browser-only APIs (e.g. `localStorage`) are accessed safely
* Client components are explicitly marked using `"use client"`
* Query logic runs only in client components where required

---

##  Getting Started

### Clone the repository

```bash
git clone https://github.com/jomoCode/lendsqr-fe-test.git
cd lendsqr-fe-test
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

---

## Deployment

The application is deployed on **Vercel** :


---

## Notes

* Frontend-only application
* API data is mocked and assumed stable
* Emphasis on **readability, correctness, and maintainability**
* TanStack Query chosen to model real-world data fetching patterns

---

## Author

**Mogbolu john-johanan**
Frontend Engineer

