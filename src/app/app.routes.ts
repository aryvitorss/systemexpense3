import { Routes } from '@angular/router';
import { ExpenseAddEditComponent } from './expense-add-edit/expense-add-edit.component';
import { ExpenseAddGridComponent } from './expense-add-grid/expense-add-grid.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: ExpenseAddGridComponent },
    { path: 'add-expense', component: ExpenseAddEditComponent },
    { path: 'edit/:id', component: ExpenseAddEditComponent }
];
