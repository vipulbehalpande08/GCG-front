import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueHireComponent } from './venue-hire.component';

describe('VenueHireComponent', () => {
  let component: VenueHireComponent;
  let fixture: ComponentFixture<VenueHireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueHireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
