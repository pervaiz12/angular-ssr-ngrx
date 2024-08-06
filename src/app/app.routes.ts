import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'landing', component: LandingPageComponent },
    { path: '', redirectTo: '/user', pathMatch: 'full' } // Default route to UserComponent
];
