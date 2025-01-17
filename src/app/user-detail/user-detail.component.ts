import { Component, OnInit } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { getDoc } from 'firebase/firestore';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    DatePipe
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  userId: string = '';
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog
  ) {
    // ID aus der URL holen
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id') || '';
      this.getUser();
    });
  }

  ngOnInit() {

  }

  getUser() {
    const docRef = doc(this.firestore, 'users', this.userId);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        this.user = new User(docSnap.data());
        this.user.id = docSnap.id;
      }
    });
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent, {
      data: { 
        user: new User(this.user.toJson()),
        userId: this.user.id 
      }
    });

    dialog.afterClosed().subscribe(() => {
      this.getUser(); // Daten nach dem Schließen des Dialogs neu laden
    });
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent, {
      data: { 
        user: new User(this.user.toJson()),
        userId: this.user.id 
      }
    });

    dialog.afterClosed().subscribe(() => {
      this.getUser(); // Daten nach dem Schließen des Dialogs neu laden
    });
  }
}

