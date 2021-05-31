import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service'
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) { }
  users = [];
  ngOnInit(): void {
    this.userService.getUsers().then(res => { this.users = res });
  }
  title = 'digitalOwl';
}