# 🎬 Movie App — React Application

---

## 🚀 Overview

This is a **web-based TV application** built with **React.js** that provides a sleek and interactive interface for browsing and watching movies. The app is designed according to a provided design spec and leverages modern web technologies for a smooth user experience.

---

## 🎯 Features

### 1. Main Menu

- **Location:** Left sidebar.
- **Icons:** Search, Home, TV Shows, Movies, Genres, Watch Later.
- **Interaction:**  
  - On hover, the menu smoothly **expands with a floating animation** sliding from left to right.  
  - Background overlay fades in from 0% to 80% opacity.  
  - The expanded view reveals profile info with user icons and names, plus extra menu options at the bottom like language settings, help, and exit.

### 2. Main Featured Video

- **Position:** Top-left corner of the screen.
- **Contents:**  
  - Featured movie cover image  
  - Category label (e.g., *Movie*)  
  - Transparent PNG movie logo  
  - Release year  
  - MPA rating  
  - Duration  
  - Brief description  
  - Two action buttons: **Play** and **More Info**

### 3. Trending Now Section

- **Data Source:** Fetches up to 50 trending videos sorted by creation date (newest first) from the JSON data.
- **Display:**  
  - Horizontal carousel showing 8 movie covers at a time.  
  - Scroll or drag horizontally to reveal more movies.
- **Interaction:**  
  - Clicking on a movie updates the featured video section with that movie’s details.  
  - After 2 seconds, the featured section transitions the background to play the selected movie’s video (autoplay, no controls).  
  - The clicked movie ID is saved to `sessionStorage` to remember user preferences.
- **Persistence:**  
  - On page reload, movies previously clicked are **sorted to the top**, followed by the rest in the default order.

---

## 🛠️ Technology Stack & Libraries

| Library / Tool     | Purpose                              | Version       |
| ------------------ | ---------------------------------- | ------------- |
| **React**          | Core UI library                    | 19.1.0        |
| **Vite**           | Build tool & development server    | 7.0.4         |
| **TypeScript**     | Static typing                      | ~5.8.3        |
| **Tailwind CSS**   | Utility-first CSS framework         | 4.1.11        |
| **Framer Motion**  | Smooth animations & transitions    | 12.23.9       |
| **Lucide React**   | Icons                             | 0.525.0       |
| **ESLint & Plugins** | Code linting and quality assurance | Various       |

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/iiamsona/movie-app.git>
   cd movie-app
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open the app:**
   Open your browser and navigate to `http://localhost:5173/`.
