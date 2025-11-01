import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // TODO: Replace with real auth/role retrieval later
  getUserRoles(): string[] {
    return ['Admin'];
  }
}
