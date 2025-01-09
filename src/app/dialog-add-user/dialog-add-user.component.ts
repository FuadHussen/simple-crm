import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogTitle } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

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
    FormsModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  isLoading = false;
  user = new User();
  birthDate!: Date;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user.birthDate);

    this.isLoading = true;

    const usersCollection = collection(this.firestore, 'users');

    const userData = this.user.toJson();

    addDoc(usersCollection, userData)
      .then((result: any) => {
        console.log('User added successfully', result);
        this.isLoading = false;
      });
  }
}
