import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EspecieService {
  constructor(private service: HttpClient) {}

  selectallEspecie(): Observable<any> {
    return this.service.get('http://localhost:8080/api/especie/selectall');
  }
}
