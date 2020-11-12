import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallingServiceService {
  private auth_token:string;
  private base_url: string = 'https://user-auth-app-laravel.herokuapp.com/api';
  constructor(private _http:HttpClient) { }
  requestLogin(requestData) : boolean {
    // API call for login to be made here
    console.log(requestData.value);
    this._http.post(this.base_url + '/login', requestData.value).toPromise().then((data:any) => {
      console.log(data);
      alert(JSON.stringify(data));
    });
    return true;
  }
  requestRegistration(requestData) : boolean {
    // API call for registration to be made here
    console.log(requestData.value);
    this._http.post(this.base_url + '/register', requestData.value).toPromise().then((data:any) => {
      console.log(data);
      alert(JSON.stringify(data));
    });
    return true;
  }
}
