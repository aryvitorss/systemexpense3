import { Injectable, signal } from '@angular/core';
import { Expense } from '../modelo/expense';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenseSignal = signal<Expense[]>([]);
  URL = Environment.URL;

  constructor(private http: HttpClient) { }

  get expenses(){
    return this.expenseSignal;
  }

  getExpenses(){
    this.http.get<Expense[]>(this.URL)
    .subscribe(expenses=>
      this.expenseSignal.set(expenses));
  }

   addExpense(expense:Expense){
    this.http.post(this.URL, expense)
    .subscribe(()=>this.getExpenses());
  }

   deleteExpense(id: string){
      this.http.delete(`${this.URL}/${id}`).subscribe(()=>this.getExpenses());
  }

  updateExpense(id:string, updateExp:Expense){
    this.http.put(`${this.URL}/${id}`,updateExp).subscribe(()=>this.getExpenses());
  }

  getExpensesById(id:string){
    return this.expenseSignal()
    .find(expense => expense.id == id);
  }

}
