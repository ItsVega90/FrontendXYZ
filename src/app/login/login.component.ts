import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: any;
  errorVisible = false;

  formLog = new FormGroup({
    usuario: new FormControl('itsvega', Validators.required),
    contraseña: new FormControl('its1234', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ingreso() {
    console.log(this.formLog);

    const usuario = this.formLog.value.usuario;
    const contraseña = this.formLog.value.contraseña;

    if (usuario == 'itsvega' && contraseña == 'its1234') {
      this.router.navigate(['home']);
    } else {
      this.error();
      this.formLog.reset();
    }
  }

  error() {
    this.errorMessage =
      'El correo electrónico o la contraseña son incorrectos.';
    this.errorVisible = true;
  }
}
