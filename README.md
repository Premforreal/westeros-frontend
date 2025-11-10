# Westeros Frontend

**A Game of Thrones themed resort booking platform** built with Angular 15, featuring an immersive Seven Realms experience inspired by Booking.com's user interface.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## 🎯 Project Overview

Westeros Frontend is a luxury resort booking SaaS application that brings the world of Game of Thrones to life. Users can browse and book themed resorts across the Seven Realms, each offering unique experiences inspired by the legendary houses and locations from the series.

### Key Features
- 🏰 **Game of Thrones Theming** - Authentic design with Trajan Pro font (GoT logo font)
- 📅 **Advanced Date Range Picker** - Material Design date selection with validation
- 🏨 **Resort Detail Pages** - Comprehensive property information inspired by Booking.com
- 🎨 **Booking.com-Inspired UI** - Professional layout with hero sections, reviews, and facility highlights
- 🔐 **Role-Based Access** - Menu system with admin/user permissions
- 📱 **Fully Responsive** - Mobile-first design with Bootstrap 5
- 🌍 **Multi-Realm Support** - The North, Dorne, The Vale, and more

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

## 🎨 Design & Theming

### Game of Thrones Font System
The application uses **Trajan Pro** (via **Cinzel** from Google Fonts) - the authentic font used in the Game of Thrones logo:

```scss
// All headings use Trajan-inspired typography
h1, h2, h3, h4, h5, h6 {
  font-family: 'Cinzel', 'Trajan Pro', serif;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

// Brand/Logo styling
.navbar-brand {
  font-family: 'Cinzel', 'Trajan Pro', serif;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
}
```

### Color Scheme
- **Dark Gradients** - Inspired by GoT opening sequence
- **Primary Blue** - `#0d6efd` (Bootstrap primary)
- **Success Green** - For confirmations and availability
- **Medieval Blacks/Grays** - Hero sections with texture overlays

## 📁 Project Structure

```
westeros-frontend/
├── src/
│   ├── environments/                 # Environment configurations
│   │   ├── environment.ts            # Default environment
│   │   ├── environment.development.ts# Development environment
│   │   ├── environment.prod.ts       # Production environment
│   │   └── types.ts                  # Environment type definitions
│   ├── services/                     # API Services (ng-openapi-gen)
│   │   ├── api-configuration.ts      # API URL configuration
│   │   ├── api.module.ts           
│   │   ├── base-service.ts
│   │   └── ...
│   ├── app/                           # Application source
│   │   ├── layouts/                   # Layout components
│   │   │   ├── navbar/                # Navigation bar component
│   │   │   ├── footer/                # Footer component
│   │   │   ├── main-layout/           # (Legacy) Main layout wrapper
│   │   │   └── vertical/              # Primary app wrapper used in routing
│   │   ├── menu/                      # Role-based menu configuration
│   │   │   ├── menu.types.ts          # Menu item types
│   │   │   └── menu.config.ts         # MENU definition with roles
│   │   ├── services/                  # App-level services
│   │   │   └── auth.service.ts        # Minimal role provider (stub)
│   │   ├── home/                      # Home page component
│   │   │   ├── home.component.ts      # Search, realms & properties
│   │   │   ├── home.component.html    # Booking.com-inspired layout
│   │   │   └── home.component.scss    # Hero section, cards, styling
│   │   ├── realm-detail/              # Realm detail page (NEW)
│   │   │   ├── realm-detail.component.ts     # Realm properties and filters
│   │   │   ├── realm-detail.component.html   # Realm listing layout
│   │   │   └── realm-detail.component.scss   # Realm-specific styling
│   │   ├── resort-detail/             # Resort detail page
│   │   │   ├── resort-detail.component.ts    # Property information
│   │   │   ├── resort-detail.component.html  # Property detail layout
│   │   │   └── resort-detail.component.scss  # Property styling
│   │   ├── app-routing.module.ts      # Routes using VerticalLayoutComponent
│   │   └── app.module.ts              # Root module
├── angular.json                        # Angular workspace configuration
└── package.json                        # Project dependencies and scripts
```

## 🏠 Application Pages

