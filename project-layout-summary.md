# Comprehensive Angular Project Structure Analysis

## Project Overview
This is a large-scale Angular 20 enterprise application with a sophisticated modular architecture, multi-product support, and extensive UI component library. The application uses Angular Material, Bootstrap, and custom SCSS theming system.

## Technology Stack & Dependencies

### Core Framework
- **Angular 20.1.4** - Latest Angular framework
- **TypeScript 5.9.2** - Type-safe JavaScript
- **RxJS 7.8.2** - Reactive programming library
- **Zone.js 0.15.1** - Angular change detection

### UI & Styling
- **Angular Material 20.1.4** - Material Design components
- **Angular CDK 20.1.4** - Component Dev Kit
- **Bootstrap 5.3.8** - CSS framework
- **SCSS** - Advanced styling with custom variables
- **Feather Icons 4.29.2** - Icon library
- **FontAwesome 7.0.0** - Additional icons

### Data Visualization & Charts
- **ApexCharts 5.3.2** - Advanced charting library
- **Chart.js 4.5.0** - Charting framework
- **ng2-charts 8.0.0** - Angular Chart.js wrapper
- **ng-apexcharts 2.0.0** - Angular ApexCharts wrapper

### Data Tables & Grids
- **ngx-datatable 21.1.0** - Data table component
- **@siemens/ngx-datatable 24.1.0** - Siemens data table
- **tabulator-tables 6.3.1** - Advanced table library

### Forms & Validation
- **@angular/forms** - Reactive forms
- **ngx-mask 20.0.3** - Input masking
- **ng-select 20.1.0** - Select dropdowns
- **ngx-flatpickr-wrapper 20.0.1** - Date picker
- **bs-stepper 1.7.0** - Step wizard

### HTTP & Networking
- **@angular/common/http** - HTTP client
- **OpenTelemetry** - Observability and tracing
- **Sentry** - Error tracking and monitoring

### Utilities & Helpers
- **lodash 4.17.21** - Utility functions
- **moment 2.30.1** + **luxon 3.7.1** - Date/time handling
- **@ngx-translate/core 17.0.0** - Internationalization
- **@ctrl/ngx-csv 6.0.0** - CSV export
- **html2canvas 1.4.1** + **jspdf 3.0.1** - PDF generation

### Development & Testing
- **@storybook/angular 9.1.1** - Component development
- **@compodoc/compodoc 1.1.26** - Documentation generation
- **karma + jasmine** - Unit testing
- **protractor** - E2E testing

## Core Project Structure

### Root Configuration Files
```
angular.json          # Angular CLI build configurations
package.json          # Dependencies and npm scripts
tsconfig.json         # TypeScript configuration
tslint.json           # Linting rules
angular-shell-scripts/ # Custom build/deployment scripts
```

### Source Structure (`src/`)

#### Core Framework (`@core/`)
```
@core/
├── animations/        # Angular animations
├── common.module.ts   # Shared module definitions
├── components/        # Reusable UI components
├── core.module.ts     # Main core module
├── directives/        # Custom directives
├── pipes/             # Custom pipes
├── scss/             # Core styling system
│   ├── base/
│   │   ├── bootstrap-extended/  # Bootstrap customizations
│   │   ├── components/          # Component styles
│   │   ├── core/               # Core utilities
│   │   ├── pages/              # Page-specific styles
│   │   ├── plugins/            # Third-party styles
│   │   └── themes/             # Theme configurations
│   ├── core.scss               # Main SCSS entry point
│   └── _hover.scss             # Hover utilities
└── services/         # Core services (auth, navigation)
```

#### Utilities (`@utils/`)
- Utility functions and helpers

