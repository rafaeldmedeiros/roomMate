import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houseId = new BehaviorSubject<string>('as');


  constructor() { }

  setHouseId(id: string) {
    this.houseId.next(id)
  }

  getHouseId() {
    return this.houseId.asObservable();
  }

}
