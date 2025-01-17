import { Observable } from 'rxjs';

export interface IFirestore {
  collection: (path: string) => {
    valueChanges: () => Observable<any[]>
  };
} 