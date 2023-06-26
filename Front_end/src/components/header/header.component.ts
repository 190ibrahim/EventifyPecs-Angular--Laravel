import { Component, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import { languages } from './header-dummy-data';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';
import{HttpClientTestingModule} from '@angular/common/http/testing' ;

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


  constructor(private router : Router, private elementRef: ElementRef,private auth: AuthService, private location: Location) {}

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

  /**
   * Returns the CSS class to be applied to the head element based on the collapsed and screenWidth inputs.
   * If collapsed is true and screenWidth is greater than 768, 'head-trimmed' class is returned.
   * If collapsed is true and screenWidth is less than or equal to 768, 'head-md-screen' class is returned.
   * @returns string - The CSS class to be applied to the head element.
   */
  getHeadClass(): string {
    return this.collapsed && this.screenWidth > 768 ? 'head-trimmed' : 'head-md-screen';
  }

  /**
   * Checks if the search should be shown as an overlay based on the inner width of the window.
   * If the inner width is less than 845, the search can be shown as an overlay.
   * @param innerWidth - The inner width of the window.
   */
  checkCanShowSearchAsOverlay(innerWidth: number): void {
    this.canShowSearchAsOverlay = innerWidth < 845;
  }

  /**
   * Handles the click event when the form open button is clicked.
   * Toggles the visibility of the form container and sets the active form based on the form type.
   * @param formType - The type of form to be displayed (signup or login).
   */
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

  /**
   * Handles the click event when the form close button is clicked.
   * Hides the form container.
   */
  handleFormCloseClick(): void {
    const home = this.elementRef.nativeElement.querySelector(".home");
    home.classList.remove("show");
  }

  /**
   * Handles the click event when the password show/hide button is clicked.
   * Toggles the visibility of the password input field and updates the eye icon.
   * @param event - The click event object.
   */
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

  /**
   * Handles the click event when the login/signup button is clicked.
   * Toggles the visibility of the login/signup form based on the form type.
   * @param event - The click event object.
   * @param formType - The type of form to be displayed (signup or login).
   */
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
  /**
   * The login form group.
   */
  public loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required])
  });

  /**
   * The register form group with validation rules.
   */
  public registerForm: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      date_of_birth: new FormControl( '', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
  }, { validators: passwordValidator('password', 'confirm') });

  /**
   * Handles the form submission.
   * If the login form is valid, attempts to login the user using the provided credentials.
   * If the register form is valid, attempts to register a new user using the provided details.
   */
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
          localStorage.setItem('role_type', this.user.role_type);
          this.router.navigate(['']);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            window.location.reload();
          });

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
        date_of_birth: this.registerForm.controls['date_of_birth'].value,
        nationality: this.registerForm.controls['nationality'].value,

      };

      this.auth.register(regModel).subscribe(
      (res: any) => {
        this.user = res.user;
        localStorage.clear();
        localStorage.setItem('user_id', this.user.id);
        localStorage.setItem('username', this.user.first_name);
        localStorage.setItem('role_type', 'user');
        this.router.navigate(['']);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            window.location.reload();
          });
      },
      (err: any) => {
        console.log(err);
        this.invalidRegister = true;
      }
    );
    }
  }

  /**
   * Logs out the user by clearing the local storage and reloading the page.
   */
  public logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
    this.isUserLoggedin = false;
    this.router.navigate(['']);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      window.location.reload();
    });
  }
}

/**
 * Custom password validator function.
 * Validates that the value of a control matches the value of another control.
 * @param controlName - The name of the control to validate.
 * @param matchingControlName - The name of the control to compare against.
 * @returns ValidatorFn - The validation function.
 */
export function passwordValidator(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
        const pass = group.get(controlName)?.value;
        const confirmPass = group.get(matchingControlName)?.value;

        return pass === confirmPass ? null : {
            confirm: true
        };
    };
}
