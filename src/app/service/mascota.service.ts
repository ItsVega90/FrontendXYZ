import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MascotaInterface } from '../interface/mascota.interface';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  constructor(private service: HttpClient) {}

  selectallMascota(): Observable<any> {
    return this.service.get('http://localhost:8080/api/mascota/selectall');
  }

  saveMascota(mascota: MascotaInterface) {
    return this.service.post<MascotaInterface>(
      'http://localhost:8080/api/mascota/save',
      mascota
    );
  }

  deleteMascota(mascota: MascotaInterface) {
    return this.service.post<MascotaInterface>(
      'http://localhost:8080/api/mascota/delete',
      mascota
    );
  }
}
