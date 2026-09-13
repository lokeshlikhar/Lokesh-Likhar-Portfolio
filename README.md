# Lokesh Likhar Portfolio

A modern, responsive portfolio website built with React and Vite. Features dark mode, form validation, and Web3Forms integration for contact messages.

## Features

- **Dark/Light Theme** - Toggle with localStorage persistence
- **Responsive Design** - Mobile-first with hamburger menu
- **Form Validation** - Email and name validation using validator.js
- **Contact Form** - Web3Forms integration for email delivery
- **Single Page** - Smooth scrolling navigation

## Tech Stack

- React 19.2.0
- Vite 8.1.5
- Lucide React (icons)
- Validator.js (form validation)
- CSS custom properties (theming)

## Run locally

```sh
npm install
cp .env.example .env
npm run dev
```

Paste your Web3Forms access key into `.env` before sending real messages. Open the URL Vite prints, normally `http://localhost:5173`.

## Production builds

```sh
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service (Netlify, Vercel, GitHub Pages, Render, etc.).

## Environment Variables

- `VITE_WEB3FORMS_ACCESS_KEY` - Your Web3Forms access key for contact form

## Deployment

### Render (Recommended)

1. Push to GitHub
2. Create Static Site on Render
3. Root Directory: `.` (root)
4. Build Command: `npm run build`
5. Publish Directory: `dist`
6. Add `VITE_WEB3FORMS_ACCESS_KEY` environment variable

### Other Platforms

Deploy the `dist/` folder to any static hosting service.
