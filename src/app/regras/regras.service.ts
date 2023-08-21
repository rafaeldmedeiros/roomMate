import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3333'

@Injectable({
  providedIn: 'root'
})
export class RegrasService {

  constructor(private http: HttpClient) { }

  getRules(id: string) {
    return this.http.get(`${BASE_URL}/rule/${id}`);
  }

  createRule(rule: any, houseId: any) {
    return this.http.post(`${BASE_URL}/${houseId}/rule`, rule);
  }
}
