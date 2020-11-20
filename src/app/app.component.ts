import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RoutesRecognized } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-auth-flow';
  login:boolean = sessionStorage.getItem("login") == 'true';
  constructor () {
  }
}