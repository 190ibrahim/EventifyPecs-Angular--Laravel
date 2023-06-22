import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCalenderComponent } from './events-calender.component';

describe('EventsCalenderComponent', () => {
  let component: EventsCalenderComponent;
  let fixture: ComponentFixture<EventsCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
