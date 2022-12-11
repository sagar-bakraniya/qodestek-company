import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = environment.endPoint;
  constructor(
    private http: HttpClient
  ) { }

  getProducts<T>() {
   return this.http.get<T>(`${this.baseUrl}/products`)
  }
}
