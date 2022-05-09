import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginTeacherService } from '../services/login-teacher.service';

@Component({
  selector: 'app-login-teacher',
  templateUrl:'./login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent implements OnInit {

  email = 'BOUTEAMTeach@gmail.com'
  pass = '123'
  invalidLogin = false

  constructor(private router: Router,
    public loginservice: LoginTeacherService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.email, this.pass)
    ) {
      this.router.navigate(["enseignant"])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}



