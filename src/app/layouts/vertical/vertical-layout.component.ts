import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-layout',
  template: `
    <div class="vertical-layout">
      <app-navbar></app-navbar>
      <div class="content-wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .vertical-layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .content-wrapper {
      flex: 1;
      padding: 20px;
    }
  `]
})
export class VerticalLayoutComponent { }
