import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { provideFirebaseApp, initializeApp, FirebaseOptions } from '@angular/fire/app';
import { provideFirestore, getFirestore, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { of } from 'rxjs';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

// Firebase-Konfiguration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAPacAKUpJ5fT9kRzkUtFV0ESDQMCqBsTA",
  authDomain: "simple-crm-ea2b5.firebaseapp.com",
  projectId: "simple-crm-ea2b5",
  storageBucket: "simple-crm-ea2b5.appspot.com",
  messagingSenderId: "1055067644096",
  appId: "1:1055067644096:web:36c72694db85e4c02b8d25"
};

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  const dialogRefMock = {
    afterClosed: () => of(true),
    close: jasmine.createSpy('close')
  };

  const mockDialog = {
    open: jasmine.createSpy('open').and.returnValue(dialogRefMock),
    afterAllClosed: of(undefined)
  };

  const mockFirestore = {
    collection: () => ({
      valueChanges: () => of([])
    })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatMenuModule,
        MatNativeDateModule,
        NoopAnimationsModule,
        UserComponent,
        DialogAddUserComponent
      ],
      providers: [
        { provide: MatDialog, useValue: mockDialog },
        { provide: Firestore, useValue: mockFirestore },
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore())
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
