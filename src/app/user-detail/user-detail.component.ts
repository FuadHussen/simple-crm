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

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.getUser();
    });
  }

  getUser() {
    const id = this.route.snapshot.params['id'];
    const user = doc(this.firestore, 'users', id);
    const user$ = docData(user);
    user$.subscribe((user) => {
      this.user = new User(user);
      console.log(this.user);
    });
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent, {
      data: { user: this.user }
    });
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent, {
      data: { user: this.user }
    });
  }
}
