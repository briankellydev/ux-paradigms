import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardLandingComponent } from './wizard-landing.component';

describe('WizardLandingComponent', () => {
  let component: WizardLandingComponent;
  let fixture: ComponentFixture<WizardLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
