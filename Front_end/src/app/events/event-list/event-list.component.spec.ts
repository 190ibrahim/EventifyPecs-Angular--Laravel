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
    // Create a spy object for the AuthService
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['getEvents', 'registerEvent', 'getEventById', 'updateEvent', 'getCategories', 'deleteEvent', 'getRegistrationCount']);

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
    // Mock the getEvents method to return a list of events
    const events = [{ id: 1, event_title: 'Event 1', start_date: '2023-06-01' }];
    authService.getEvents.and.returnValue(of(events));

    // Call the ngOnInit method to initialize the component
    component.ngOnInit();

    // Expect that the component's events property is set to the mock events
    expect(component.events).toEqual(events);
    // Expect that the getEvents method of the AuthService is called
    expect(authService.getEvents).toHaveBeenCalled();
  });

  it('should open the edit form', () => {
    // Mock the nativeElement.querySelector method to return a mock DOM element with required methods
    const elementRefMock = {
      nativeElement: {
        querySelector: jasmine.createSpy().and.returnValue({ classList: { add: jasmine.createSpy(), toggle: jasmine.createSpy() } })
      }
    };

    // Call the handleFormOpenClick method
    component.handleFormOpenClick();

    // Expect that the querySelector method is called with the correct selector
    expect(elementRefMock.nativeElement.querySelector).toHaveBeenCalledWith('.home');
    // Expect that the add and toggle methods of classList are called with the correct arguments
    expect(elementRefMock.nativeElement.querySelector('.home').classList.add).toHaveBeenCalledWith('show');
    expect(elementRefMock.nativeElement.querySelector('.home').classList.toggle).toHaveBeenCalledWith('active');
  });

  it('should close the edit form', () => {
    // Mock the nativeElement.querySelector method to return a mock DOM element with the remove method
    const elementRefMock = {
      nativeElement: {
        querySelector: jasmine.createSpy().and.returnValue({ classList: { remove: jasmine.createSpy() } })
      }
    };

    // Call the handleFormCloseClick method
    component.handleFormCloseClick();

    // Expect that the querySelector method is called with the correct selector
    expect(elementRefMock.nativeElement.querySelector).toHaveBeenCalledWith('.home');
    // Expect that the remove method of classList is called with the correct arguments
    expect(elementRefMock.nativeElement.querySelector('.home').classList.remove).toHaveBeenCalledWith('show');
  });

  it('should fetch an event by ID for editing', () => {
    // Mock the getEventById method to return a mock event
    const eventId = 1;
    const editedEvent = { id: 1, event_title: 'Event 1', event_description: 'Description', start_date: '2023-06-01' };
    authService.getEventById.and.returnValue(of(editedEvent));

    // Call the fetchEventById method with the event ID
    component.fetchEventById(eventId);

    // Expect that the eventId property is set to the mock event ID
    expect(component.eventId).toBe(eventId);
    // Expect that the getEventById method of the AuthService is called with the correct ID
    expect(authService.getEventById).toHaveBeenCalledWith(eventId);
    // Expect that the editEventForm value is set to the mock event
    expect(component.editEventForm.value).toEqual(editedEvent);
  });

  it('should register an event for the current user', () => {
    // Mock the registerEvent method and call the registerEvent method of the component
    const item = { id: 1 };
    const userId = 1;
    const eventId = item.id;

    component.registerEvent(item);

    // Expect that the registerEvent method of the AuthService is called with the correct arguments
    expect(authService.registerEvent).toHaveBeenCalledWith(userId, eventId);
  });

  it('should handle form submission for editing an event', () => {
    // Mock the updateEvent method and set up the form values
    const eventId = 1;
    component.eventId = eventId;
    component.editEventForm.setValue({
      event_title: 'Updated Event',
      event_description: 'Updated Description',
      event_location: 'Location',
      event_price: 10,
      event_ticket: 100,
      start_date: '2023-06-01',
      end_date: '2023-06-02'
    });

    authService.updateEvent.and.returnValue(of({ data: {} }));

    // Call the onSubmit method of the component
    component.onSubmit();

    // Expect that the invalidEdit and submitted properties are set correctly
    expect(component.invalidEdit).toBe(false);
    expect(component.submitted).toBe(true);

    // Expect that the updateEvent method of the AuthService is called with the correct event data
    const expectedData = {
      id: eventId,
      event_title: 'Updated Event',
      event_description: 'Updated Description',
      event_location: 'Location',
      event_price: 10,
      event_ticket: 100,
      start_date: '2023-06-01',
      end_date: '2023-06-02'
    };
    expect(authService.updateEvent).toHaveBeenCalledWith(expectedData);
    // Expect that the router navigation and handleFormCloseClick methods are called
    // expect(component.router.navigate).toHaveBeenCalledWith(['']);
    expect(component.handleFormCloseClick).toHaveBeenCalled();
    // Expect that the router navigation is called with the correct arguments
    // expect(component.router.navigateByUrl).toHaveBeenCalledWith('/', { skipLocationChange: true });
    // Expect that the window.location.reload method is called
    expect(window.location.reload).toHaveBeenCalled();
  });

  it('should open the edit form with selected event data', () => {
    // Mock the getEventById method to return a mock event
    const item = { id: 1 };
    const editedEvent = { id: 1, event_title: 'Event 1', event_description: 'Description', start_date: '2023-06-01' };
    authService.getEventById.and.returnValue(of(editedEvent));

    // Call the edit method with the item
    component.edit(item);

    // Expect that the fetchEventById and handleFormOpenClick methods are called with the correct arguments
    expect(component.fetchEventById).toHaveBeenCalledWith(item.id);
    expect(component.handleFormOpenClick).toHaveBeenCalled();
  });

  it('should fetch the categories for events', () => {
    // Mock the getCategories method to return a list of categories
    const categories = ['Category 1', 'Category 2'];
    authService.getCategories.and.returnValue(of(categories));

    // Call the getCategories method of the component
    component.getCategories();

    // Expect that the component's categories property is set to the mock categories
    expect(component.categories).toEqual(categories);
    // Expect that the getCategories method of the AuthService is called
    expect(authService.getCategories).toHaveBeenCalled();
  });

  it('should delete an event', () => {
    // Mock the deleteEvent method and call the del method of the component
    const item = { id: 1 };
    authService.deleteEvent.and.returnValue(of({}));

    component.del(item);

    // Expect that the deleteEvent method of the AuthService is called with the correct ID
    expect(authService.deleteEvent).toHaveBeenCalledWith(item.id);
    // Expect that the getEvents method of the component is called
    expect(component.getEvents).toHaveBeenCalled();
  });

  it('should fetch all events and registration count for each event', () => {
    // Mock the getEvents and getRegistrationCount methods and call the getEvents method of the component
    const events = [{ id: 1, event_title: 'Event 1', start_date: '2023-06-01' }];
    const registrationCount = 5;
    authService.getEvents.and.returnValue(of(events));
    authService.getRegistrationCount.and.returnValue(of(registrationCount));

    component.getEvents();

    // Expect that the component's events property is set to the mock events
    expect(component.events).toEqual(events);
    // Expect that the getEvents method of the AuthService is called
    expect(authService.getEvents).toHaveBeenCalled();
    // Expect that the getRegistrationCount method of the AuthService is called with the correct event ID
    expect(authService.getRegistrationCount).toHaveBeenCalledWith(events[0].id);
    // Expect that the registrationCount property of the event is set to the mock registration count
    // expect(events[0].registrationCount).toBe(registrationCount);
  });
});
