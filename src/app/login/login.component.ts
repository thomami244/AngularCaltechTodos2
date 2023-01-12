import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vinodh'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin  = false

  // dependency injection
  constructor(private router: Router) { }


  ngOnInit() {

  }


  handleLogin() {
    if (this.username === 'vinodh' && this.password === 'something'){
    this.invalidLogin = false
    //navigate to welcome component
    this.router.navigate(['welcome', this.username])
  }
    else {
      this.invalidLogin = true;
    }
  }
}
