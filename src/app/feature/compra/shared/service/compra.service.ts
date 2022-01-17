import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Compra, CompraRespuesta } from '../model/compra';


@Injectable()
export class CompraService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Compra[]>(`${environment.endpoint}/compras`, this.http.optsName('consultar compras'));
  }
  public consultarPorIdentificadorUsuario(identificadorUsuario: number) {
    return this.http.doGet<Compra[]>(`${environment.endpoint}/compras/` + identificadorUsuario, this.http.optsName('consultar compras usuario'));
  }
  public guardar(compra: Compra) {
    return this.http.doPost<Compra, CompraRespuesta>(`${environment.endpoint}/compras`, compra,
      this.http.optsName('crear/actualizar compras'));
  }

  public eliminar(compra: Compra) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/compras/${compra.id}`,
      this.http.optsName('eliminar compras'));
  }
}
