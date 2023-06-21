import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegEventsComponent } from './user-reg-events.component';

describe('UserRegEventsComponent', () => {
  let component: UserRegEventsComponent;
  let fixture: ComponentFixture<UserRegEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
