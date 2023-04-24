import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ClienteService } from 'src/app/service/cliente.service';
import { ClienteInterface } from 'src/app/interface/cliente.interface';
import { FormControl, FormGroup } from '@angular/forms';

import { TipoidInterface } from '../interface/tipoid.interface';
import { TipoidService } from '../service/tipoid.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  datosCli: Array<ClienteInterface> = [];
  data: any;
  formCli = new FormGroup({
    idc: new FormControl(''),
    tipoidc: new FormGroup({
      idt: new FormControl(''),
    }),
    identificacionc: new FormControl(''),
    nombrec: new FormControl(''),
    ciudadc: new FormControl(''),
    direccionc: new FormControl(''),
    telefonoc: new FormControl(''),
  });

  datosTid: Array<TipoidInterface> = [];

  constructor(
    private serviceCli: ClienteService,
    private http: HttpClient,
    private router: Router,
    private serviceTid: TipoidService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.serviceCli.selectallCliente().subscribe(
      (datos) => {
        this.datosCli = datos.data;
        console.log(datos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  open() {
    this.formCli.reset();
  }

  saveCli() {
    this.serviceCli.saveCliente(this.formCli.value).subscribe(
      (resp) => {
        console.log(resp);
        this.formCli.reset();
        this.refresh();
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.formCli.value);
  }

  updateCli() {
    this.serviceCli.saveCliente(this.formCli.value).subscribe(
      (resp) => {
        console.log(resp);
        this.formCli.reset();
        this.refresh();
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.formCli.value);
  }

  selectItem(item: any) {
    this.formCli.patchValue({
      idc: item.idc,
      tipoidc: {
        idt: item.tipoidc.idt,
      },
      identificacionc: item.identificacionc,
      nombrec: item.nombrec,
      ciudadc: item.ciudadc,
      direccionc: item.direccionc,
      telefonoc: item.telefonoc,
    });
  }

  deleteCli() {
    this.serviceCli.deleteCliente(this.formCli.value).subscribe(
      (resp) => {
        console.log(resp);
        this.refresh();
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.formCli.value);
  }

  refreshTid() {
    this.serviceTid.selectallTipoid().subscribe(
      (datos) => {
        this.datosTid = datos.data;
        console.log(datos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
