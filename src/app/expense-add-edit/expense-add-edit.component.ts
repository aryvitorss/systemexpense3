import { Expense } from './../modelo/expense';
import { Component, Input, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ExpenseService } from '../services/expense.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { PipeDataAjustadaPipe } from "../pipe-data-ajustada.pipe";

@Component({
  selector: 'app-expense-add-edit',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule,MatSelectModule, MatDatepickerModule,MatCardModule, MatIconModule, MatFormFieldModule, CommonModule, MatProgressBar, PipeDataAjustadaPipe],
  templateUrl: './expense-add-edit.component.html',
  styleUrl: './expense-add-edit.component.css'
})
export class ExpenseAddEditComponent {
title = "Expense";
expenseService = inject(ExpenseService);
router = inject(Router);
snackBar = inject(MatSnackBar);
route = inject(ActivatedRoute);

categorias = ["Food", "Travel", "Entretainment","Luxury", "Movies","Dating"];

expenseForm: FormGroup;
isEditMode = false;
expenseId: number=0;
statusBarraDeProgresso = 0;
statusBarraProgressoContaCombo:number = 0;
statusBarraProgressoContaDate:number = 0;

constructor(private fb:FormBuilder){
    this.expenseForm = this.fb.group({
    title: ["",Validators.required],
    category: ["",Validators.required],
    amount: [null,[Validators.required, Validators.min(0)]],
    date: ["",Validators.required]
  });

  this.route.paramMap.subscribe(params => {
    const id = params.get("id");

    if (id){

      this.isEditMode = true;
      this.expenseId = +id;
      this.expenseService.getExpenses();

      effect(()=>{
        const expense = this.expenseService.expenses();
        if(expense.length > 0){
          this.loadExpenseData(this.expenseId);
        }
      });
    }
  })
}

loadExpenseData(expenseId:number){
  const expense = this.expenseService.getExpensesById(expenseId.toString());
  if(expense){
    this.expenseForm.patchValue({
      title: expense.title,
      amount: expense.amount,
      category: expense.category,
      date: expense.date
    })
  }
}

onSubmit() {
    if(this.expenseForm.valid){
      const expense: Expense = {...this.expenseForm.value,
        id: this.expenseId || Date.now().toString() }

      if(this.isEditMode && this.expenseId !== null){
        this.expenseService.updateExpense(this.expenseId.toString(), expense);
        this.snackBar.open("Expense edited Sucessfully");
        setInterval(()=>{
          this.statusBarraDeProgresso = 100;
          this.snackBar.dismiss();
        }, 10000);

      }else{
        this.expenseService.addExpense(expense);
        this.snackBar.open("Expense added Sucessfully");
        setInterval(()=>{
          this.statusBarraDeProgresso = 100;
          this.snackBar.dismiss();
        }, 10000)
      }
      this.router.navigate(["/dashboard"]);
    }
  }

  statusBarraProgresso(campo:string){

    const expense: Expense = {...this.expenseForm.value,
      id: this.expenseId || Date.now().toString() }

    if(campo.includes("titulo")){
      var progressTitulo = true;
      if(expense.title !== "" && progressTitulo == true ) {
        this.statusBarraDeProgresso += 25, progressTitulo = false;}
        else{ this.validaCamposBarraProgresso() };
    }

    if(campo.includes("amount")){
      var progressAmount = true;
      if(expense.amount.toString() !== "" && progressAmount == true ) {
        this.statusBarraDeProgresso += 25, progressAmount = false;}
        else{ this.validaCamposBarraProgresso() };
    }

    if(campo.includes("category")){
      if(expense.category.toString() !== "" ) {
        if(this.statusBarraProgressoContaCombo == 0){
        this.statusBarraProgressoContaCombo++;
        this.statusBarraDeProgresso += 25}}
          else{ this.validaCamposBarraProgresso() };
    }

    if(campo.includes("date")){
      if(expense.date.toString() !== "") {
        if(this.statusBarraProgressoContaDate == 0){
        this.statusBarraProgressoContaDate++;
        this.statusBarraDeProgresso += 25}}
          else{ this.validaCamposBarraProgresso() };
    }

  }

private validaCamposBarraProgresso(){
    if(this.statusBarraDeProgresso !== 0){
    this.statusBarraDeProgresso == 25? this.statusBarraDeProgresso -= 25:'';
    this.statusBarraDeProgresso == 50? this.statusBarraDeProgresso -= 25:'';
    this.statusBarraDeProgresso == 75? this.statusBarraDeProgresso -= 25:'';
    this.statusBarraDeProgresso == 100? this.statusBarraDeProgresso -= 25:'';
    }
  }

}
