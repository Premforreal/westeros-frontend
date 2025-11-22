/* tslint:disable */
/* eslint-disable */
export interface MenuItem {
  children?: Array<MenuItem>;
  id?: string;
  role?: Array<string>;
  title?: string;
  type?: 'item' | 'group' | 'submenu';
  url?: string;
}
