import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./user-profile.component.css'] // Optional for additional styles
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+123456789',
    address: '123 Street, City, Country'
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
