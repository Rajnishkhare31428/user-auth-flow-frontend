import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingServiceService {

  constructor() { }

  requestLogin(requestData) : boolean {
    // API call for login to be made here
    console.log(requestData.value);
    return true;
  }
  requestRegistration(requestData) : boolean {
    // API call for registration to be made here
    console.log(requestData.value);
    return true;
  }
}
