import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Facility {
  icon: string;
  name: string;
}

interface Review {
  author: string;
  rating: number;
  date: string;
  comment: string;
  country: string;
}

interface RoomType {
  name: string;
  description: string;
  capacity: number;
  pricePerNight: number;
  amenities: string[];
  image: string;
}

@Component({
  selector: 'app-resort-detail',
  templateUrl: './resort-detail.component.html',
  styleUrls: ['./resort-detail.component.scss']
})
export class ResortDetailComponent implements OnInit {
  // Resort basic info
  resortName = 'Winterfell Lodge';
  realm = 'The North';
  location = 'Northern Mountains, The North Kingdom';
  rating = 4.8;
  reviewCount = 256;
  priceFrom = 5999;
  
  // Image gallery
  mainImage = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop';
  galleryImages = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop'
  ];
  
  // Property highlights
  highlights: Facility[] = [
    { icon: '🏊', name: 'Outdoor Pool' },
    { icon: '🍽️', name: 'Restaurant' },
    { icon: '📶', name: 'Free WiFi' },
    { icon: '🅿️', name: 'Free Parking' },
    { icon: '💆', name: 'Spa & Wellness' },
    { icon: '🏔️', name: 'Mountain View' },
    { icon: '🔥', name: 'Fireplace' },
    { icon: '🎿', name: 'Ski Equipment' }
  ];
  
  // About description
  description = `Located in the majestic Northern Mountains, Winterfell Lodge offers an authentic Game of Thrones experience with modern luxury amenities. Surrounded by ancient forests and snow-capped peaks, this resort features themed accommodations inspired by the legendary House Stark. 

Guests can enjoy spectacular mountain views, a heated outdoor pool, and a full-service spa. The on-site restaurant serves Northern cuisine with a modern twist, featuring locally sourced ingredients and traditional recipes passed down through generations.

Each room is elegantly appointed with rustic wooden furnishings, stone fireplaces, and floor-to-ceiling windows showcasing the breathtaking landscape. Perfect for adventure seekers and families alike, the resort offers guided hiking tours, winter sports activities, and medieval-themed entertainment.`;

  // Most popular facilities
  popularFacilities = [
    'Outdoor Swimming Pool',
    'Spa and Wellness Centre',
    'Restaurant & Bar',
    'Room Service',
    'Free WiFi',
    'Free Parking',
    'Family Rooms',
    'Non-smoking Rooms',
    'Fitness Center',
    'Tour Desk'
  ];
  
  // Resort Features
  resortFeatures = [
    {
      category: 'Accommodation',
      description: 'Luxurious castle accommodations featuring authentic medieval architecture with modern comforts',
      amenities: ['Themed Suites', 'Private Towers', 'Castle Views', 'Modern Heating']
    },
    {
      category: 'Dining',
      description: 'Multiple dining venues serving Northern cuisine with locally-sourced ingredients',
      amenities: ['Great Hall Restaurant', 'Winterfell Tavern', 'Private Dining', 'Room Service']
    },
    {
      category: 'Activities',
      description: 'Immersive experiences that bring the North to life',
      amenities: ['Archery Range', 'Horse Riding', 'Castle Tours', 'Winter Sports']
    },
    {
      category: 'Wellness',
      description: 'Relaxation and rejuvenation in our castle spa',
      amenities: ['Hot Spring Baths', 'Massage Services', 'Indoor Pool', 'Fitness Center']
    }
  ];
  
  // Guest reviews
  reviews: Review[] = [
    {
      author: 'Arya S.',
      rating: 5,
      date: '2025-10-15',
      comment: 'Absolutely magical experience! The themed rooms are incredible and the staff made us feel like royalty. The mountain views are breathtaking.',
      country: 'India'
    },
    {
      author: 'Jon T.',
      rating: 4.5,
      date: '2025-10-10',
      comment: 'Great location for winter activities. The spa was excellent and the food was outstanding. Winter is coming, and this is the perfect place to experience it!',
      country: 'USA'
    },
    {
      author: 'Sansa L.',
      rating: 5,
      date: '2025-09-28',
      comment: 'The attention to detail in the Game of Thrones theming is phenomenal. Every corner has something special. Will definitely return!',
      country: 'UK'
    }
  ];
  
  // Review categories
  reviewCategories = [
    { name: 'Staff', score: 9.2 },
    { name: 'Facilities', score: 8.9 },
    { name: 'Cleanliness', score: 9.5 },
    { name: 'Comfort', score: 9.1 },
    { name: 'Value for Money', score: 8.6 },
    { name: 'Location', score: 9.4 },
    { name: 'Free WiFi', score: 8.8 }
  ];
  
  // House rules
  houseRules = {
    checkIn: '2:00 PM',
    checkOut: '11:00 AM',
    childrenPolicy: 'Children of all ages are welcome',
    petsPolicy: 'Pets are not allowed',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in'
  };
  
  // Nearby attractions
  nearbyAttractions = [
    { name: 'Winterfell Castle Ruins', distance: '5 km' },
    { name: 'Northern Forest Trail', distance: '2 km' },
    { name: 'Ice Dragon Peak', distance: '15 km' },
    { name: 'Stark Museum', distance: '8 km' }
  ];
  
  // Booking form
  checkInDate: Date | null = null;
  checkOutDate: Date | null = null;
  guests = 2;
  
  // Booking calculations
  numberOfNights = 0;
  totalPrice = 0;
  
  // Date constraints
  minCheckInDate: Date = new Date();
  minCheckOutDate: Date = this.addDays(new Date(), 1);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // In real app, fetch resort data based on route params
    const resortId = this.route.snapshot.paramMap.get('id');
    // TODO: Load resort data from API
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

  setMainImage(image: string): void {
    // Convert thumbnail URL to main image URL
    this.mainImage = image.replace('w=400&h=300', 'w=1200&h=800');
  }
  
  getStarArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }
  
  bookNow(): void {
    if (!this.checkInDate || !this.checkOutDate) {
      alert('Please select dates for your stay');
      return;
    }
    
    console.log('Booking:', {
      resort: this.resortName,
      checkIn: this.checkInDate,
      checkOut: this.checkOutDate,
      guests: this.guests,
      nights: this.numberOfNights,
      totalPrice: this.totalPrice,
      pricePerNight: this.priceFrom
    });
    
    // TODO: Navigate to booking confirmation page
    alert(`Booking confirmed!\n\nStay Details:\n${this.numberOfNights} nights at ₹${this.priceFrom.toLocaleString()} per night\nTotal: ₹${this.totalPrice.toLocaleString()}`);
  }
  
  onCheckInDateChange(): void {
    if (this.checkInDate) {
      this.minCheckOutDate = this.addDays(this.checkInDate, 1);
      // Do not auto-set checkout; let user pick the end date to avoid surprises
      if (this.checkOutDate && this.checkOutDate < this.minCheckOutDate) {
        this.checkOutDate = null;
      }
    } else {
      this.minCheckOutDate = this.addDays(new Date(), 1);
    }
    this.updateBookingCalculations();
  }

  clearDates(): void {
    this.checkInDate = null;
    this.checkOutDate = null;
    this.minCheckOutDate = this.addDays(new Date(), 1);
    this.updateBookingCalculations();
  }

  onCheckOutDateChange(): void {
    this.updateBookingCalculations();
  }

  private updateBookingCalculations(): void {
    if (this.checkInDate && this.checkOutDate) {
      this.numberOfNights = Math.ceil(
        (this.checkOutDate.getTime() - this.checkInDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      this.totalPrice = this.numberOfNights * this.priceFrom;
    } else {
      this.numberOfNights = 0;
      this.totalPrice = 0;
    }
  }
  
  private addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
