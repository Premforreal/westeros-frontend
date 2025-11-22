## Westeros — Backend API (Mock) Specification

This document lists the backend APIs the frontend will call. Initially the backend will return hardcoded responses suitable for frontend development. Models and relationships will be refined later.

### Conventions
- Base URL: `/api`
- Responses use JSON.
- All endpoints return `{ success: boolean, data: <payload>, error?: string }` unless otherwise noted.

---

## Auth

### POST /api/auth/login
- Purpose: Authenticate user and return a token + user profile
- Request body:
  ```json
  { "email": "user@example.com", "password": "string" }
  ```
- Response (200):
  ```json
  {
    "success": true,
    "data": {
      "token": "<JWT-or-mock-token>",
      "user": {
        "id": "u_1",
        "email": "user@example.com",
        "name": "Arya Stark",
        "roles": ["User"]
      }
    }
  }
  ```

### POST /api/auth/logout
- Purpose: Invalidate token (mocked)
- Request body: none
- Response (200): `{ success: true, data: {} }`

---

## Users

### GET /api/users/:id
- Purpose: Get user profile
- Response (200): user object

### GET /api/users (query)
- Purpose: List users (paged)
- Query params: `page`, `limit`, `role`

---

## Properties (for owners)

### GET /api/properties
- Purpose: List properties (for owner or public)
- Query params: `ownerId`, `q`, `page`, `limit`
- Response: array of `Property` objects

### GET /api/properties/:id
- Purpose: Get a single property detail

### POST /api/properties
- Purpose: Create property (owner)
- Request: `PropertyCreate` payload

### PUT /api/properties/:id
- Purpose: Update property

### DELETE /api/properties/:id
- Purpose: Remove property (owner)

---

## Bookings

### GET /api/bookings
- Purpose: List bookings for user or property owner
- Query params: `userId`, `propertyId`, `page`, `limit`

### POST /api/bookings
- Purpose: Create a booking
- Request body: `BookingCreate`

### GET /api/bookings/:id

---

## Resorts & Realms

### GET /api/resorts
### GET /api/resorts/:id

### GET /api/realms
### GET /api/realms/:id

These return `Resort` and `Realm` objects used by the customer UI.

---

## Menu & Product Config

### GET /api/menu
- Purpose: Return menu config used client-side when dynamic
- Response: array of `MenuItem`

### GET /api/product-config
- Purpose: Return product-level settings (app name, links, login page url)

---

## Health / Ping

### GET /api/ping
- Purpose: Quick health check
- Response (200):
  ```json
  { "success": true, "data": { "message": "pong", "time": "2025-11-15T00:00:00Z" } }
  ```

---

## Models (initial drafts)

Note: these are flattened representations for frontend use. Relations (FKs) will be designed later.

- User
  - id: string
  - email: string
  - name: string
  - phone?: string
  - roles: string[]  // e.g., ["User"], ["PropertyOwner"]

- Property
  - id: string
  - ownerId: string
  - title: string
  - description: string
  - address: string
  - city: string
  - country: string
  - images: string[]
  - pricePerNight: number
  - amenities: string[]
  - status: string // e.g., active, inactive

- Booking
  - id: string
  - propertyId: string
  - userId: string
  - startDate: string (ISO)
  - endDate: string (ISO)
  - totalAmount: number
  - status: string // pending, confirmed, cancelled

- Resort
  - id: string
  - name: string
  - description: string
  - location: string
  - images: string[]

- Realm
  - id: string
  - name: string
  - description: string

- MenuItem
  - id: string
  - title: string
  - type: 'item' | 'group' | 'submenu'
  - url?: string
  - role?: string[]
  - children?: MenuItem[]

- ProductConfig
  - appName: string
  - appTitle?: string
  - faviconUrl?: string
  - appLogoImage?: string
  - loginPageUrl?: string

---

## Example: Hardcoded response notes
- `/api/resorts` -> return an array of 3 resorts with images and ids
- `/api/properties?ownerId=u_owner1` -> returns two mock properties
- `/api/auth/login` -> accept `owner@westeros.test` and `customer@westeros.test` with different roles

---

## Next steps
- Create a small mock server (express or `json-server`) returning the above payloads.
- Move model shapes to a shared `backend/models` folder for validation.
- Replace hardcoded mocks with simple in-memory store and allow basic mutations (POST/PUT/DELETE) for development.
