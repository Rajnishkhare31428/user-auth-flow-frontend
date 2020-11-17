import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiCallingServiceService } from '../api-calling-service.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  myRegistrationForm: FormGroup;
  showValidPassword : boolean = true;
  constructor(private Api_Call:ApiCallingServiceService) { }

  ngOnInit(): void {
    this.myRegistrationForm = new FormGroup({
      'name' : new FormControl(''),
      'email' : new FormControl(''),
      'gender' : new FormControl('male'),
      'contact' : new FormControl(''),
      'password' : new FormControl(''),
      'confirm_password' : new FormControl('')
    });
  }
  onSubmit() {
    this.register(this.myRegistrationForm);
  }
  register(registrationform) {
    if(registrationform.valid) {
      this.Api_Call.requestRegistration(registrationform);
    }
    else {
      alert('Validation errors in your form');
    }
  }
  show() {
    //console.log('show method called');
    this.showValidPassword = true;
  }
  dontShow() {
    //console.log('dontShow method called');
    this.showValidPassword = false;
  }
}
