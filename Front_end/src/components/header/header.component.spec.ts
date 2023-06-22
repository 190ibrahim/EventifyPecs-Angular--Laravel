// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HeaderComponent } from './header.component';

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ HeaderComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent, passwordValidator } from './header.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [AuthService],
      imports: [RouterTestingModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.registerForm).toBeDefined();
    expect(component.selectedLanguage).toBeDefined();
    expect(component.isUserLoggedin).toBeFalse();
  });

  it('should validate password correctly', () => {
    const formGroup = component.registerForm;
    formGroup.get('password')?.setValue('123456');
    formGroup.get('confirm')?.setValue('123456');
    expect(passwordValidator('password', 'confirm')(formGroup)).toBeNull();

    formGroup.get('confirm')?.setValue('123457');
    expect(passwordValidator('password', 'confirm')(formGroup)).toEqual({ confirm: true });
  });

  it('should login correctly', () => {
    const authService = TestBed.inject(AuthService);
    const router = TestBed.inject(Router);
    spyOn(authService, 'login').and.callThrough();
    spyOn(router, 'navigateByUrl');
    component.loginForm.get('username')?.setValue('test');
    component.loginForm.get('password')?.setValue('test');
    component.onSubmit();  // this is the function that is called when the login button is clicked
    expect(authService.login).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  }
  );

  it('should register correctly', () => {
    const authService = TestBed.inject(AuthService);
    const router = TestBed.inject(Router);
    spyOn(authService, 'register').and.callThrough();
    spyOn(router, 'navigateByUrl');
    component.registerForm.get('email')?.setValue('test@example.com');
    component.registerForm.get('username')?.setValue('test');
    component.registerForm.get('password')?.setValue('test');
    component.registerForm.get('confirm')?.setValue('test');
    component.registerForm.get('fname')?.setValue('Test');
    component.registerForm.get('lname')?.setValue('User');
    component.registerForm.get('age')?.setValue('30');
    component.registerForm.get('nationality')?.setValue('Test');
    component.registerForm.get('role')?.setValue('Test');
  

    component.onSubmit();
    expect(authService.register).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  }
  );

  it('should logout correctly', () => {
    const authService = TestBed.inject(AuthService);
    const router = TestBed.inject(Router);
    spyOn(authService, 'logout').and.callThrough();
    spyOn(router, 'navigateByUrl');
    component.logout();
    expect(authService.logout).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  }
  );


  
});
