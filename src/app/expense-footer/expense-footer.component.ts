import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expense-footer',
  imports: [MatIconModule],
  templateUrl: './expense-footer.component.html',
  styleUrl: './expense-footer.component.css'
})
export class ExpenseFooterComponent {
  tipeIcon = "call";
}
