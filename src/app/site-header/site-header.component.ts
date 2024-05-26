import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})

export class SiteHeaderComponent implements OnInit {

  user : IUser| null = null;
  displaySignOutMenu  : boolean = false;

  constructor(private userService : UserService) { }
 
  ngOnInit(){
    this.userService.getUser().subscribe({
      next : (user) =>{this.user = user}
    })
  }
  
  toggleSignOutMenu(){
    this.displaySignOutMenu = !this.displaySignOutMenu;
  }

  signOut(){
    this.userService.signOut();
    this.displaySignOutMenu = false;
  }
  
}
