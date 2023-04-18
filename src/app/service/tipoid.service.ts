import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoidService {

  constructor(private service: HttpClient) { }

  selectallTipoid(): Observable<any> {
    return this.service.get('http://localhost:8080/api/tipoid/selectall');
  }

}
