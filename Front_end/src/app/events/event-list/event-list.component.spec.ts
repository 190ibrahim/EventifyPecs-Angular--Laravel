import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventListComponent } from './event-list.component';
import { AuthService } from 'src/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventListComponent],
      imports: [RouterTestingModule],
      providers: [AuthService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create the EventListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.url).toBe('../assets/img1.jpg');
    expect(component.events).toEqual([]);
    expect(component.isAdmin).toBeNull();
  });

  it('should change the image URL on imageChange', () => {
    const newImageUrl = 'https://example.com/new-image.jpg';
    const event = { target: { src: newImageUrl } };
    component.imageChange(event);
    expect(component.url).toBe(newImageUrl);
  });

  it('should fetch events on ngOnInit', () => {
    const mockEvents = ['event1', 'event2'];
    spyOn(authService, 'getEvents').and.returnValue(of(mockEvents));

    component.ngOnInit();

    expect(authService.getEvents).toHaveBeenCalled();
    expect(component.events).toEqual(mockEvents);
  });

  it('should register an event', () => {
    const event = { user_id: '123', name: 'Event 1' };
    spyOn(authService, 'registerEvent').and.returnValue(of({}));

    component.registerEvent(event);

    expect(authService.registerEvent).toHaveBeenCalledWith(event);
    // You can add more expectations based on your component's behavior after event registration
  });

  // Add more test cases for other methods and functionality in the EventListComponent
});