import { Component, OnInit } from '@angular/core';
import { ApiCallingServiceService } from '../api-calling-service.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private Api_Call:ApiCallingServiceService) { }

  ngOnInit(): void {
  }
  register(registrationform) {
    console.log(JSON.stringify(registrationform.value));
    this.Api_Call.requestRegistration(registrationform.value);
  }
}
