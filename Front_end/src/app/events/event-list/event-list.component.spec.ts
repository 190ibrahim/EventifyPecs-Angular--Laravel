import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { EventListComponent } from './event-list.component';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['getEvents', 'registerEvent']);

    await TestBed.configureTestingModule({
      declarations: [EventListComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: AuthService, useValue: authServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  it('should fetch events on component initialization', () => {
    const events = [{ id: 1, event_title: 'Event 1', start_date: '2023-06-01' }];
    authService.getEvents.and.returnValue(of(events));

    fixture.detectChanges();

    expect(component.events).toEqual(events);
    expect(authService.getEvents).toHaveBeenCalled();
  });

  it('should register an event', () => {
    const event = { id: 1, event_title: 'Event 1', start_date: '2023-06-01' };
    authService.registerEvent.and.returnValue(of({}));

    component.registerEvent(event);

    expect(authService.registerEvent).toHaveBeenCalledWith(event);
  });
});
