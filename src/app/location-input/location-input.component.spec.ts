import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationInputComponent } from './location-input.component';

describe('LocationInputComponent', () => {
  let component: LocationInputComponent;
  let fixture: ComponentFixture<LocationInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationInputComponent]
    });
    fixture = TestBed.createComponent(LocationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
