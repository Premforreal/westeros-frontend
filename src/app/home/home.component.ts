import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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

  // Featured data
  featuredRealms = [
    { name: 'The North', description: 'Rugged beauty and ancient forests await', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop' },
    { name: 'Dorne', description: 'Sun-soaked deserts and exotic luxury', image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&h=600&fit=crop' },
    { name: 'The Vale', description: 'Mountain peaks and alpine serenity', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop' }
  ];

  // Featured resorts data - clicking "View" navigates to /resort/:id
  featuredResorts = [
    { name: 'Winterfell Lodge', realm: 'The North', rating: 4.8, priceFrom: 5999, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop' },
    { name: 'Sunspear Retreat', realm: 'Dorne', rating: 4.9, priceFrom: 7499, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop' },
    { name: 'Eyrie Heights', realm: 'The Vale', rating: 4.7, priceFrom: 6999, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop' },
    { name: 'Casterly Rock Inn', realm: 'Westerlands', rating: 4.6, priceFrom: 4999, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop' }
  ];

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