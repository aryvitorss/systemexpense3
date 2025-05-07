import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { Observable, startWith, map } from 'rxjs';
import { ExpenseFooterComponent } from "./expense-footer/expense-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatSidenavModule, MatToolbarModule, MatIconModule, FormsModule, MatListModule,
    CommonModule, MatProgressBarModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    MatDialogModule, AsyncPipe, ExpenseFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = '::: CUSTOMERS EXPENSES SYSTEMS BRAZIL :::';
  tipeIcon = "list";
  listaNav = ["/dashboard", "/add-expense"];
  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''), map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.listaNav.filter(option => option.toLowerCase().includes(filterValue))
  }


}
