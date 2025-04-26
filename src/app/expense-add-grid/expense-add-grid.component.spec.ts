import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAddGridComponent } from './expense-add-grid.component';

describe('ExpenseAddGridComponent', () => {
  let component: ExpenseAddGridComponent;
  let fixture: ComponentFixture<ExpenseAddGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAddGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseAddGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
