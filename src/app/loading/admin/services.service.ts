import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  url = 'https://api.publicapis.org/entries';
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }
}
