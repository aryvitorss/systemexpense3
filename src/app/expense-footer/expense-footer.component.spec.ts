import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseFooterComponent } from './expense-footer.component';

describe('ExpenseFooterComponent', () => {
  let component: ExpenseFooterComponent;
  let fixture: ComponentFixture<ExpenseFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
