import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_data';

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  // Get all roles for the current user
  getUserRoles(): string[] {
    try {
      const userData = JSON.parse(localStorage.getItem(this.USER_KEY) || '{}');
      return userData.roles || [];
    } catch {
      return [];
    }
  }

  // Get primary role (first role in list)
  getPrimaryRole(): string | undefined {
    const roles = this.getUserRoles();
    return roles.length > 0 ? roles[0] : undefined;
  }

  // Logout user
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  // For development/testing - sets mock data
  setMockAuthData(token: string, userData: any): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
  }
}
