import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay, map } from 'rxjs';
import { Realm, Property, SearchCriteria } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient) {}

  // Get all realms with their properties
  getRealms(): Observable<Realm[]> {
    console.log('Getting realms...');
    return this.http.get<{realms: Realm[]}>('assets/mock-data/properties.json')
      .pipe(
        map(response => {
          console.log('Raw response:', response);
          return response.realms;
        }),
        delay(500) // Simulate network delay
      );
  }

  // Get a specific realm by id
  getRealm(realmId: string): Observable<Realm | undefined> {
    return this.getRealms().pipe(
      map(realms => realms.find(realm => realm.id === realmId))
    );
  }

  // Get all properties (across all realms)
  getAllProperties(): Observable<Property[]> {
    return this.getRealms().pipe(
      map(realms => realms.flatMap(realm => realm.properties))
    );
  }

  // Get a specific property by id
  getProperty(propertyId: string): Observable<Property | undefined> {
    return this.getAllProperties().pipe(
      map(properties => properties.find(property => property.id === propertyId))
    );
  }

  // Search properties based on criteria
  searchProperties(criteria: SearchCriteria): Observable<Property[]> {
    return this.getAllProperties().pipe(
      map(properties => {
        return properties.filter(property => {
          // Match destination (realm or property name)
          if (criteria.destination) {
            const searchTerm = criteria.destination.toLowerCase();
            const matchesRealm = property.realm.toLowerCase().includes(searchTerm);
            const matchesName = property.name.toLowerCase().includes(searchTerm);
            if (!matchesRealm && !matchesName) return false;
          }

          // Match price range
          if (criteria.minPrice && property.priceFrom < criteria.minPrice) return false;
          if (criteria.maxPrice && property.priceFrom > criteria.maxPrice) return false;

          // Match rating
          if (criteria.rating && property.rating < criteria.rating) return false;

          return true;
        });
      }),
      delay(800) // Simulate network delay for search
    );
  }

  // Get featured properties
  getFeaturedProperties(limit: number = 4): Observable<Property[]> {
    return this.getAllProperties().pipe(
      map(properties => 
        // In a real API, this would be determined by business logic
        // For now, just return the first few properties
        properties.slice(0, limit)
      )
    );
  }

  // Get featured realms
  getFeaturedRealms(limit: number = 3): Observable<Realm[]> {
    return this.getRealms().pipe(
      map(realms => realms.slice(0, limit))
    );
  }
}