import { Component, OnInit } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore) { }

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
}
