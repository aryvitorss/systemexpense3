import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-expense-onboarding',
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule,MatSelectModule,RouterModule,
     MatDatepickerModule,MatCardModule, MatIconModule, MatFormFieldModule, CommonModule, MatProgressBar],
  templateUrl: './expense-onboarding.component.html',
  styleUrl: './expense-onboarding.component.css'
})
export class ExpenseOnboardingComponent {
tipeIconAdd = "assignment_add add";
tipeIconDash = "list_alt";
}
