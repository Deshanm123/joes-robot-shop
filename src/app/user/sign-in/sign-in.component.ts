import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
   credentials: IUserCredentials = {email : '' , password : ''}
   signInError = false;

   constructor(private userService : UserService, private router : Router ){

   }

   signInUserFun(){
    //reset the flag every time clicked
    this.signInError = false;

    //since sign in return an observable we can subscribe and use the data
    this.userService.signIn(this.credentials)
                    .subscribe({
                       next: ()=> this.router.navigate(['/catalog']), //You pass in an array of URL segments to Router.navigate.
                       error: ()=>this.signInError = true
                    });
   }
}
