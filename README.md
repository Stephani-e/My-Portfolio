# Portfolio

A personal portfolio website built with React, showcasing projects, skills, and experience. Content (skills and projects) is managed via Appwrite, making it easy to update without touching the code.

## Demo

🔗 **Live Demo:** 

## Tech Stack
- React – Component-based UI development
- Vite – Lightning-fast build tool
- TailwindCSS – Utility-first CSS for styling
- Appwrite – Backend for databases and storage
- Lucide Icons – Clean and beautiful icon pack
- Radix UI – Accessible component primitives

## Features
- **Light/Dark theme** with smooth transitions and saved preference
- **Animated layout** with subtle background, hover, and scroll effects
- **Responsive navigation** for desktop and mobile
- **Hero & About sections** introducing you and your work
- **Skills section** powered by Appwrite, filterable by category with progress bars
- **Projects section** powered by Appwrite, filterable by category, with images/videos, tags, GitHub/demo/Dribbble links
- **Contact / social links** for easy reach-out

## Tech Stack

## Project Structure

- `src/`
    - `App.jsx`
    - `components/`
        - `Data/`
             - `ProjectsData.js`
        - `HeroSection.jsx`
        - `AboutSection.jsx`
        - `SkillsSection.jsx`
        - `ProjectsSection.jsx`
        - `ContactsSection.jsx`
        - `Footer.jsx`
        - `NavBar.jsx`
        - `StarBackground.jsx`
        - `ThemeToggle.jsx`
    - `Hooks`
         - `Use-Toast.jsx`
    - `Lib/`
        - `appwrite.js` (Appwrite client + IDs)
        - `utils.jsx`
    - `Pages/`
         - `Home.jsx`
         - `NotFound.jsx`
    - `App.jsx`
    - `index.css`
    - `main.jsx`

## Getting Started

1. Clone the repository:
   ```bash
   https://github.com/Stephani-e/My-Portfolio.git
   cd My-Portfolio
   
2. Create an .env file in the project root:
   ```bash
   VITE_APPWRITE_ENDPOINT="https://fra.cloud.appwrite.io/v1"
   VITE_APPWRITE_PROJECT_ID="your_project_id"
   VITE_APPWRITE_DATABASE_ID="your_database_id"
   VITE_APPWRITE_PROJECTS_ID="your_projects_id"
   VITE_APPWRITE_SKILLS_ID="your_skills_id"

3. Install dependencies:
   ```bash
   npm install
   
4. Start the development server
   ```bash
   npm run dev

5. Build for production
   ```bash
   npm run build