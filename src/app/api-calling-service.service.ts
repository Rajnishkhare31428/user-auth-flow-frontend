import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ApiCallingServiceService {
  private auth_token:string;
  private base_url: string = !environment.production ? 'http://localhost:8000/api' : 'https://user-auth-app-laravel.herokuapp.com/api';
  constructor(private _http:HttpClient) { }
  mydata:any;

  async getAllPosts() : Promise<any> {
    if(sessionStorage.getItem['auth_token'] != '') {
      await this._http.get(this.base_url + '/getAllPosts').toPromise().then((data:any) => {
        this.mydata = data;
        if(data != undefined) {
          return Promise.resolve(data);
        }
        return Promise.reject('dumb as fuck');
      });
      return this.mydata;
    }   
  }
  createPost(requestData) {
    this._http.post(this.base_url + '/createPost', requestData).toPromise().then((data:any) => {
      console.log(data);
      Promise.resolve(data);
    }).catch((err) => {
      console.log('Something went wrong while making create Post request to the API');
      console.log(err);
    });
  }
  requestLogin(requestData) : boolean {
    // API call for login to be made here
    this._http.post(this.base_url + '/login', requestData.value).toPromise().then((data:any) => {
      console.log(data);
      alert(JSON.stringify(data.message));
      if(data.status == 'login_ok') {
        sessionStorage.setItem('login', 'true');
        sessionStorage.setItem('auth_token', data.auth_token);
      }
    }).catch((err) => {
      console.log('Something went wrong while making login request to the API');
      rejects(err);
    });
    return true;
  }
  requestRegistration(requestData) : boolean {
    
    // API call for registration to be made here
    this._http.post(this.base_url + '/register', requestData.value).toPromise().then((data:any) => {
        console.log(data);
        window.alert(data.message);        
    }).catch((err) => {
      console.log('Something went wrong while making registration request to the API');
      rejects(err);
    });
    
    return true;
  }

}
