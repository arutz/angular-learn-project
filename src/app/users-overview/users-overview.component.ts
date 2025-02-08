import {Component} from '@angular/core';
import {User} from '../interfaces/user';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-users-overview',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './users-overview.component.html',
})
export class UsersOverviewComponent {
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

  editUser(id?:string) {
  }

  deleteUser(id?:string) {
  }
}
