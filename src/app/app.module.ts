import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeComponent } from './home/home.component';
import { ResortDetailComponent } from './resort-detail/resort-detail.component';
import { RealmDetailComponent } from './realm-detail/realm-detail.component';
import { HomeComponent as PropertyOwnerHomeComponent } from './property-owner/home/home.component';
import { DashboardComponent } from './property-owner/dashboard/dashboard.component';
import { PropertiesComponent } from './property-owner/properties/properties.component';
import { BookingsComponent } from './property-owner/bookings/bookings.component';
import { ReportsComponent } from './property-owner/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResortDetailComponent,
    RealmDetailComponent,
    PropertyOwnerHomeComponent,
    DashboardComponent,
    PropertiesComponent,
    BookingsComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
