import { OverlayEventDetail } from '@ionic/core/components';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { RegrasService } from './regras.service';
import { HouseService } from '../services/house.service';
import { switchMap, take } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regras',
  templateUrl: './regras.page.html',
  styleUrls: ['./regras.page.scss'],
})
export class RegrasPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  regras: any;
  createRegra!: FormGroup
  houseId: string | null = sessionStorage.getItem('house')

  constructor(private regraService: RegrasService, private houseService: HouseService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegra = this.fb.group({
      description: ['', Validators.required],
      accepted: [false]
    })
    this.loadRegra();
    // this.houseService.getHouseId().subscribe((res) => console.log(res))
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  loadRegra() {
    if (this.houseId) this.regraService.getRules(this.houseId).subscribe({
      next: (response) => this.regras = response
    })
  }

  confirm() {
    console.log(this.createRegra.value)

    this.regraService.createRule(this.createRegra.value, this.houseId).subscribe({
      next: () => {
        this.modal.dismiss(this.name, 'confirm')
        this.loadRegra()
      },
      error: (err) => console.log(err)
    })


  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
