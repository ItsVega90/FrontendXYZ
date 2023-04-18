import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ClienteService } from 'src/app/service/cliente.service';
import { ClienteInterface } from 'src/app/interface/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  datosCli: Array<ClienteInterface> = [];
  data: any;

  constructor(private serviceCli: ClienteService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {

    this.serviceCli.selectallCliente().subscribe(datos => {
      this.datosCli = datos.data
      console.log(datos);
    }, error => {
      console.log(error);
    });
  }

}
