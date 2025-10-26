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
│   └── app/                  # Application source
├── angular.json             # Angular workspace configuration
└── package.json            # Project dependencies and scripts
```

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

## Further Help

- [Angular CLI Documentation](https://angular.io/cli)
- [Angular Environment Guide](https://angular.io/guide/build)
- [ng-openapi-gen Documentation](https://github.com/cyclosproject/ng-openapi-gen)
