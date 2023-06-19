import { Component, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import { languages } from './header-dummy-data';
import { UserModel } from 'src/models/UserModel';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Input() navUser? : UserModel;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;
  languages = languages;
  formOpenBtn: any;
  passwordToggleBtn!: HTMLButtonElement;

  constructor(private router : Router, private elementRef: ElementRef,  private userService : UserService) {}

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
    this.formOpenBtn = this.elementRef.nativeElement.querySelector("#form-open");
    this.passwordToggleBtn = this.elementRef.nativeElement.querySelector(".pw_hide");

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  getHeadClass(): string {
    return this.collapsed && this.screenWidth > 768 ? 'head-trimmed' : 'head-md-screen';
  }

  public logout(): void {
    this.userService.logout().subscribe({
        next: resp => {
            this.router.navigate(['']);
        },
        error: err => {
            console.error(err);
        }
    });
}

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    this.canShowSearchAsOverlay = innerWidth < 845;
  }

  handleFormOpenClick(formType: string): void {
    const home = this.elementRef.nativeElement.querySelector(".home");

    home.classList.add("show");

    const formContainer = this.elementRef.nativeElement.querySelector(".form_container");
    const signupForm = formContainer.querySelector(".signup_form");
    const loginForm = formContainer.querySelector(".login_form");

    formContainer.classList.toggle("active", formType === "signup");
    signupForm.classList.toggle("active", formType === "signup");
    loginForm.classList.toggle("active", formType === "login");
  }

  handleFormCloseClick(): void {
    const home = this.elementRef.nativeElement.querySelector(".home");
    home.classList.remove("show");
  }

  handlePasswordShowHideClick(event: Event): void {
    event.preventDefault();
    const icon = event.target as HTMLElement;
    const passwordToggleBtn = icon.parentElement?.querySelector(".pw_hide");
    const getPasswordInput = passwordToggleBtn?.parentElement?.querySelector("input");

    if (getPasswordInput && getPasswordInput.type === "password") {
      getPasswordInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else if (getPasswordInput) {
      getPasswordInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  }

  handleLoginSignupClick(event: Event, formType: string): void {
    event.preventDefault();
    const formContainer = this.elementRef.nativeElement.querySelector(".form_container");
    const signupForm = formContainer.querySelector(".signup_form");
    const loginForm = formContainer.querySelector(".login_form");

    formContainer.classList.toggle("active", formType === "signup");
    signupForm.classList.toggle("active", formType === "signup");
    loginForm.classList.toggle("active", formType === "login");
  }
}