### Home Page (`/`)
**Booking.com-inspired landing page** featuring:
- **Hero Section** - Dark gradient with Game of Thrones aesthetic
- **Search Strip** - Horizontal layout with:
  - Destination input
  - Material date range picker (check-in/check-out)
  - Guest selector
  - Search button
- **Featured Realms** - Interactive realm cards with:
  - Realm image and description
  - Properties preview
  - "Explore Realm" button
- **Featured Properties** - Curated properties from all realms
- **Value Propositions** - Trust badges and service highlights

### Realm Detail Page (`/realm/:name`)
**Comprehensive realm exploration page** featuring:
1. **Hero Section**
   - Realm banner image
   - Realm name and description
   - Medieval-themed typography

2. **Property Filters**
   - Price range selector
   - Rating filter
   - Property type filter (Castles, Inns, Resorts)
   - Interactive map (coming soon)

3. **Property Listings**
   - Grid view of all realm properties
   - Property cards with:
     - High-quality images
     - Property name and description
     - Rating badge
     - Starting price
     - Quick view options

4. **Sorting Options**
   - Recommended (default)
   - Price (Low to High)
   - Rating

### Resort Detail Page (`/resort/:id`)
**Comprehensive property page** inspired by Booking.com hotel pages:

#### Sections:
1. **Hero with Image Gallery**
   - Large hero image with resort name overlay
   - Thumbnail gallery (6+ images)
   - Rating badge and location

2. **Property Highlights**
   - Visual facility grid (Pool, Restaurant, WiFi, Parking, Spa, etc.)
   - 8 key amenities with icons

3. **About This Property**
   - Detailed resort description
   - Multi-paragraph storytelling

4. **Available Rooms**
   - 3 room types (Stark Suite, Direwolf Den, Family Quarters)
   - Room images, descriptions, capacity
   - Amenities badges
   - Per-night pricing
   - Selection functionality

5. **Guest Reviews**
   - Review category scores (Staff, Facilities, Cleanliness, Comfort, etc.)
   - Individual review cards with ratings, dates, comments
   - Country flags

6. **Nearby Attractions**
   - Distance indicators
   - Local landmarks and activities

7. **House Rules**
   - Check-in/out times
   - Cancellation policy
   - Children and pets policies

8. **Sticky Booking Card** (Sidebar)
   - Date pickers with validation
   - Guest count selector
   - Selected room display
   - Price calculation
   - Reserve button
   - Trust badges

## 🎨 UI Framework and Styling

### Dependencies
```json
{
  "@angular/material": "^15.2.9",
  "@angular/cdk": "^15.2.9",
  "bootstrap": "^5.3.8"
}
```

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

Alternatively (and currently also enabled), Bootstrap is imported via SCSS for theming and variables:

```scss
// src/styles.scss
@import 'bootstrap/scss/bootstrap';
```

Note: Including both the compiled CSS (via angular.json) and SCSS import can duplicate styles. It's fine during early development; feel free to remove the CSS entry in angular.json later and rely solely on the SCSS import.

### Layout Components

1. **Vertical Layout** (`vertical-layout.component.ts`)
   - Primary wrapper used by the router
   - Renders the Navbar and a full-width content area (no sidebar)
   - Minimal padding and full-height page shell

2. **Navbar** (`navbar.component.ts`)
   - Responsive Bootstrap navbar
   - Renders menu items based on role-aware `MENU` configuration
   - Collapses on mobile devices; supports active route highlighting

3. **Footer** (`footer.component.ts`)
   - Responsive footer with grid system
   - Custom styling for links and hover states
   - Dynamic copyright year

### Role‑Based Menu

- Types live in `src/app/menu/menu.types.ts`.
- Configuration lives in `src/app/menu/menu.config.ts` as `MENU`.
- Roles are provided by `src/app/services/auth.service.ts` (stub returns `['Admin']`).
- The Navbar filters `MENU` by the current user's roles and renders allowed links.

Add a new menu item:

```ts
// src/app/menu/menu.config.ts
{
   id: 'reports',
   title: 'Reports',
   type: 'item',
   url: '/reports',
   role: ['Admin', 'User']
}
```

