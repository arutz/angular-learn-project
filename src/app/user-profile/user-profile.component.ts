import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../interfaces/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  imports: [
    FormsModule,
  ],
})
export class UserProfileComponent {

  private readonly route = inject(ActivatedRoute);

  constructor() {
    this.user.id = this.route.snapshot.paramMap.get('id') ?? undefined
  }

  user: User = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+123456789',
    mobileNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    area: '',
  };

  // Mode check - true for edit, false for view
  isEditMode = false;

  toggleEdit() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
    this.isEditMode = false;
    // Save logic can go here (e.g., service call)
    console.log('User profile saved:', this.user);
  }

  cancelEdit() {
    this.isEditMode = false;
    // Optionally reset unsaved changes here
  }
}
