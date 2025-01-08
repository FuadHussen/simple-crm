import { Component } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent, 
    MatDialogActions, 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
}
