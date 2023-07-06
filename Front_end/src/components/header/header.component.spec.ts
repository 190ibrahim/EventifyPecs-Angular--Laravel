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
      imports: [HttpClientTestingModule, ReactiveFormsModule],
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
    // Arrange
    const resizeEvent = new Event('resize');
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });

    // Act
    window.dispatchEvent(resizeEvent);

    // Assert
    expect(component.canShowSearchAsOverlay).toBeTrue();
  });

  it('should set canShowSearchAsOverlay to false when window.innerWidth is greater than or equal to 845', () => {
    // Arrange
    const resizeEvent = new Event('resize');
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 900 });

    // Act
    window.dispatchEvent(resizeEvent);

    // Assert
    expect(component.canShowSearchAsOverlay).toBeFalse();
  });

  it('should toggle active class on formContainer and signupForm when handleFormOpenClick is called with "signup"', () => {
    // Arrange
    const formContainer = fixture.nativeElement.querySelector('.form_container');
    const signupForm = fixture.nativeElement.querySelector('.signup_form');
    const loginForm = fixture.nativeElement.querySelector('.login_form');

    // Initial state
    expect(formContainer.classList.contains('active')).toBeFalse();
    expect(signupForm.classList.contains('active')).toBeFalse();
    expect(loginForm.classList.contains('active')).toBeFalse();

    // Act
    component.handleFormOpenClick('signup');
    fixture.detectChanges();

    // Assert
    expect(formContainer.classList.contains('active')).toBeTrue();
    expect(signupForm.classList.contains('active')).toBeTrue();
    expect(loginForm.classList.contains('active')).toBeFalse();
  });

  it('should toggle active class on formContainer and loginForm when handleFormOpenClick is called with "login"', () => {
    // Arrange
    const formContainer = fixture.nativeElement.querySelector('.form_container');
    const signupForm = fixture.nativeElement.querySelector('.signup_form');
    const loginForm = fixture.nativeElement.querySelector('.login_form');

    // Initial state
    expect(formContainer.classList.contains('active')).toBeFalse();
    expect(signupForm.classList.contains('active')).toBeFalse();
    expect(loginForm.classList.contains('active')).toBeFalse();

    // Act
    component.handleFormOpenClick('login');
    fixture.detectChanges();

    // Assert
    expect(formContainer.classList.contains('active')).toBeFalse();
    expect(signupForm.classList.contains('active')).toBeFalse();
    expect(loginForm.classList.contains('active')).toBeTrue();
  });

  // Add more test cases as needed

});
