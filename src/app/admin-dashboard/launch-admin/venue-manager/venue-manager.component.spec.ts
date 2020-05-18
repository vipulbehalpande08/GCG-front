import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueManagerComponent } from './venue-manager.component';

describe('VenueManagerComponent', () => {
  let component: VenueManagerComponent;
  let fixture: ComponentFixture<VenueManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
