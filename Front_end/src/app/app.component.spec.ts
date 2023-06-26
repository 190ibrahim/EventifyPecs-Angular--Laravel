import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Front_end'`, () => {
    expect(component.title).toEqual('Front_end');
  });

  it('should initialize screenWidth and isSideNavCollapsed', () => {
    expect(component.screenWidth).toBe(0);
    expect(component.isSideNavCollapsed).toBeFalse();
  });

  it('should toggle side navigation', () => {
    const data = {
      screenWidth: 1024,
      collapsed: true
    };
    component.onToggleSideNav(data);
    expect(component.screenWidth).toBe(1024);
    expect(component.isSideNavCollapsed).toBeTrue();
  });
});
