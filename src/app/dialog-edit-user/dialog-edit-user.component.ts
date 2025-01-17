import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { updateDoc } from '@angular/fire/firestore';
import { doc } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent implements OnInit {

  user = User;
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private firestore: Firestore,
    @Inject(MAT_DIALOG_DATA) public data: { user: User, userId: string }
  ) { }

  ngOnInit() {

  }

  saveUser() {
    this.isLoading = true;
    const ref = doc(this.firestore, 'users', this.data.userId);
    updateDoc(ref, this.data.user.toJson());
    this.dialogRef.close();
    this.isLoading = false;
  }
}
