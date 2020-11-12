import { Component, OnInit } from '@angular/core';
import { ApiCallingServiceService } from '../api-calling-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private Api_Call:ApiCallingServiceService) { }

  ngOnInit(): void {
  }

  saveData(loginform) {
    console.log(JSON.stringify(loginform.value));
    this.Api_Call.requestLogin(loginform);
  }
}
