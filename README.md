# Westeros Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Quick Start

```bash
# Development server
npm run start:dev         # Runs development server
npm run build:dev        # Builds for development

# Production builds
npm run start:prod       # Runs production server
npm run build:prod      # Builds for production

# Testing
npm run test           # Runs unit tests
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Structure

```
westeros-frontend/
├── src/
│   ├── environments/           # Environment configurations
│   │   ├── environment.ts           # Default environment
│   │   ├── environment.development.ts# Development environment
│   │   ├── environment.prod.ts      # Production environment
│   │   └── types.ts                 # Environment type definitions
│   ├── services/              # API Services (ng-openapi-gen)
│   │   ├── api-configuration.ts     # API URL configuration
│   │   ├── api.module.ts           
│   │   ├── base-service.ts
│   │   └── ...
│   ├── app/                  # Application source
│   │   ├── layouts/          # Layout components
│   │   │   ├── navbar/            # Navigation bar component
│   │   │   ├── footer/           # Footer component
│   │   │   └── main-layout/      # Main layout wrapper
│   │   └── home/            # Home page component
├── angular.json             # Angular workspace configuration
└── package.json            # Project dependencies and scripts
```

## UI Framework and Styling

### Bootstrap Integration
The project uses Bootstrap 5 for responsive layouts and components:

```typescript
// angular.json
{
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.scss"
  ],
  "scripts": [
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]
}
```

### Layout Components

1. **Main Layout** (`main-layout.component.ts`)
   - Wrapper component that structures the entire application
   - Uses Bootstrap's flex utilities for sticky footer
   - Implements responsive container

2. **Navbar** (`navbar.component.ts`)
   - Responsive navigation bar using Bootstrap navbar
   - Collapses on mobile devices
   - Supports active route highlighting

3. **Footer** (`footer.component.ts`)
   - Responsive footer with grid system
   - Custom styling for links and hover states
   - Dynamic copyright year

### Styling Architecture

1. **Global Styles** (`styles.scss`)
   - Base reset and typography
   - Utility classes
   - Responsive breakpoints
   - Common variables

2. **Component-Specific Styles**
   - Scoped to components
   - Extends Bootstrap classes
   - Custom theming and overrides

## Environment Configuration Guide

### Environment Types
We use different environment configurations for different deployment scenarios:

```typescript
// environments/types.ts
export enum ENVIRONMENT_TYPE {
    DEVELOPMENT = 'development',
    STAGING = 'staging',
    QA = 'qa',
    PRODUCTION = 'production'
}
```

### Environment Files Setup
Each environment has its own configuration:

```typescript
// environment.ts (default)
export const environment = {
    type: ENVIRONMENT_TYPE.DEVELOPMENT,
    apiUrl: 'http://localhost:3000/api'
};

// environment.prod.ts
export const environment = {
    type: ENVIRONMENT_TYPE.PRODUCTION,
    apiUrl: 'https://api.production.com/api'
};
```

## Build Configuration Details

### Development Build Features
- Source maps enabled for debugging
- No optimization for faster builds
- Uses environment.development.ts
- Vendor chunks separated
- No license extraction

### Production Build Features
- Full optimization enabled
- Source maps disabled
- Uses environment.prod.ts
- Build optimizer enabled
- Vendor chunks combined
- License extraction
- Output hashing for cache busting

## API Integration

### API Configuration Service
The `ApiConfiguration` service manages the API URL:

```typescript
@Injectable({
    providedIn: 'root',
})
export class ApiConfiguration {
    private _rootUrl: string = environment.apiUrl;

    get rootUrl(): string {
        return this._rootUrl;
    }

    set rootUrl(url: string) {
        this._rootUrl = url;
    }
}
```

## Common Tasks

### Code Generation
```bash
# Generate new component
ng generate component component-name

# Generate other artifacts
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Testing
```bash
# Unit tests
ng test

# End-to-end tests (requires e2e testing package)
ng e2e
```

## Learning Points & Best Practices

1. **Environment Management**
   - Use typed environment configurations
   - Keep sensitive data in environment files
   - Use environment-specific API URLs

2. **Build Process**
   - Development builds prioritize speed
   - Production builds prioritize performance
   - Use watch mode during development

3. **API Integration**
   - Centralize API configuration
   - Use environment-specific URLs
   - Enable runtime URL override capability

4. **Best Practices**
   - Keep environment files in .gitignore
   - Use TypeScript enums for type safety
   - Implement proper error handling
   - Regular testing in different environments

## Troubleshooting

1. **API Connection Issues**
   - Verify environment configuration
   - Check API URL in current environment
   - Verify API service initialization

2. **Build Problems**
   - Clear cache: `npm cache clean --force`
   - Remove node_modules: `rm -rf node_modules`
   - Reinstall dependencies: `npm install`

## Style Guide

### CSS Class Naming Conventions
- Use Bootstrap utilities where possible
- Custom classes should be descriptive and follow BEM methodology
- Component-specific styles should be scoped

### Component Structure
1. **Layout Components**
   - Keep layouts simple and flexible
   - Use Bootstrap grid system
   - Implement responsive breakpoints

2. **UI Components**
   - Follow Bootstrap component patterns
   - Keep components modular and reusable
   - Document any custom behaviors

### Responsive Design
- Mobile-first approach using Bootstrap breakpoints
- Test across different device sizes
- Use responsive utilities consistently

## Further Help

- [Angular CLI Documentation](https://angular.io/cli)
- [Angular Environment Guide](https://angular.io/guide/build)
- [ng-openapi-gen Documentation](https://github.com/cyclosproject/ng-openapi-gen)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
