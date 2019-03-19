import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpReqService {

  public userData: any;
  constructor(public http: HttpClient) { }

  get(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}`);
  }
}