#### Application (`app/`)
```
app/
├── app.component.*    # Root component
├── app.module.ts      # Root module
├── appConstants.ts    # Application constants
├── auth/             # Authentication module
├── colors.const.ts   # Color constants
├── layout/           # Layout components
│   ├── components/   # Layout-specific components
│   ├── custom-breakpoints.ts
│   ├── horizontal/   # Horizontal layout
│   ├── layout.module.ts
│   └── vertical/     # Vertical layout (main)
├── main/             # Main application pages
├── menu/             # Navigation menu configuration
├── metaui/           # Meta UI components
├── models/           # Data models
└── cosyn/            # Product-specific features
```

#### Configuration & Assets
```
assets/               # Static assets (images, fonts, icons)
environments/         # Environment configurations
product-configurations/ # Multi-product setup
services/            # Application services
shared/              # Shared components
stories/             # Storybook stories
```

## Key Architectural Patterns

### Layout System
- **Vertical Layout**: Primary layout with sidebar navigation
- **Horizontal Layout**: Alternative layout option
- Custom responsive breakpoints

### Menu System
Hierarchical menu configuration with role-based access:
```typescript
{
  id: 'section',
  title: 'Section Name',
  type: 'section',
  role: ['Admin'],
  children: [
    {
      id: 'item',
      title: 'Menu Item',
      type: 'item',
      role: ['Admin'],
      icon: 'icon-name',
      url: 'route/path'
    }
  ]
}
```

### Styling Architecture
- **@core/scss** pattern for organized styling
- Bootstrap extensions and custom themes
- Component-specific SCSS files
- RTL language support

### Multi-Product Configuration
- Product selection via `product-configurations/`
- File replacements in `angular.json` for different products
- Environment-specific builds (dev/qa/staging/prod)

## Development Workflow

### Build Scripts
```json
{
  "serve-dev": "Development server",
  "serve-hmr": "Hot Module Replacement",
  "build:prod": "Production build",
  "storybook": "Component development",
  "compodoc": "API documentation",
  "test": "Unit tests"
}
```

### Key Libraries Used
- **ApexCharts** - Data visualization
- **FullCalendar** - Calendar functionality
- **ngx-datatable** - Data tables
- **SweetAlert2** - Modal dialogs
- **ngx-translate** - Internationalization
- **Chart.js** - Charting
- **Feather Icons** + **FontAwesome** - Icons

## Component Organization

### Core Components (`@core/components/`)
Reusable UI elements shared across the application

