# Tapan Meena - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and ShadCN UI components.

![Portfolio Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Tapan+Meena+Portfolio)

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark Mode Ready**: Built with dark mode support using CSS variables
- **Performance Optimized**: Fast loading with Vite build tool
- **Accessible**: Semantic HTML and proper ARIA attributes
- **SEO Friendly**: Optimized meta tags and structure

## 🛠️ Built With

- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com/)** - Reusable component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/                 # ShadCN UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── separator.tsx
│   ├── sections/           # Main page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   └── contact.tsx
│   ├── navigation.tsx      # Main navigation
│   └── footer.tsx          # Footer component
├── lib/
│   └── utils.ts            # Utility functions
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tapanmeena/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

This project is configured for deployment to GitHub Pages.

### Deploy to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at `https://tapanmeena.github.io/new/`

### Manual Deployment

You can also deploy the `dist/` folder to any static hosting service like:
- Vercel
- Netlify
- AWS S3
- Firebase Hosting

## 🎨 Customization

### Colors and Theme

The project uses CSS variables for theming. You can customize colors in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... other variables */
}
```

### Content

Update the content in the respective section components:
- Personal info: `src/components/sections/hero.tsx`
- About: `src/components/sections/about.tsx`
- Experience: `src/components/sections/experience.tsx`
- Skills: `src/components/sections/skills.tsx`
- Projects: `src/components/sections/projects.tsx`
- Contact: `src/components/sections/contact.tsx`

## 📧 Contact

- **Email**: tapan.meena@outlook.com
- **LinkedIn**: [linkedin.com/in/tapanmeena97](https://linkedin.com/in/tapanmeena97)
- **GitHub**: [github.com/tapanmeena](https://github.com/tapanmeena)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Tapan Meena](https://github.com/tapanmeena)
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
