# My Resume Project

## Project Overview
This is a personal resume website built with React, TypeScript, and Tailwind CSS. It includes portfolio sections, contact forms, and is deployed to GitHub Pages.

## Tech Stack
- React 18.2.0
- TypeScript 4.9.5
- Tailwind CSS 3.2.7
- React Router DOM 6.8.1
- EmailJS for contact forms
- Font Awesome for icons

## Project Structure
```
my-resume/
├── src/
│   ├── Components/      # Reusable components
│   │   ├── App.tsx     # Main app component
│   │   ├── EmailForm.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Nav.tsx
│   │   ├── PageTitle.tsx
│   │   ├── ProjectForm.tsx
│   │   ├── ResumeForm.tsx
│   │   └── Router.jsx
│   ├── Router/         # Page components
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Project.tsx
│   │   └── Resume.tsx
│   ├── assets/         # Images and static files
│   ├── index.css       # Global styles
│   └── index.tsx       # Entry point
├── public/             # Public assets
├── build/              # Production build
└── package.json        # Dependencies and scripts
```

## Available Scripts
- `npm start` - Run development server at localhost:3000
- `npm run build` - Create production build
- `npm run deploy` - Deploy to GitHub Pages (includes predeploy build)

## Development Workflow
1. Start development server: `npm start`
2. Make changes to components in `src/`
3. Build for production: `npm run build`
4. Deploy to GitHub Pages: `npm run deploy`

## Deployment
The site is deployed to: https://Muhyun-Kim.github.io/kim_resume

## Key Features
- Responsive design with mobile navigation
- Contact form integration with EmailJS
- Project portfolio showcase
- Resume section
- TypeScript for type safety
- Tailwind CSS for styling

## Design Guidelines

### Visual Design
- **Primary Font**: Noto Serif JP (Google Fonts)
- **Background Color**: #f3f4f6 (gray-100 in Tailwind)
- **Color Palette**: 
  - Primary: Use Tailwind's default color classes
  - Background: gray-100 (#f3f4f6)
  - Text: gray-900 for primary, gray-600 for secondary
  - Accent: blue-600 for links and CTAs
- **Spacing System**: Use Tailwind spacing scale (4px base unit)
  - Small: p-2, m-2 (8px)
  - Medium: p-4, m-4 (16px)
  - Large: p-8, m-8 (32px)

### Component Design Rules
- **Cards/Containers**: Use white background with subtle shadow (shadow-md)
- **Buttons**: Rounded corners (rounded-lg), hover states with transitions
- **Forms**: Full width inputs with proper padding and border styling
- **Navigation**: Sticky header with backdrop blur on scroll
- **Typography Hierarchy**:
  - H1: text-4xl font-bold
  - H2: text-3xl font-semibold
  - H3: text-2xl font-medium
  - Body: text-base (16px)

### Responsive Breakpoints
- Mobile: Default (< 640px)
- Tablet: sm: (640px+)
- Desktop: md: (768px+), lg: (1024px+)
- Wide: xl: (1280px+)

### Interaction Design
- **Hover Effects**: Use hover:scale-105 or hover:shadow-lg
- **Transitions**: transition-all duration-300 ease-in-out
- **Focus States**: Visible focus rings for accessibility
- **Loading States**: Use skeleton screens or spinners
- **Error States**: Red borders with error messages below inputs

### Code Style for UI Components
- Always use Tailwind classes over custom CSS
- Group related classes logically (layout, spacing, typography, colors)
- Extract repeated class combinations into component files
- Maintain consistent class order across components

## UI/UX Principles
- Clean and minimalist design approach
- Focus on readability and user experience
- Consistent spacing and alignment
- Mobile-first responsive design
- Smooth interactions and transitions
- Accessibility first (WCAG 2.1 AA compliance)

## Notes
- Uses HashRouter for GitHub Pages compatibility
- ESLint configuration extends react-app
- No test files currently present
- gh-pages package handles deployment