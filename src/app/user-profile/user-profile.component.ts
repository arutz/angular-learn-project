import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  imports: [
    FormsModule,
  ],
  styleUrls: ['./user-profile.component.css'] // Optional for additional styles
})
export class UserProfileComponent {
  user = {
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
