import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setUser, clearUser } from '../user.actions';
import { selectUser } from '../user.selectors';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userData$: Observable<any>;

  constructor(private store: Store) {
    this.userData$ = this.store.select(selectUser);
  }

  setUser() {
    const user = { name: 'Pervaiz Hina', email: 'Hina@gmail.com' };
    this.store.dispatch(setUser({ user }));
  }

  clearUser() {
    this.store.dispatch(clearUser());
  }
}
