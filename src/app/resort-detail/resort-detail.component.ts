import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { Property } from '../types';

@Component({
  selector: 'app-resort-detail',
  templateUrl: './resort-detail.component.html',
  styleUrls: ['./resort-detail.component.scss']
})
export class ResortDetailComponent implements OnInit {
  property: Property | undefined;
  loading = true;
  error = false;

  // Booking form state
  checkInDate: Date | null = null;
  checkOutDate: Date | null = null;
  guests = 2;

  // Booking calculations
  numberOfNights = 0;
  totalPrice = 0;

  // Date constraints
  minCheckInDate: Date = new Date();
  minCheckOutDate: Date = this.addDays(new Date(), 1);

  // Gallery index
  currentImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const propertyId = params['id'];
      console.log('ResortDetail route param id=', propertyId);
      if (!propertyId) {
        this.loading = false;
        this.error = true;
        return;
      }

      this.loading = true;
      this.propertyService.getProperty(propertyId).subscribe({
        next: (p) => {
          console.log('Loaded property', p);
          this.property = p;
          this.loading = false;
          if (this.property) {
            this.currentImageIndex = 0;
            this.updateTotalPrice();
          } else {
            this.error = true;
          }
        },
        error: (err) => {
          console.error('Error loading property', err);
          this.loading = false;
          this.error = true;
        }
      });
    });
  }

  setMainImage(image: string): void {
    if (!this.property) return;
    // find index of thumbnail in gallery and set currentImageIndex
    const idx = this.property.galleryImages.indexOf(image);
    if (idx >= 0) this.currentImageIndex = idx;
  }

  get mainImage(): string {
    return this.property?.galleryImages?.[this.currentImageIndex] || this.property?.mainImage || '';
  }

  nextImage(): void {
    if (!this.property) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.property.galleryImages.length;
  }

  previousImage(): void {
    if (!this.property) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.property.galleryImages.length) % this.property.galleryImages.length;
  }

  onCheckInDateChange(): void {
    if (this.checkInDate) {
      this.minCheckOutDate = this.addDays(this.checkInDate, 1);
      if (this.checkOutDate && this.checkOutDate < this.minCheckOutDate) {
        this.checkOutDate = null;
      }
    } else {
      this.minCheckOutDate = this.addDays(new Date(), 1);
    }
    this.updateNumberOfNights();
  }

  onCheckOutDateChange(): void {
    this.updateNumberOfNights();
  }

  updateNumberOfNights(): void {
    if (this.checkInDate && this.checkOutDate) {
      const diffTime = this.checkOutDate.getTime() - this.checkInDate.getTime();
      this.numberOfNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    } else {
      this.numberOfNights = 0;
    }
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    if (!this.property) {
      this.totalPrice = 0;
      return;
    }
    this.totalPrice = this.numberOfNights * this.property.priceFrom;
  }

  bookNow(): void {
    if (!this.property) return;
    if (!this.checkInDate || !this.checkOutDate) {
      alert('Please select dates for your stay');
      return;
    }
    console.log('Booking', {
      property: this.property.id,
      checkIn: this.checkInDate,
      checkOut: this.checkOutDate,
      nights: this.numberOfNights,
      pricePerNight: this.property.priceFrom,
      total: this.totalPrice
    });
    alert(`Booking confirmed!\\n\\n${this.property.name}\\n${this.numberOfNights} nights — Total: ₹${this.totalPrice.toLocaleString()}`);
  }

  clearDates(): void {
    this.checkInDate = null;
    this.checkOutDate = null;
    this.minCheckOutDate = this.addDays(new Date(), 1);
    this.updateNumberOfNights();
  }

  getRatingClass(rating: number): string {
    if (rating >= 9) return 'excellent';
    if (rating >= 8) return 'very-good';
    if (rating >= 7) return 'good';
    return 'average';
  }

  getRatingText(rating: number): string {
    if (rating >= 9) return 'Excellent';
    if (rating >= 8) return 'Very Good';
    if (rating >= 7) return 'Good';
    return 'Average';
  }

  private addDays(date: Date, days: number): Date {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  }
}
