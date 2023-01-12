import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin  = false

  // dependency injection
  constructor(private router: Router) { }


  ngOnInit() {

  }


  handleLogin() {
    if (this.username === 'vinodh' && this.password === 'something')
    this.invalidLogin = false;
    //navigate to welcome component
    else {
      this.invalidLogin = true;
    }
  }

}
