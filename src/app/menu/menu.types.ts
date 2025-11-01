export type MenuItemType = 'section' | 'item';

export interface CoreMenuItem {
  id: string;
  title: string;
  type: MenuItemType;
  icon?: string;
  url?: string;
  role?: string[]; // roles that can see this item; omit for public
  children?: CoreMenuItem[];
}
