import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UevetsComponent } from './uevets.component';

describe('UevetsComponent', () => {
  let component: UevetsComponent;
  let fixture: ComponentFixture<UevetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UevetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UevetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
