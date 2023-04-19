import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { MascotaService } from '../service/mascota.service';
import { MascotaInterface } from '../interface/mascota.interface';

import { ClienteInterface } from '../interface/cliente.interface'
import { ClienteService } from '../service/cliente.service'
import { EspecieInterface } from '../interface/especie.interface'
import { EspecieService } from '../service/especie.service'


@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  datosMas: Array<MascotaInterface> = [];
  data: any;
  formMas = new FormGroup({
    'idm': new FormControl(''),
    'nombrem': new FormControl(''),
    'especiem': new FormGroup({
      'ide': new FormControl('')
    }),
    'razam': new FormControl(''),
    'fechanacimientom': new FormControl(''),
    'fechaentradam': new FormControl(''),
    'clientem': new FormGroup({
      'idc': new FormControl('')
    })
  });

  isUpdate: boolean = false;

  datosCli: Array<ClienteInterface> = [];
  datosEsp: Array<EspecieInterface> = [];

  constructor(private serviceMas: MascotaService, private http: HttpClient, private router: Router, private serviceCli: ClienteService, private serviceEsp: EspecieService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.serviceMas.selectallMascota().subscribe(datos => {
      this.datosMas = datos.data;
      console.log(datos);
    }, error => {
      console.log(error);
    });
  }

  saveMas() {
    this.serviceMas.saveMascota(this.formMas.value).subscribe(resp => {
      console.log(resp);
      this.formMas.reset();
      this.refresh();
    }, error => {
      console.log(error);
    });
    console.log(this.formMas.value);
  }

  updateMas() {
    this.serviceMas.saveMascota(this.formMas.value).subscribe(resp => {
      console.log(resp);
      this.formMas.reset();
      this.refresh();
    }, error => {
      console.log(error);
    });
    console.log(this.formMas.value);
  }

    selectItem(item: any) {
    this.formMas.patchValue({
      'idm': item.idm,
      'nombrem': item.nombrem,
      'especiem': {
        'ide': item.especiem.ide
      },
      'razam': item.razam,
      'fechanacimientom': item.fechanacimientom,
      'fechaentradam': item.fechaentradam,
      'clientem': {
        'idc': item.clientem.idc
      }
    });
  }

  deleteMas() {
    this.serviceMas.deleteMascota(this.formMas.value).subscribe(resp => {
      console.log(resp);
      this.refresh();
    }, error => {
      console.log(error);
    });
    console.log(this.formMas.value);
  }
  
  refreshCli() {
    this.serviceCli.selectallCliente().subscribe(datos => {
      this.datosCli = datos.data
      console.log(datos);
    }, error => {
      console.log(error);
    });
  }

  refreshEsp() {
    this.serviceEsp.selectallEspecie().subscribe(datos => {
      this.datosEsp = datos.data
      console.log(datos);
    }, error => {
      console.log(error);
    });
  }
}
