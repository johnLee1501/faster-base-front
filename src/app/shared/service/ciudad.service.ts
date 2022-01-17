import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Ciudad } from '../model/ciudad';




@Injectable()
export class CiudadService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Ciudad[]>(`${environment.endpoint}/ciudades`, this.http.optsName('consultar ciudades'));
  }
}
