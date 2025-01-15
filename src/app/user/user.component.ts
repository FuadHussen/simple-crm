import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule, 
    MatIconModule, 
    MatTooltipModule, 
    MatDialogModule,
    MatNativeDateModule,
    MatCardModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  user: User = new User();
  allUsers: any[] = [];
  
  constructor(public dialog: MatDialog, private firestore: Firestore) {

  }

  ngOnInit(): void {
    const usersRef = collection(this.firestore, 'users');
    collectionData(usersRef)
    .subscribe((changes: any[]) => {
      console.log('Recived changes from DB', changes);
      this.allUsers = changes;
    });
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent)
  }
}
