import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AuthService } from '../services/auth.service';
import { DespesasService } from './despesas.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.page.html',
  styleUrls: ['./despesas.page.scss'],
})
export class DespesasPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  despesaForm!: FormGroup
  houseId: string | null = sessionStorage.getItem('house')
  userId = this.authService.decodePayloadJWT()
  isAdmin = sessionStorage.getItem('PERMISSION')
  despesas: any

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private service: DespesasService
  ) { }

  ngOnInit() {

    this.despesaForm = this.fb.group({
      description: ['', Validators.required],
      due_date: ['', Validators.required],
      value: [0, Validators.required]
    })
    this.loadDespesas();
  }

  loadDespesas() {
    if (this.houseId) this.service.getDespesas(this.houseId).subscribe({
      next: (response) => this.despesas = response
    })
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    console.log(this.despesaForm.value)
    this.service.createDespesa(this.despesaForm.value, this.houseId).subscribe({
      next: () => {
        this.modal.dismiss(this.name, 'confirm')
        this.loadDespesas()
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
