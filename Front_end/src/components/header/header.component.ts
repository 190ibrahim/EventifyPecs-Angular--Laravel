import { Component, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import { languages } from './header-dummy-data';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


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

  isUserLoggedin : boolean= false;
  public user: any = [];
  username: any;

  public loginSubmitted : boolean = false;
  public invalidLogin : boolean = false;
  public submitted: boolean = false;
  public invalidRegister: boolean = false;


  constructor(private router : Router, private elementRef: ElementRef,private auth: AuthService,) {}

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
    this.formOpenBtn = this.elementRef.nativeElement.querySelector("#form-open");
    this.passwordToggleBtn = this.elementRef.nativeElement.querySelector(".pw_hide");

    this.username = localStorage.getItem('username');
    console.log(this.username);
      if (localStorage.getItem('user_id')) {
      this.isUserLoggedin = true;
    } else {
      this.isUserLoggedin = false;
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  getHeadClass(): string {
    return this.collapsed && this.screenWidth > 768 ? 'head-trimmed' : 'head-md-screen';
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

  public registerForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      age: new FormControl( '', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
  }, { validators: passwordValidator('password', 'confirm') });

  public onSubmit() {
    if (this.loginForm.valid) {
      this.loginSubmitted = true;
      this.invalidLogin = false;

      const loginModel = {
        email : this.loginForm.controls.username.value as string,
        password : this.loginForm.controls.password.value as string,
      }

      this.auth.login(loginModel).subscribe(
        (res: any) => {
          this.user = res.user;
          localStorage.clear();
          localStorage.setItem('user_id', this.user.id);
          localStorage.setItem('username', this.user.first_name);
          this.router.navigate(['']);
        },
        (err: any) => {
          console.log(err);
          this.invalidLogin = true;
        }
      );


    } else if (this.registerForm.valid) {
      this.invalidRegister = false;
      this.loginSubmitted = true;

      const regModel = {
        email: this.registerForm.controls['email'].value  ,
        username: this.registerForm.controls['username'].value,
        password: this.registerForm.controls['password'].value ,
        firstname: this.registerForm.controls['fname'].value ,
        lastname: this.registerForm.controls['lname'].value,
        age: this.registerForm.controls['age'].value,
        nationality: this.registerForm.controls['nationality'].value,
        role_type: this.registerForm.controls['role'].value,

      };

      this.auth.register(regModel).subscribe(
      (res: any) => {
        this.user = res.user;
        localStorage.clear();
        localStorage.setItem('user_id', this.user.id);
        localStorage.setItem('username', this.user.first_name);
        this.router.navigate(['']);
      },
      (err: any) => {
        console.log(err);
        this.invalidRegister = true;
      }
    );
    }
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
    this.isUserLoggedin = false;
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
