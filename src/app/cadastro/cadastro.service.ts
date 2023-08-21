import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const BASE_URL = 'http://localhost:3333'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  createUser(data: any) {
    return this.http.post(`${BASE_URL}/user`, data);
  }
}
