import {Component, inject} from '@angular/core';
import {User} from '../interfaces/user';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users-overview',
  imports: [
    NgIf,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './users-overview.component.html',
})
export class UsersOverviewComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  imagePath = 'assets/images/user-overview-icon.png';
  users: User[] = [];

  addNewUser() {
    this.users = [...this.users, {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      mobileNumber: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      area: ''
    }]
  }

  async editUser(id?: string) {
    await this.router.navigate([(id ?? 'new')], {relativeTo: this.route});
  }

  deleteUser(id?:string) {
  }
}
