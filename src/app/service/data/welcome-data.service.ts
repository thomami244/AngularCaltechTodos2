import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Welcome {
  constructor(public message:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient:HttpClient) { }

  executeWelcomeRestService(){
    console.log('welcome data service');
    return this.httpClient.get<Welcome>(`http://localhost:8080/welcome`);

  }
  executeWelcomeRestServiceWithParameter(name :any) {
    return this.httpClient.get<Welcome>(`http://localhost:8080/welcome/${name}`);
  }
}
