import { MoradoresService } from './moradores.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.page.html',
  styleUrls: ['./moradores.page.scss'],
})
export class MoradoresPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  houseId: string = sessionStorage.getItem('house') as string
  moradores: any;
  isAdmin = sessionStorage.getItem('PERMISSION')
  constructor(private moradoresService: MoradoresService) { }

  ngOnInit() {
    this.getMoradores()
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  getMoradores() {
    this.moradoresService.getMoradores(this.houseId).subscribe({
      next: (response: any) => {
        this.moradores = response.Users
      },
      error: (err) => {
        console.log(err)
      }
    })

  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
