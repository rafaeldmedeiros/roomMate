import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

const BASE_URL = 'http://localhost:3333'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(data: any) {
    return this.http.post(`${BASE_URL}/user/authenticate`, data);
  }

  getToken() {
    return sessionStorage.getItem('token')
  }

  public decodePayloadJWT(): any {
    const token = this.getToken()
    if (token) {
      try {
        const permission = jwt_decode(token) as any;
        permission.isAdmin ? sessionStorage.setItem('PERMISSION', 'ADMIN') : sessionStorage.setItem('PERMISSION', 'REGULAR_USER')
        return permission.sub
      } catch (Error) {
        return null;
      }
    }
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate([''])
  }
}
