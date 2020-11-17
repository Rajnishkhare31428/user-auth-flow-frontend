import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiCallingServiceService } from '../api-calling-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myLoginForm:FormGroup;

  constructor(private Api_Call:ApiCallingServiceService) { }

  ngOnInit(): void {
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
    this.Api_Call.requestLogin(loginform);
    
  }
}
