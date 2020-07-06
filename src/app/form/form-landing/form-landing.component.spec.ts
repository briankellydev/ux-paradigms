import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLandingComponent } from './form-landing.component';

describe('FormLandingComponent', () => {
  let component: FormLandingComponent;
  let fixture: ComponentFixture<FormLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
