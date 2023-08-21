import { Component, OnInit } from '@angular/core';
import { InicialService } from './inicial.service';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(
    private service: InicialService,
    private authService: AuthService,
    private houseService: HouseService
  ) { }

  ngOnInit() {
    const id = this.authService.decodePayloadJWT()

    this.service.getUserInfo(id).subscribe({
      next: (res: any) => {
        this.houseService.setHouseId(res.house_id);
        sessionStorage.setItem('house', res.house_id)
      }
    })

    this.houseService.getHouseId().subscribe((res) => console.log(res))


  }

}
