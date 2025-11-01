import type { CoreMenuItem } from './menu.types';

export const MENU: CoreMenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    icon: 'home',
    url: '/dashboard',
    role: ['Admin', 'User']
  },
  {
    id: 'apps',
    title: 'Apps',
    type: 'section',
    role: ['Admin'],
    children: [
      {
        id: 'calendar',
        title: 'Calendar',
        type: 'item',
        icon: 'calendar',
        url: '/apps/calendar',
        role: ['Admin']
      }
    ]
  }
];
