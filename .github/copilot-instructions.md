# AI Coding Agent Instructions for Micro-Cro

This document provides essential context for AI agents working in the Micro-Cro codebase.

## Project Overview

Micro-Cro is a React-based landing page for a clinical research organization. The site features an interactive hexagonal service menu, animated components, and responsive design across mobile, tablet, and desktop viewports.

## Architecture & Component Structure

- **Single-Page Architecture**: All content is rendered in `App.jsx` without routing
- **Component Organization**:
  - Major sections are organized as standalone components in `src/components/`
  - `Modal.jsx` and `SubModal.jsx` handle the interactive service menu popups
  - `BlueWhale.jsx` provides animated background effects

## Key Development Patterns

### State Management

- Uses React's built-in state management with `useState`
- Modal state is managed locally in the `Services` component
- No global state management library is used

### Styling Conventions

- CSS modules are not used - styles are defined in `App.css`
- Responsive breakpoints:
  ```css
  @media screen and (max-width: 480px) {
    /* Mobile */
  }
  @media screen and (min-width: 480px) and (max-width: 768px) {
    /* Tablet */
  }
  @media screen and (min-width: 768px) {
    /* Desktop */
  }
  ```
- Custom properties for brand colors defined in root
- Extensive use of CSS animations for interactive elements
- Hexagonal menu uses precise positioning and rotation animations

### Asset Management

- Images and custom fonts are stored in `src/assets/`
- SVG icons via `react-icons` library
- Background patterns and textures use repeating images

## Build & Development

- Uses Vite with SWC for fast refresh
- ESLint configuration in `eslint.config.js` with:
  - React Hooks plugin
  - React Refresh plugin
  - Modern JavaScript features (ES2020)

### Common Commands

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint checks
```

## Integration Points

- Assets are referenced with relative paths from `src/assets/`
- Service content is defined as a static object in `Services.jsx`
- Social media links and contact information in `Footer.jsx`

## Best Practices

1. When modifying the service menu:

   - Update the content object in `Services.jsx`
   - Ensure modal coordinates match the hexagonal layout
   - Test on all viewport sizes

2. When adding new sections:

   - Create a new component in `src/components/`
   - Add to main layout in `App.jsx`
   - Include responsive styles in `App.css`

3. When styling:
   - Follow existing animation patterns for consistency
   - Use CSS variables for brand colors
   - Test across all breakpoints
   - Consider performance with animations
