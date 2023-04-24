import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ClienteInterface } from '../interface/cliente.interface';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private service: HttpClient) {}

  selectallCliente(): Observable<any> {
    return this.service.get('http://localhost:8080/api/cliente/selectall');
  }

  saveCliente(cliente: ClienteInterface) {
    return this.service.post<ClienteInterface>(
      'http://localhost:8080/api/cliente/save',
      cliente
    );
  }

  deleteCliente(cliente: ClienteInterface) {
    return this.service.post<ClienteInterface>(
      'http://localhost:8080/api/cliente/delete',
      cliente
    );
  }
}
