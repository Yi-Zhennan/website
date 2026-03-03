# Personal Website - Zhennan Yi

A personal portfolio website with a unique hand-drawn aesthetic, built using React and Vite. The design focuses on a "physical sketchbook" feel with hand-drawn components, ink-like colors, and interactive doodles.

## 🚀 Quick Start

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```

### Build
Build the project for production:
```bash
npm run build
```

## 🌐 Deployment

The easiest way to deploy this website is using **Vercel** with **GitHub**.

### 1. Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new).
2. Push your local code:
   ```bash
   git remote add origin https://github.com/Yi-Zhennan/website.git
   git branch -M main
   git push -u origin main
   ```

### 2. Deploy to Vercel
1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New** > **Project**.
3. Import your repository and click **Deploy**.
4. Vercel will automatically build and host your site. Any future pushes to `main` will trigger an automatic update.

## � How to Update Your Website


git add .
git commit -m "update"
git push



Every time you make changes to your code locally and want to update the live website:

1. **Stage your changes**:
   ```bash
   git add .
   ```
2. **Commit your changes**:
   ```bash
   git commit -m "Describe your changes here"
   ```
3. **Push to GitHub**:
   ```bash
   git push
   ```
*Vercel will automatically detect the new commit and redeploy your site within seconds.*

## �📂 Project Structure

```text
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Individual page components
│   ├── data/           # JSON data files for blogs and projects
│   ├── assets/         # Static assets like images
│   ├── App.jsx         # Main application component & routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles and design tokens
├── public/             # Public assets
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 🛠️ Components & Pages

### Components
- **`Layout.jsx`**: The foundational layout including a sticky navigation bar and site footer.
- **`HandDrawnCard.jsx`**: A card component styled with a "sketchy" border and hand-drawn feel.
- **`StickyNote.jsx`**: Interactive sticky note UI elements used for highlighting information.
- **`Doodles.jsx`**: A collection of SVGs and animations representing hand-drawn elements like arrows, stars, and social media icons.

### Pages
- **`Home.jsx`**: The main landing page featuring an introduction, "About Me", and previews of work.
- **`Blogs.jsx` / `BlogDetail.jsx`**: Blog listing and detailed individual post views.
- **`Projects.jsx` / `CaseStudy.jsx`**: Project showcase and in-depth case study presentations.

## 🎨 Design System
The website uses a custom hand-drawn theme defined in `index.css`:
- **Paper Background**: Soft off-white texture.
- **Ink Color**: Deep blue/gray mimics realistic ink.
- **Typography**: Mukta Vaani for headers and accents, Inter for body.

## 📦 Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Fonts Usage

This project uses the following fonts, defined in `src/index.css`:

1.  **Patrick Hand** (`var(--font-hand)`)
    *   **Usage:** *Currently Unused* (Replaced by `var(--font-mukta-vaani)`)
    *   **Description:** A friendly, handwritten-style font available for lighter text if needed.

2.  **Mukta Vaani** (`var(--font-mukta-vaani)`)
    *   **Usage:** Default Body Text, Headings (`h1` - `h6`), Buttons, Footer, Tooltips, Captions.
    *   **Description:** A clean, bold font used for the general UI and emphasis.

3.  **Inter** (`var(--font-body)`)
    *   **Usage:**
        *   **Home Page:** Research description, Publications section.
        *   **Blog & Projects:** Date snippets, Main article content (Case Studies, Blog Details).
    *   **Description:** A clean sans-serif font used for long-form text and dense information (like bibliography) to ensure readability.
