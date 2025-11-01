import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `<div class="sidebar bg-secondary text-white p-3" style="width: 220px;">
    <ul class="nav flex-column">
      <li class="nav-item"><a class="nav-link text-white" href="#">Dashboard</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">Apps</a></li>
    </ul>
  </div>`
})
export class SidebarComponent {}
