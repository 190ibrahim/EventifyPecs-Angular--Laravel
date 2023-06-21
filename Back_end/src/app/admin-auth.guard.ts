import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Retrieve role from local storage or session storage
    const role = localStorage.getItem('admin'); // or sessionStorage.getItem('role');
    // Check if the user has the admin role
    if (role === 'admin') {
      return true;
    } else {
      // Redirect to unauthorized page or login page
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}
