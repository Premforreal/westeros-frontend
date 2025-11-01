import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Property {
  id: string;
  name: string;
  rating: number;
  priceFrom: number;
  image: string;
  description: string;
}

interface Realm {
  name: string;
  description: string;
  image: string;
  properties: Property[];
}

@Component({
  selector: 'app-realm-detail',
  templateUrl: './realm-detail.component.html',
  styleUrls: ['./realm-detail.component.scss']
})
export class RealmDetailComponent implements OnInit {
  realm: Realm = {
    name: '',
    description: '',
    image: '',
    properties: []
  };

  realms = [
    { 
      name: 'The North', 
      description: 'Experience the rugged beauty of the North, where ancient forests meet snow-capped mountains. Our collection of properties in the North offers authentic experiences from historic castles to coastal retreats.', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      properties: [
        { 
          id: 'winterfell',
          name: 'Winterfell Castle Hotel', 
          rating: 4.8, 
          priceFrom: 5999, 
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
          description: 'Ancient stronghold of House Stark turned luxury hotel'
        },
        {
          id: 'white-harbor',
          name: 'White Harbor Inn',
          rating: 4.7,
          priceFrom: 4999,
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
          description: 'Seaside luxury in the North\'s largest port'
        },
        {
          id: 'dreadfort',
          name: 'The Dreadfort Keep',
          rating: 4.6,
          priceFrom: 4499,
          image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
          description: 'Historic castle with modern amenities'
        },
        {
          id: 'karhold',
          name: 'Karhold Lodge',
          rating: 4.5,
          priceFrom: 3999,
          image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
          description: 'Cozy mountain retreat with authentic Northern charm'
        }
      ]
    },
    { 
      name: 'Dorne', 
      description: 'Discover the exotic allure of Dorne, where sun-soaked landscapes meet luxurious comfort. Our Dornish properties combine rich culture with modern indulgence.', 
      image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&h=600&fit=crop',
      properties: [
        {
          id: 'sunspear',
          name: 'Sunspear Palace Resort',
          rating: 4.9,
          priceFrom: 7499,
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
          description: 'Luxury resort in the heart of Dorne'
        },
        {
          id: 'water-gardens',
          name: 'Water Gardens Retreat',
          rating: 4.8,
          priceFrom: 6999,
          image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
          description: 'Peaceful oasis with private pools'
        },
        {
          id: 'starfall',
          name: 'Starfall Beach Resort',
          rating: 4.7,
          priceFrom: 5999,
          image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=300&fit=crop',
          description: 'Coastal luxury with stunning sea views'
        }
      ]
    },
    { 
      name: 'The Vale', 
      description: 'Soar to new heights in the Vale of Arryn, where majestic mountains create an unforgettable backdrop. Experience luxury at altitude in our carefully curated mountain properties.', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      properties: [
        {
          id: 'eyrie',
          name: 'The Eyrie Resort',
          rating: 4.7,
          priceFrom: 6999,
          image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
          description: 'Exclusive mountaintop resort with stunning views'
        },
        {
          id: 'gates-moon',
          name: 'Gates of the Moon Lodge',
          rating: 4.6,
          priceFrom: 5499,
          image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
          description: 'Winter residence at the foot of the mountain'
        },
        {
          id: 'runestone',
          name: 'Runestone Castle Hotel',
          rating: 4.5,
          priceFrom: 4999,
          image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop',
          description: 'Historic coastal castle with bronze age ruins'
        }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the realm name from the URL
    const realmName = this.route.snapshot.paramMap.get('name');
    if (realmName) {
      // Find the matching realm
      const foundRealm = this.realms.find(r => 
        r.name.toLowerCase() === realmName.toLowerCase().replace('-', ' ')
      );
      if (foundRealm) {
        this.realm = foundRealm;
      }
    }
  }

  getRatingStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }
}