import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.page.html',
  styleUrls: ['./visitantes.page.scss'],
})
export class VisitantesPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  constructor() { }

  ngOnInit() {
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
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
