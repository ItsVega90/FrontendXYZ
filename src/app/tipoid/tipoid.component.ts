import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { TipoidService } from 'src/app/service/tipoid.service';
import { TipoidInterface } from 'src/app/interface/tipoid.interface';

@Component({
  selector: 'app-tipoid',
  templateUrl: './tipoid.component.html',
  styleUrls: ['./tipoid.component.css'],
})
export class TipoidComponent implements OnInit {
  datosTid: Array<TipoidInterface> = [];
  data: any;

  constructor(
    private serviceTid: TipoidService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
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
