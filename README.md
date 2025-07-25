
---

# 🎬 Movie App

A sleek **React**-powered TV streaming web app that lets you explore featured movies and trending videos with an intuitive sidebar menu and smooth video playback.

---

## 🚀 Project Overview

This app is designed to provide a TV-like browsing experience on the web. Built with React and Tailwind CSS, it features:

* A dynamic main menu with icons and hover animations
* A main featured movie block with video playback support
* A horizontally scrollable "Trending Now" carousel
* Persistent user preferences using session storage

---

## ✨ Features

### 🧭 Main Menu

* Vertical sidebar with icons: Search, Home, TV Shows, Movies, Genres, Watch Later
* Expands on hover with smooth animation and 80% background opacity
* Displays user profile info and additional options (Language, Get Help, Exit) in expanded state

### 🎞️ Featured Movie Section

* Displays latest featured movie with:

  * Background cover image or playing video after selection
  * Category badge (e.g. Movie)
  * Transparent PNG movie logo
  * Release year, MPA rating, duration info
  * Short descriptive text
  * Two primary buttons: Play & More Info
* Clicking a trending movie updates this section with a 2-second delay before video playback starts

### 📺 Trending Now Carousel

* Displays up to 50 trending movies sorted by newest first
* Shows 8 movies visible at a time with horizontal scrolling/dragging support
* Clicking a movie updates the featured movie and saves selection in session storage
* On reload, last selected movies appear first in the carousel

---

## ⚙️ Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn installed

### Installation & Running

```bash
git clone https://github.com/iiamsona/movie-app.git
cd movie-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to get started!


---

## 🛠️ Technologies & Tools

* **React 19** with modern hooks & TypeScript
* **Tailwind CSS** for utility-first styling
* **Vite** as blazing fast build tool and dev server
* **Framer Motion** for smooth animations (optional)
* **Lucide React** for crisp SVG icons
* **clsx** for conditional class name management
* ESLint + TypeScript for code quality and safety

---

## 📜 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server             |
| `npm run build`   | Build production-ready optimized app |
| `npm run preview` | Preview built app locally            |
| `npm run lint`    | Run linting checks                   |

---
