import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseOnboardingComponent } from './expense-onboarding.component';

describe('ExpenseOnboardingComponent', () => {
  let component: ExpenseOnboardingComponent;
  let fixture: ComponentFixture<ExpenseOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseOnboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
