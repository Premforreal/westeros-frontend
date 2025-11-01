import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerticalLayoutComponent } from './layouts/vertical/vertical-layout.component';
import { ResortDetailComponent } from './resort-detail/resort-detail.component';
import { RealmDetailComponent } from './realm-detail/realm-detail.component';

const routes: Routes = [
  {
    path: '',
    component: VerticalLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'resort/:id', component: ResortDetailComponent },
      { path: 'realm/:name', component: RealmDetailComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
