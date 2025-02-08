import { Routes } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UsersOverviewComponent} from './users-overview/users-overview.component';

export const routes: Routes = [
  {path: 'users/profile', component: UserProfileComponent},
  {path: 'users', component: UsersOverviewComponent}
];
