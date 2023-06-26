import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventsCalenderComponent } from './events-calender.component';
import { AuthService } from 'src/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('EventsCalenderComponent', () => {
  let component: EventsCalenderComponent;
  let fixture: ComponentFixture<EventsCalenderComponent>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['getEvents']);

    await TestBed.configureTestingModule({
      declarations: [EventsCalenderComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: AuthService, useValue: authServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsCalenderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch events on component initialization', () => {
    const events = [{ event_title: 'Event 1', start_date: '2023-06-01' }];
    authService.getEvents.and.returnValue(of(events));

    component.ngOnInit();

    expect(component.events).toEqual(events);
    expect(component.calendarOptions.events).toEqual(events.map(event => ({
      title: event.event_title,
      date: event.start_date
    })));
    expect(authService.getEvents).toHaveBeenCalled();
  });
});
