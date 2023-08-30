import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl : string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http : HttpClient) { }
  // employeesubData$ : BehaviorSubject<any> = new BehaviorSubject<any>(null)
  getData():Observable<any>{
    return this._http.get<any>(this.baseUrl)
  }
}