### Feature Modules (`app/`)
- **auth/** - Authentication flows
- **layout/** - Layout management
- **main/** - Main application pages
- **menu/** - Navigation configuration
- **cosyn/** - Product-specific features

### Shared Components (`shared/`)
Components shared between multiple modules

## Build Configuration

### Angular.json Features
- Multiple build configurations for different products
- Environment-specific file replacements
- Asset optimization and bundling
- Bundle size budgets (5-8MB)
- Source maps for debugging

### Product Switching
- Runtime product selection via configuration files
- Separate menu configurations per product
- Environment-specific API endpoints

## Documentation & Development Tools

- **Storybook**: Interactive component development
- **Compodoc**: Auto-generated API documentation
- **Webpack Bundle Analyzer**: Build optimization
- **Karma/Jasmine**: Unit testing
- **LLMs files**: AI-friendly documentation

## Project Setup Guide

### 1. Initialize New Angular Project
```bash
ng new your-project-name --routing --style=scss --standalone=false
cd your-project-name
```

### 2. Install Core Dependencies
```bash
# Angular Material & CDK
npm install @angular/material @angular/cdk @angular/platform-browser-dynamic

# Bootstrap & UI Libraries
npm install bootstrap @fortawesome/fontawesome-free feather-icons

# Charts & Data Visualization
npm install apexcharts ng-apexcharts chart.js ng2-charts

# Data Tables
npm install @swimlane/ngx-datatable @siemens/ngx-datatable

# Forms & Validation
npm install ngx-mask ng-select @ng-bootstrap/ng-bootstrap

# Utilities
npm install lodash moment luxon @ngx-translate/core

# Development Tools
npm install @storybook/angular @compodoc/compodoc
```

### 3. Create Core Directory Structure
```bash
# Create core directories
mkdir -p src/@core/{animations,components,directives,pipes,scss,services}
mkdir -p src/@core/scss/base/{bootstrap-extended,components,core,pages,plugins,themes}
mkdir -p src/@utils
mkdir -p src/app/{auth,layout/{vertical,horizontal,components},main,menu,models,shared}
mkdir -p src/environments
mkdir -p src/assets/{images,fonts}
```

### 4. Configure Core Module Structure

#### Create `src/@core/core.module.ts`
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
```

#### Create `src/@core/scss/core.scss`
```scss
// Bootstrap
@import '~bootstrap/scss/bootstrap';

// Theme variables
@import 'base/themes/theme';

// Core utilities
@import 'base/core/utilities';

// Component styles
@import 'base/components/components';

// Page layouts
@import 'base/pages/pages';

// Custom overrides
@import 'base/bootstrap-extended/bootstrap-extended';
```

### 5. Setup Layout System

#### Create Vertical Layout: `src/app/layout/vertical/vertical-layout.component.ts`
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-layout',
  template: `
    <div class="vertical-layout">
      <app-navbar></app-navbar>
      <div class="vertical-layout-content">
        <app-sidebar></app-sidebar>
        <div class="content-wrapper">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .vertical-layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .vertical-layout-content {
      display: flex;
      flex: 1;
    }
    .content-wrapper {
      flex: 1;
      padding: 20px;
    }
  `]
})
export class VerticalLayoutComponent { }
```

### 6. Configure Menu System

#### Create `src/app/menu/menu.ts`
```typescript
import { CoreMenu } from '@core/types';

export const menu: CoreMenu[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    icon: 'home',
    url: '/dashboard'
  },
  {
    id: 'apps',
    title: 'Apps',
    type: 'section',
    children: [
      {
        id: 'calendar',
        title: 'Calendar',
        type: 'item',
        icon: 'calendar',
        url: '/apps/calendar'
      }
    ]
  }
];
```

### 7. Setup Angular.json Configuration
```json
{
  "projects": {
    "your-project": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/@core/scss/core.scss",
              "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
            ],
            "stylePreprocessorOptions": {
              "includePaths": [
                "src/",
                "src/@core/scss"
              ]
            }
          }
        }
      }
    }
  }
}
```

### 8. Configure Routing with Layouts
```typescript
const routes: Routes = [
  {
    path: '',
    component: VerticalLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
```

### 9. Setup Development Scripts
Update `package.json` scripts:
```json
{
  "scripts": {
    "ng": "ng",
    "serve": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "storybook": "ng run your-project:storybook",
    "compodoc": "npx compodoc -p tsconfig.doc.json"
  }
}
```

### 10. Initialize Storybook
```bash
npx storybook init
```

## Key Structural Patterns to Follow

1. **@core Pattern**: Keep core functionality separate from app-specific logic
2. **Modular Architecture**: Create feature modules for different app sections
3. **SCSS Organization**: Use structured styling with base, components, and themes
4. **Layout System**: Implement vertical/horizontal layouts with sidebar navigation
5. **Menu Configuration**: Use hierarchical menu system with role-based access
6. **Component Libraries**: Combine Angular Material with Bootstrap for rich UI

## Recommended Development Workflow

1. **Start with Core**: Set up @core structure first
2. **Create Layouts**: Implement navigation and layout system
3. **Build Components**: Develop reusable components in @core/components
4. **Add Features**: Create feature modules in app/ directory
5. **Configure Routing**: Set up lazy-loaded routes with layouts
6. **Style System**: Implement SCSS theming and component styles
7. **Testing**: Add unit tests and Storybook stories
8. **Documentation**: Generate Compodoc documentation

This setup provides a solid foundation that scales well for enterprise applications with complex requirements and multiple user roles.