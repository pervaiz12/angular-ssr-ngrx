import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: '/user', pathMatch: 'full' } // Default route to UserComponent
];
