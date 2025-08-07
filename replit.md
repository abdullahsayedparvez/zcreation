# ZCreation - Hijab Brand Website

## Overview

ZCreation is a modern, multi-page React website for an elegant hijab fashion brand. The application provides a sophisticated online presence showcasing premium modest fashion through a clean, responsive design. Built with React/Vite for the frontend and Express.js for the backend, it features four main pages: Home (brand introduction), About Us (brand story), Products (catalog display), and Contact (customer communication). The site emphasizes elegant typography, soft color schemes, and smooth user interactions to create an engaging shopping experience for customers seeking high-quality modest fashion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing between pages
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessible, customizable interface components
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **Form Handling**: React Hook Form with Zod validation for robust form management
- **Typography**: Custom font integration (Playfair Display, Inter, Poppins) for brand-appropriate typography

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **API Design**: RESTful endpoints with JSON responses
- **Data Storage**: In-memory storage implementation with interface for future database migration
- **Validation**: Zod schema validation for API request/response data integrity
- **Development**: Hot module replacement and error overlay for development experience

### Data Layer
- **Database**: Drizzle ORM configured for PostgreSQL (ready for Neon Database integration)
- **Schema Management**: Shared schema definitions between frontend and backend using Drizzle-Zod
- **Storage Interface**: Abstracted storage layer allowing seamless transition from in-memory to database storage
- **Product Data**: Static JSON file serving product catalog with structured product information

### Component Architecture
- **Layout Components**: Consistent navigation (Navbar) and footer across all pages
- **UI Components**: Comprehensive design system with reusable components (buttons, cards, forms, modals)
- **Page Components**: Four main pages with distinct purposes and layouts
- **Custom Components**: Product modal for enhanced product detail viewing
- **Responsive Design**: Mobile-first approach with breakpoint-aware components

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite with TypeScript support and development plugins
- **Server Framework**: Express.js with middleware for JSON parsing and static file serving

### UI and Design Dependencies
- **Component Library**: Radix UI primitives for accessible component foundations
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts integration (Playfair Display, Inter, Poppins)

### Data and State Management
- **HTTP Client**: TanStack Query for server state management and caching
- **Form Management**: React Hook Form with Hookform Resolvers for Zod integration
- **Validation**: Zod for runtime type checking and schema validation
- **Date Handling**: date-fns for date manipulation and formatting

### Database and ORM
- **ORM**: Drizzle ORM with Drizzle Kit for schema management
- **Database Driver**: Neon Database serverless driver for PostgreSQL connectivity
- **Session Storage**: connect-pg-simple for PostgreSQL session storage (configured but not active)

### Development and Production Tools
- **TypeScript**: Full TypeScript support across frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds
- **Development Plugins**: Replit-specific plugins for enhanced development experience
- **Utility Libraries**: clsx and tailwind-merge for conditional styling, nanoid for ID generation

### Third-Party Services Ready for Integration
- **Image Hosting**: Unsplash API integration for product images
- **External Links**: Product detail pages linking to external e-commerce platforms
- **Social Media**: Placeholder social media integrations (Twitter, Instagram, Facebook)