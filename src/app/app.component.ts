import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);

  title = 'simple-crm';
}
