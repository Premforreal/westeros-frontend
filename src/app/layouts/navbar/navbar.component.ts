import { Component, OnInit } from '@angular/core';
import { MENU } from '../../menu/menu.config';
import type { CoreMenuItem } from '../../menu/menu.types';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuLinks: Array<{ title: string; url: string }>=[];

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const roles = this.auth.getUserRoles();
    const filtered = this.filterByRole(MENU, roles);
    this.menuLinks = this.flattenToLinks(filtered);
  }

  private filterByRole(items: CoreMenuItem[], roles: string[]): CoreMenuItem[] {
    const hasAccess = (item: CoreMenuItem) => !item.role || item.role.some(r => roles.includes(r));
    return items
      .map(item => {
        const children = item.children ? this.filterByRole(item.children, roles) : undefined;
        return { ...item, children } as CoreMenuItem;
      })
      .filter(item => hasAccess(item) || (item.children && item.children.length > 0));
  }

  private flattenToLinks(items: CoreMenuItem[]): Array<{ title: string; url: string }>{
    const links: Array<{ title: string; url: string }>=[];
    for (const item of items) {
      if (item.type === 'item' && item.url) {
        links.push({ title: item.title, url: item.url });
      }
      if (item.children) {
        links.push(...this.flattenToLinks(item.children));
      }
    }
    return links;
  }
}