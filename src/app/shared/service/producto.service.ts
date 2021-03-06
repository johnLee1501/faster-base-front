import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Producto, ProductoRespuesta } from '@shared/model/producto';
import { environment } from 'src/environments/environment';



@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Producto[]>(`${environment.endpoint}/productos`, this.http.optsName('consultar productos'));
  }

  public guardar(producto: Producto) {
    return this.http.doPost<Producto, ProductoRespuesta>(`${environment.endpoint}/productos`, producto,
      this.http.optsName('crear/actualizar productos'));
  }

  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.id}`,
      this.http.optsName('eliminar productos'));
  }
}
