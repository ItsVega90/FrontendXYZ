import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { EspecieService } from 'src/app/service/especie.service';
import { EspecieInterface } from 'src/app/interface/especie.interface';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css'],
})
export class EspecieComponent implements OnInit {
  datosEsp: Array<EspecieInterface> = [];
  data: any;

  constructor(
    private serviceEsp: EspecieService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.serviceEsp.selectallEspecie().subscribe(
      (datos) => {
        this.datosEsp = datos.data;
        console.log(datos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
