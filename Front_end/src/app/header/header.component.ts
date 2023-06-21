import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages } from './header-dummy-data';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userLoggedIn = false;
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  isAdmin: boolean = false;
  canShowSearchAsOverlay = false;
  selectedLanguage: any;
  languages = languages;
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  @HostListener('window: resize', ['$event']) onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }
  username: any;
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    console.log(this.username);

    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
    if (localStorage.getItem('admin')) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
    if (localStorage.getItem('user_id')) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }

  signin() {
    this.router.navigate(['auth/login']);
  }
  register() {
    this.router.navigate(['auth/register']);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['auth/login']);
    this.snackBar.open('Logged out successfully', 'Close', { duration: 3000 });
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }
  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }
}
