import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiCallingServiceService } from '../api-calling-service.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  myPost : FormGroup;
  constructor(private API_Call : ApiCallingServiceService) { }
  login : boolean = false;
  ngOnInit(): void {
    this.login = sessionStorage.getItem('login') == 'true';
    this.myPost = new FormGroup({
      'content' : new FormControl(''),
      'description' : new FormControl(''),
    });
  }
  onSubmit() {
    let values = this.myPost.value;
    values['auth_token'] = sessionStorage.getItem("auth_token");
    console.log(values);
    this.API_Call.createPost(values);
  }
}
