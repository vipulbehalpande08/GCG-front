import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchAdminComponent } from './launch-admin.component';

describe('LaunchAdminComponent', () => {
  let component: LaunchAdminComponent;
  let fixture: ComponentFixture<LaunchAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
