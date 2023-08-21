import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3333'

@Injectable({
  providedIn: 'root'
})
export class InicialService {

  constructor(private http: HttpClient) { }

  getUserInfo(id: string) {
    return this.http.get(`${BASE_URL}/user/${id}`);
  }
}
