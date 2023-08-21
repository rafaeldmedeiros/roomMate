import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from './cadastro.service';
import { LoginService } from '../login/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  createUserForm!: FormGroup;
  confirmPassword!: string;

  constructor(private fb: FormBuilder, private cadastroService: CadastroService, private router: Router) { }

  ngOnInit() {
    this.createUserForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  createUser() {
    const { confirmPassword, ...user } = this.createUserForm.value

    this.cadastroService.createUser(user).subscribe({
      next: (res) => {
        this.router.navigate([''])
      },
      error: (err) => console.log(err)
    })
  }

}
