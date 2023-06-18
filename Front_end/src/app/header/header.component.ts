import { Component, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import { languages } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;
  languages = languages;
  formOpenBtn: any;
  passwordToggleBtn!: HTMLButtonElement;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
    this.formOpenBtn = this.elementRef.nativeElement.querySelector("#form-open");
    this.passwordToggleBtn = this.elementRef.nativeElement.querySelector(".pw_hide");
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
    this.canShowSearchAsOverlay = innerWidth < 845;
  }

  handleFormOpenClick(): void {
    const home = this.elementRef.nativeElement.querySelector(".home");
    home.classList.add("show");
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



handleSignupClick(event: Event): void {
  event.preventDefault();
  const formContainer = this.elementRef.nativeElement.querySelector(".form_container");
  formContainer.classList.add("active");
  const signupForm = formContainer.querySelector(".signup_form");
  const loginForm = formContainer.querySelector(".login_form");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
}

handleLoginClick(event: Event): void {
  event.preventDefault();
  const formContainer = this.elementRef.nativeElement.querySelector(".form_container");
  const signupForm = formContainer.querySelector(".signup_form");
  const loginForm = formContainer.querySelector(".login_form");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
}


}
