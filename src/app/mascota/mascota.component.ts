import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  formMas!: FormGroup;

  isUpdate: boolean = false;

  datosCli: Array<ClienteInterface> = [];
  datosEsp: Array<EspecieInterface> = [];

  constructor(private serviceMas: MascotaService, private http: HttpClient, private router: Router, private serviceCli: ClienteService, private serviceEsp: EspecieService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.refresh();
    this.formMas = this.formBuilder.group({
      idm: [''],
      nombrem: [''],
      especiem: [''],
      razam: [''],
      fechanacimientom: [''],
      fechaentradam: [''],
      clientem: ['']
    });
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
    this.formMas.controls['nombrem'].setValue(item.nombrem);
    this.formMas.controls['especiem'].setValue(item.especiem.ide);
    this.formMas.controls['razam'].setValue(item.razam);
    this.formMas.controls['fechanacimientom'].setValue(item.fechanacimientom);
    this.formMas.controls['fechaentradam'].setValue(item.fechaentradam);
    this.formMas.controls['clientem'].setValue(item.clientem.idc);
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
