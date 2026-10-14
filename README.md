# 🛍️ Haat — Mini E-commerce App

A multi-page e-commerce app built with **React (Vite)**, **React Router**, and **Tailwind CSS**. Features include product catalog, dynamic product pages, cart management, authentication, protected checkout, and 404 page.

![Status](https://img.shields.io/badge/Status-Completed-success)
![Day](https://img.shields.io/badge/12--Week--Roadmap-Day%206-blue)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)

---

## 🌟 Features

### Pages (8 Total)
- **Home** — Hero, featured products, categories with counts
- **Products** — All products with search, category filter, sort
- **Product Detail** — Dynamic route, quantity selector, related products
- **Cart** — Quantity update, remove, total, empty state
- **Checkout** — Address form, payment options, order summary
- **Login** — Email/password with validation
- **Register** — Full name, email, password, confirm password
- **404** — Branded not-found page

### Core Features
- **Routing** — Nested routes with shared Layout (Navbar + Footer)
- **Dynamic Routes** — `/products/:id` with `useParams`
- **URL as State** — Category filter via `useSearchParams`
- **Protected Routes** — Checkout requires login
- **Auth Flow** — Register, login, logout, persisted in localStorage
- **Cart Management** — Add, remove, quantity +/-, total, count
- **Form Validation** — Config-driven rules (required, pattern, minLength, matchWith)
- **Page Transitions** — Fade-in animation on route change
- **Responsive** — Mobile menu, adaptive grids
- **Empty States** — Cart, search, 404

---

## 🧠 React Router Concepts Practiced

| Concept | Where Used |
|---------|------------|
| **BrowserRouter** | `main.jsx` — wraps entire app |
| **Routes & Route** | `App.jsx` — 8 routes defined |
| **Nested Routes** | Layout route with `<Outlet />` |
| **Link** | Navbar, Footer, product cards |
| **NavLink** | Navbar with `isActive` styling |
| **useParams** | ProductDetail — `id` from URL |
| **useNavigate** | Login/Register/Checkout redirects |
| **useSearchParams** | Products — category filter in URL |
| **useLocation** | Layout — `key={pathname}` for transitions |
| **Navigate** | Redirect logged-in users away from auth pages |

---

## 🧠 Other Concepts Practiced

| Concept | Where Used |
|---------|------------|
| **Context API** | AuthContext, CartContext |
| **Custom Hooks** | `useLocalStorage` (from Day 5) |
| **Form Validation** | Config-driven rules in Login/Register |
| **Controlled Inputs** | All forms |
| **Conditional Rendering** | Cart empty state, auth buttons |
| **Lists with Keys** | Products, cart items |
| **useReducer-like State** | Cart operations in context |
| **Reusable Layouts** | `AuthLayout` for Login/Register |
| **Component Composition** | `ProductCard`, `Layout`, `AuthLayout` |

---

## 🛠️ Tech Stack

- **Framework:** React 19 (Vite)
- **Routing:** React Router 7
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Fonts:** Bricolage Grotesque + Instrument Sans (Google Fonts)
- **State:** Context API + localStorage
- **Persistence:** localStorage (cart, users, currentUser)

---

## 📂 Project Structure
ecommerce-routing/
├── src/
│ ├── App.jsx # Routes definition
│ ├── App.css # Global styles + animations
│ ├── index.css # Tailwind imports
│ ├── main.jsx # BrowserRouter + Providers
│ ├── components/
│ │ ├── AuthLayout.jsx # Login/Register shared layout
│ │ ├── Footer.jsx # Site footer
│ │ ├── Layout.jsx # Navbar + Outlet + Footer
│ │ ├── Navbar.jsx # Navigation + cart badge
│ │ └── ProductCard.jsx # Product card with add-to-cart
│ ├── context/
│ │ ├── AuthContext.jsx # Users, currentUser, login/logout
│ │ └── CartContext.jsx # Cart items, totals, operations
│ ├── data/
│ │ └── index.js # Products array
│ ├── hooks/
│ │ └── useLocalStorage.js # localStorage as React state
│ └── pages/
│ ├── Home.jsx # Hero + featured + categories
│ ├── Products.jsx # Grid + search + filter + sort
│ ├── ProductDetail.jsx # Dynamic route + related
│ ├── Cart.jsx # Cart items + summary
│ ├── Checkout.jsx # Address + payment + order
│ ├── Login.jsx # Sign in form
│ ├── Register.jsx # Sign up form
│ └── NotFound.jsx # 404 page
├── index.html
├── package.json
└── vite.config.js


---

## 🎨 Design Highlights

- **Brand:** `Haat.` — a small store for everyday things
- **Typography:** Bricolage Grotesque (display) + Instrument Sans (body)
- **Colors:** Stone palette + `#3446f0` (electric blue) + `#ff5b3a` (orange) + `#ffd23f` (yellow) + `#16a37f` (green)
- **Product Cards:** Color-block "tone" instead of images (demo-friendly)
- **Animations:**
  - `page-enter` — fade-in on route change
  - `card-rise` — staggered product grid entrance
  - `badge-pop` — cart count pulse
  - `row-exit` — cart item removal
- **Layout:** Sticky navbar, editorial grid, generous whitespace

---

## 🚀 How to Run


# Clone
git clone (https://github.com/imthatrehan/ecommerce-routing.git)
cd ecommerce-routing

# Install
npm install

# Dev server
npm run dev

# Build
npm run build
Open http://localhost:5173# ecommerce-routing
