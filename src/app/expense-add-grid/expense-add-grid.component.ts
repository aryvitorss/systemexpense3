import { Expense } from './../modelo/expense';
import { Component, effect, inject, OnInit, ViewChild, viewChild, viewChildren } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ExpenseService } from '../services/expense.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-expense-add-grid',
  imports: [MatTableModule,MatPaginatorModule, MatSnackBarModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './expense-add-grid.component.html',
  styleUrl: './expense-add-grid.component.css'
})
export class ExpenseAddGridComponent{
  title = "INFORMATIONS OF TABLE";
  expenseService = inject(ExpenseService);
  snackBar = inject(MatSnackBar);

  displayedColumns: string[] = ["id", "title","category", "amount", "date", "actions"];

  dataSource = new MatTableDataSource<Expense>();
  totalItems: number = 0;
  pageSize: number = 10;
  totalexpenseAmount: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

expenses = this.expenseService.expenses;

constructor() {
  this.expenseService.getExpenses();

  effect(() =>{
    const expenses = this.expenses();
    this.dataSource.data = expenses;
    this.totalItems = expenses.length;
    this.totalexpenseAmount = this.countTotalAmount(expenses);
  })
}

onPageChange(event:any){
  this.pageSize = event.pageSize;
  this.dataSource.paginator = this.paginator;

  }

ngAfterViewInit(){
  this.dataSource.paginator = this.paginator;
}

deleteExpense(expenseId:string){
  this.expenseService.deleteExpense(expenseId);
  this.snackBar.open("Expense Deleted Sucessfully");
  setInterval(() => {
    this.snackBar.dismiss();
  }, 10000);
}

countTotalAmount(expenseCountAmout:Expense[]):number{
  expenseCountAmout.forEach(expcount => {
    this.totalexpenseAmount+=expcount.amount
  })
  return this.totalexpenseAmount;
}

}