Make it admin-only by setting `role: ['Admin']`.

### Angular Material Components
The application uses Material Design for advanced UI components:

```typescript
// Imported Material modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
```

**Key Features:**
- Date range picker with validation
- Min/max date constraints
- Clear date button
- Material form fields
- CDK overlay system (z-index: 1200)

### Styling Architecture

1. **Global Styles** (`src/styles.scss`)
   - Bootstrap SCSS import
   - Material theme (indigo-pink)
   - Game of Thrones font system (Cinzel/Trajan Pro)
   - Base reset and typography
   - CDK overlay z-index adjustments
   - Responsive breakpoints

2. **Component-Specific Styles**
   - Scoped SCSS files per component
   - Hero sections with gradients and overlays
   - Card hover effects and transitions
   - Custom Material form field styling
   - Responsive image galleries

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

## 🚀 Routing

```typescript
const routes: Routes = [
  {
    path: '',
    component: VerticalLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'resort/:id', component: ResortDetailComponent },
      { path: 'realm/:name', component: RealmDetailComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];
```

**Navigation Flow:**
1. Home page displays featured realms and properties
2. Two primary navigation paths:
   - **Realm Exploration:**
     1. Click "Explore The North" (or any realm)
     2. Navigate to `/realm/the-north`
     3. View all properties within that realm
     4. Filter and sort realm properties
   - **Direct Property View:**
     1. Click "View" on any property card
     2. Navigate to `/resort/winterfell`
     3. View property details and book

## 📦 Key Features Implementation

### 1. Date Range Picker
```typescript
// Material date range with validation
<mat-date-range-input [rangePicker]="picker" [min]="minCheckInDate">
  <input matStartDate [(ngModel)]="checkInDate" (dateChange)="onCheckInMatChange()">
  <input matEndDate [(ngModel)]="checkOutDate" [min]="minCheckOutDate">
</mat-date-range-input>
```

**Features:**
- Min date constraint (today for check-in)
- Dynamic min checkout date (1 day after check-in)
- Clear dates button
- Opens on click/focus
- Auto-validation (clears invalid selections)

### 2. Resort Search
```typescript
// Search form model
{
  realmOrDestination: string;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  guests: number;
}
```

### 3. Room Selection
```typescript
// Room types with pricing and amenities
{
  name: 'Stark Suite',
  description: 'Spacious suite with mountain views',
  capacity: 2,
  pricePerNight: 8999,
  amenities: ['King Bed', 'Mountain View', 'Fireplace', 'Balcony']
}
```

### 4. Review System
```typescript
// Review categories with scores
{
  reviewCategories: [
    { name: 'Staff', score: 9.2 },
    { name: 'Facilities', score: 8.9 },
    { name: 'Cleanliness', score: 9.5 }
  ]
}
```

## 🎭 Game of Thrones Theming

### Font Implementation
```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Themed Elements
- **Navbar Brand**: "WESTEROS" in uppercase Cinzel
- **Realm Badges**: The North, Dorne, The Vale, Westerlands
- **Room Names**: Stark Suite, Direwolf Den, Family Quarters
- **Location Names**: Northern Mountains, Ice Dragon Peak, Winterfell Castle Ruins
- **Medieval Icons**: 🏰 🔥 🎿 🏔️

### Visual Style
- Dark gradients inspired by GoT opening
- Textured overlays on hero sections
- Wide letter-spacing for dramatic effect
- Stone/rustic color palette
- Shadow effects for depth

## 🛠️ Common Tasks

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
- Sticky booking card on desktop (position: sticky)
- Collapsed card sections on mobile
- Responsive image galleries
- Test across different device sizes

## 🔮 Future Enhancements

### Phase 1 (Current) ✅
- [x] Home page with search functionality
- [x] Material date range picker
- [x] Featured realms and properties
- [x] Resort detail page
- [x] Realm detail page with filters
- [x] Game of Thrones theming
- [x] Responsive layout

### Phase 2 (Planned)
- [ ] Backend API integration
- [ ] Real resort data from database
- [ ] Search results page with filters
- [ ] User authentication and profiles
- [ ] Booking confirmation flow
- [ ] Payment integration
- [ ] Admin dashboard for resort owners
- [ ] Review submission system
- [ ] Email notifications
- [ ] Booking management

### Phase 3 (Future)
- [ ] Multi-language support
- [ ] Currency conversion
- [ ] Map integration
- [ ] Virtual tours (360° images)
- [ ] Loyalty program (Genius-style)
- [ ] Mobile app (Ionic/Capacitor)
- [ ] AI-powered recommendations
- [ ] Social media sharing
- [ ] Gift cards/vouchers

## 📊 Mock Data

Currently using structured mock data for demonstration:

```typescript
// Realm Structure
{
  name: 'The North',
  description: 'Rugged beauty and ancient forests await',
  properties: [
    {
      id: 'winterfell',
      name: 'Winterfell Castle Hotel',
      rating: 4.8,
      priceFrom: 5999,
      description: 'Ancient stronghold turned luxury hotel'
    },
    {
      id: 'white-harbor',
      name: 'White Harbor Inn',
      rating: 4.7,
      priceFrom: 4999,
      description: 'Seaside luxury in the North\'s largest port'
    }
    // More properties...
  ]
}

