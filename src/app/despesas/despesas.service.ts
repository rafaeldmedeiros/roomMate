import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3333'

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  constructor(private http: HttpClient) { }

  getDespesas(id: string) {
    return this.http.get(`${BASE_URL}/expense/${id}`);
  }

  createDespesa(despesa: any, houseId: any) {
    return this.http.post(`${BASE_URL}/${houseId}/expense`, despesa);
  }

}
