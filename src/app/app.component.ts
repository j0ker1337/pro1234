import { Component } from '@angular/core';
import {UserService} from "./services/user/user.service";
import {User} from "./components/entities/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {

  }
}
