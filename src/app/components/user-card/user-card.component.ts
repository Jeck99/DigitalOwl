import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor() { }
  @Input() user: User;
  ngOnInit(): void {
    console.log(this.user)
  }
  openUserDetails(){
    
  }
}
class User {
  completed: boolean;
  id: number;
  title: string;
  userId: number
}