// Available Realms
1. The North - Castles and mountain retreats
2. Dorne - Desert palaces and water gardens
3. The Vale - Mountain fortresses and coastal keeps
```

## 🎨 Design Inspiration

- **Booking.com** - Layout structure, search interface, property pages
- **Game of Thrones** - Theming, fonts, naming conventions
- **Material Design** - Date pickers, form fields, interactive elements
- **Bootstrap** - Responsive grid, cards, utilities

## 📚 Tech Stack Summary

| Technology | Purpose |
|------------|---------|
| **Angular 15** | Frontend framework |
| **TypeScript 4.9** | Type-safe JavaScript |
| **Bootstrap 5.3** | CSS framework & components |
| **Angular Material 15** | Date pickers & advanced UI |
| **SCSS** | Styling with variables |
| **RxJS 7.8** | Reactive programming |
| **Google Fonts (Cinzel)** | Game of Thrones typography |

## 📝 Recent Updates

### Latest Changes (November 2025)
1. ✅ Implemented Game of Thrones font system (Trajan Pro/Cinzel)
2. ✅ Created resort detail page component
3. ✅ Added Material date range picker
4. ✅ Redesigned home page with Booking.com-inspired layout
5. ✅ Added mock data for realms and resorts
6. ✅ Implemented room selection functionality
7. ✅ Created review system with categories
8. ✅ Added sticky booking card with validation
9. ✅ Configured routing for resort details
 
### Hotfixes & Dev Notes (Nov 9-10, 2025)
- ✅ Removed the SPA redirect script from `src/index.html` during development to avoid Quirks Mode and runtime selector issues. Use `src/404.html` (the SPA redirect) only for GitHub Pages production deployments.
- ✅ Cleaned up template optional-chaining in `src/app/resort-detail/resort-detail.component.html` to remove unnecessary `?.` forms where the component guarantees `property` is defined after load (reduces NG8107 warnings).
- ✅ Temporarily disabled `buildOptimizer` for production in `angular.json` to avoid a minifier-related "unterminated regular expression" syntax problem that appeared in some CI-built bundles; this is a targeted workaround pending further investigation.
- ℹ️ If you see "ERROR Error: The selector \"app-root\" did not match any elements" in the browser console, refresh the dev server after changes to `index.html` and ensure `<!doctype html>` is present (Quirks Mode causes Angular runtime issues).

## 🤝 Contributing

This is a personal project. For questions or suggestions, please contact the repository owner.

## 📄 License

This project is private and not licensed for public use.

## 🔗 Further Help

- [Angular CLI Documentation](https://angular.io/cli)
- [Angular Environment Guide](https://angular.io/guide/build)
- [Angular Material](https://material.angular.io/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Google Fonts](https://fonts.google.com/)
- [ng-openapi-gen Documentation](https://github.com/cyclosproject/ng-openapi-gen)

---

**Built with ❄️ in the Seven Kingdoms**
