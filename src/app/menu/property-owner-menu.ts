import type { CoreMenuItem } from './menu.types';

export const MENU: CoreMenuItem[] = [
  {
    id: 'vendor-dashboard',
    title: 'Dashboard',
    type: 'item',
    icon: 'dashboard',
    url: '/property-owner/dashboard',
    role: ['Vendor', 'Host']
  },
  {
    id: 'manage-properties',
    title: 'My Properties',
    type: 'item',
    icon: 'business',
    url: '/property-owner/properties',
    role: ['Vendor', 'Host']
  },
  {
    id: 'property-bookings',
    title: 'Bookings',
    type: 'item',
    icon: 'calendar_today',
    url: '/property-owner/bookings',
    role: ['Vendor', 'Host']
  }
];
