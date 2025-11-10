import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerticalLayoutComponent } from './layouts/vertical/vertical-layout.component';
import { ResortDetailComponent } from './resort-detail/resort-detail.component';
import { RealmDetailComponent } from './realm-detail/realm-detail.component';
import { HomeComponent as PropertyOwnerHomeComponent } from './property-owner/home/home.component';
import { DashboardComponent } from './property-owner/dashboard/dashboard.component';
import { PRODUCT } from '../product-configurations/product-selection';

const routes: Routes = PRODUCT === 'property-owner' ? [
  {
    path: '',
    component: VerticalLayoutComponent,
    children: [
      { path: '', component: PropertyOwnerHomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '**', redirectTo: '' }
    ]
  }
] : [
  {
    path: '',
    component: VerticalLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'resort/:id', component: ResortDetailComponent },
      { path: 'realm/:id', component: RealmDetailComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
