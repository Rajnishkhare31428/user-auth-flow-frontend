import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { rejects } from 'assert';
import { ApiCallingServiceService } from '../api-calling-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPosts : any[];
  constructor(private Api_Call:ApiCallingServiceService) { }

  ngOnInit(): void {
    this.Api_Call.getAllPosts().then((value:any) => {
      this.allPosts = value;
    }).catch((err) => {
      console.log('Some kind of error occured while calling async api method' + err);
    });
  }

}
