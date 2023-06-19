import { Component, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import { languages } from './header-dummy-data';
import { UserModel } from 'src/models/UserModel';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpRequestModel } from 'src/models/SignUpRequestModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Input() navUser? : UserModel;

  public user? : UserModel;
  public loginSubmitted : boolean = false;
  public invalidLogin : boolean = false;
  public submitted: boolean = false;
  public invalidRegister: boolean = false;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;
  languages = languages;
  formOpenBtn: any;
  passwordToggleBtn!: HTMLButtonElement;

  public registerForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      dob: new FormControl(new Date().toISOString().split('T')[0], [Validators.required])
  }, { validators: passwordValidator('password', 'confirm') });

  constructor(private router : Router, private elementRef: ElementRef,  private userService : UserService) {}

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
    this.formOpenBtn = this.elementRef.nativeElement.querySelector("#form-open");
    this.passwordToggleBtn = this.elementRef.nativeElement.querySelector(".pw_hide");

    this.userService.getUserData().subscribe(data => {
      if (data?.state === 'success') {
        this.router.navigate(['']);
      }
    });

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


  // login
  public loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required])
  });

  public onSubmit() {
    if (this.loginForm.valid) {
      this.loginSubmitted = true;
      this.invalidLogin = false;

      const username = this.loginForm.controls.username.value as string;
      const password = this.loginForm.controls.password.value as string;
      this.userService.login(username, password).subscribe(resp => {
        if (resp?.state === 'success') {
          this.router.navigate(['']);
        } else {
          this.invalidLogin = true;
        }
      });
    } else if (this.registerForm.valid) {
      this.submitted = true;
      this.invalidRegister = false;

      const regModel: SignUpRequestModel = {
        email: this.registerForm.controls['email'].value as string,
        username: this.registerForm.controls['username'].value as string,
        password: this.registerForm.controls['password'].value as string,
        fname: this.registerForm.controls['fname'].value as string,
        lname: this.registerForm.controls['lname'].value as string,
        dob: this.registerForm.controls['dob'].value as string
      };

      this.userService.signUp(regModel).subscribe({
        next: resp => {
          if (resp?.state !== 'success') {
            this.invalidRegister = true;
            console.error(resp);
          } else {
            this.router.navigate(['']);
          }
        },
        error: err => {
          console.error(err);
          this.invalidRegister = true;
        }
      });
    }
  }
}


export function passwordValidator(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
        const pass = group.get(controlName)?.value;
        const confirmPass = group.get(matchingControlName)?.value;

        return pass === confirmPass ? null : {
            confirm: true
        };
    };
}
