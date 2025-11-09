import type { CoreMenuItem } from './menu.types';

export const MENU: CoreMenuItem[] = [
  // Public routes (no role required)
  {
    id: 'home',
    title: 'Home',
    type: 'item',
    icon: 'home',
    url: '/'
  },

  // User/Customer routes
  {
    id: 'my-bookings',
    title: 'My Bookings',
    type: 'item',
    icon: 'calendar',
    url: '/my-bookings',
    role: ['User']
  },
  {
    id: 'account',
    title: 'My Account',
    type: 'item',
    icon: 'person',
    url: '/account',
    role: ['User']
  },

  // Property Owner/Vendor routes
  {
    id: 'vendor-dashboard',
    title: 'Property Dashboard',
    type: 'item',
    icon: 'dashboard',
    url: '/vendor/dashboard',
    role: ['Vendor']
  },
  {
    id: 'manage-properties',
    title: 'Manage Properties',
    type: 'item',
    icon: 'business',
    url: '/vendor/properties',
    role: ['Vendor']
  },
  {
    id: 'bookings',
    title: 'Bookings',
    type: 'item',
    icon: 'book',
    url: '/vendor/bookings',
    role: ['Vendor']
  },

  // Admin routes
  {
    id: 'admin',
    title: 'Admin',
    type: 'section',
    role: ['Admin'],
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'dashboard',
        url: '/admin/dashboard',
        role: ['Admin']
      },
      {
        id: 'users',
        title: 'Users',
        type: 'item',
        icon: 'people',
        url: '/admin/users',
        role: ['Admin']
      },
      {
        id: 'properties',
        title: 'Properties',
        type: 'item',
        icon: 'business',
        url: '/admin/properties',
        role: ['Admin']
      }
    ]
  }
];
