import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-learn-project';
}
