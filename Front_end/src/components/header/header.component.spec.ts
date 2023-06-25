import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { UserService } from 'src/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule ,ReactiveFormsModule],
      providers: [UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set canShowSearchAsOverlay to true when window.innerWidth is less than 845', () => {
    const resizeEvent = new Event('resize');
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });

    window.dispatchEvent(resizeEvent);

    expect(component.canShowSearchAsOverlay).toBeTrue();
  });

  it('should set canShowSearchAsOverlay to false when window.innerWidth is greater than or equal to 845', () => {
    const resizeEvent = new Event('resize');
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 900 });

    window.dispatchEvent(resizeEvent);

    expect(component.canShowSearchAsOverlay).toBeFalse();
  });

  it('should toggle active class on formContainer and signupForm when handleFormOpenClick is called with "signup"', () => {
    const formContainer = fixture.nativeElement.querySelector('.form_container');
    const signupForm = fixture.nativeElement.querySelector('.signup_form');
    const loginForm = fixture.nativeElement.querySelector('.login_form');

    expect(formContainer.classList.contains('active')).toBeFalse();
    expect(signupForm.classList.contains('active')).toBeFalse();
    expect(loginForm.classList.contains('active')).toBeFalse();

    component.handleFormOpenClick('signup');
    fixture.detectChanges();

    expect(formContainer.classList.contains('active')).toBeTrue();
    expect(signupForm.classList.contains('active')).toBeTrue();
    expect(loginForm.classList.contains('active')).toBeFalse();
  });

  it('should toggle active class on formContainer and loginForm when handleFormOpenClick is called with "login"', () => {
    const formContainer = fixture.nativeElement.querySelector('.form_container');
    const signupForm = fixture.nativeElement.querySelector('.signup_form');
    const loginForm = fixture.nativeElement.querySelector('.login_form');

    expect(formContainer.classList.contains('active')).toBeFalse();
    expect(signupForm.classList.contains('active')).toBeFalse();
    expect(loginForm.classList.contains('active')).toBeFalse();

    component.handleFormOpenClick('login');
    fixture.detectChanges();

    expect(formContainer.classList.contains('active')).toBeFalse();
    expect(signupForm.classList.contains('active')).toBeFalse();
    expect(loginForm.classList.contains('active')).toBeTrue();
  });

  // Add more test cases as needed

});
