import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private _http : HttpClient) { }


  search(inputValue : string){
    return this._http.get(`${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&language=en-US&query=${inputValue}`)
  }  

  
}
