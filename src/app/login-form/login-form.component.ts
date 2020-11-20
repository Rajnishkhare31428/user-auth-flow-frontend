import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallingServiceService } from '../api-calling-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myLoginForm:FormGroup;
  login : boolean = false;
  constructor(private Api_Call:ApiCallingServiceService, private router : Router) { }

  ngOnInit(): void {
    this.login = sessionStorage.getItem('login') == 'true';
    this.myLoginForm = new FormGroup({
      'email' : new FormControl(''),
      'password' : new FormControl(''),
      'remembertoken': new FormControl()
    });
  }
  onSubmit() {
    this.saveData(this.myLoginForm);
  }
  saveData(loginform) {
    if(this.Api_Call.requestLogin(loginform)) {
      
    }
  }
}
