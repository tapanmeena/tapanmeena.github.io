<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Tapan Meena Portfolio - Copilot Instructions

This is a modern React TypeScript portfolio website built with:
- **Vite** for fast development and building
- **React 19** with functional components and hooks
- **TypeScript** for type safety
- **Tailwind CSS** for styling and responsive design
- **ShadCN UI** components for consistent UI elements
- **Framer Motion** for smooth animations and transitions
- **Lucide React** for icons

## Project Structure
```
src/
├── components/
│   ├── ui/          # ShadCN UI components (Button, Card, Badge, etc.)
│   ├── sections/    # Main page sections (Hero, About, Experience, etc.)
│   ├── navigation.tsx
│   └── footer.tsx
├── lib/
│   └── utils.ts     # Utility functions (cn for className merging)
└── main.tsx         # App entry point
```

## Code Style Guidelines
- Use functional React components with TypeScript
- Follow ShadCN UI patterns for component structure
- Use Tailwind CSS classes for styling - avoid custom CSS
- Implement smooth animations with Framer Motion
- Use semantic HTML elements for accessibility
- Follow mobile-first responsive design principles
- Use the `cn()` utility function for conditional className merging

## Component Patterns
- Export components as named exports
- Use proper TypeScript interfaces for props
- Implement proper accessibility attributes
- Use Framer Motion for entrance animations with `whileInView`
- Follow ShadCN UI component patterns for consistency

## Performance Considerations
- Use React.lazy() for code splitting when needed
- Optimize images and assets
- Minimize bundle size
- Use proper semantic HTML for SEO

## GitHub Pages Deployment
- Project is configured to deploy to GitHub Pages
- Build output goes to `dist/` directory
- Use `npm run deploy` to deploy to GitHub Pages
- Base URL is configured for GitHub Pages in vite.config.ts
