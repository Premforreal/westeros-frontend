import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { Realm } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Form model
  realmOrDestination = '';
  checkInDate: Date | null = null;
  checkOutDate: Date | null = null;
  guests = 2;

  // Date constraints
  minCheckInDate: Date = new Date();
  minCheckOutDate: Date = this.addDays(new Date(), 1);

  // Date range UI state (single-field popover)
  showDatePanel = false; // no longer used with Material, kept harmless

  // Featured Realms with their properties
  featuredRealms: Realm[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    console.log('Initializing HomeComponent...');
    this.propertyService.getRealms().subscribe(realms => {
      console.log('Received realms:', realms);
      this.featuredRealms = realms;
      console.log('Featured properties:', this.featuredProperties);
    });
  }

  // Get all featured properties across realms for the homepage
  get featuredProperties() {
    return this.featuredRealms.flatMap(realm => 
      realm.properties.map(property => ({
        ...property,
        realm: realm.name
      }))
    ).slice(0, 4); // Show only first 4 properties
  }

  get dateRangeDisplay(): string {
    const fmt = (d: Date) => `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`;
    return this.checkInDate && this.checkOutDate ? `${fmt(this.checkInDate)} — ${fmt(this.checkOutDate)}` : '';
  }

  onCheckInMatChange(): void {
    if (this.checkInDate) {
      this.minCheckOutDate = this.addDays(this.checkInDate, 1);
      // Do not auto-set checkout; let user pick the end date to avoid surprises
      if (this.checkOutDate && this.checkOutDate < this.minCheckOutDate) {
        this.checkOutDate = null;
      }
    } else {
      this.minCheckOutDate = this.addDays(new Date(), 1);
    }
  }

  applyDateRange(): void {
    // Close the date panel after selection
    this.showDatePanel = false;
  }

  clearDates(): void {
    this.checkInDate = null;
    this.checkOutDate = null;
    this.minCheckOutDate = this.addDays(new Date(), 1);
  }

  search(): void {
    // Placeholder: wire to router or service later
    // For now, just a simple no-op that could log or validate
    // console.log({ destination: this.realmOrDestination, checkIn: this.checkIn, checkOut: this.checkOut, guests: this.guests });
  }

  private addDays(date: Date, days: number): Date {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  }

  private formatDate(date: Date): string {
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const d = date.getDate().toString().padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
}