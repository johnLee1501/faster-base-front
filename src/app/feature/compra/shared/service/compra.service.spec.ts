import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';

import { HttpResponse } from '@angular/common/http';

import { Compra, CompraRespuesta } from '@compra/shared/model/compra';
import { CompraService } from './compra.service';


describe('CompraService', () => {
  let httpMock: HttpTestingController;
  let service: CompraService;
  const apiEndpointCompraConsulta = `${environment.endpoint}/compras`;
  const apiEndpointCompras = `${environment.endpoint}/compras`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompraService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CompraService);
  });

  it('should be created', () => {
    const compraService: CompraService = TestBed.inject(CompraService);
    expect(compraService).toBeTruthy();
  });

  it('deberia listar compras', () => {
    const dummyCompras = [
      new Compra(123456789, 'Calle 1', 'Bogotá', 1, 1), new Compra(123456789, 'Calle 1', 'Bogotá', 1, 1)
    ];
    service.consultar().subscribe(compras => {
      expect(compras.length).toBe(2);
      expect(compras).toEqual(dummyCompras);
    });
    const req = httpMock.expectOne(apiEndpointCompraConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCompras);
  });

  it('deberia crear un compra', () => {
    const dummyCompra = new Compra(123456789, 'Calle 1', 'Bogotá', 1, 1);
    service.guardar(dummyCompra).subscribe((respuesta) => {
      expect(respuesta).toEqual({ valor: 1 });
    });
    const req = httpMock.expectOne(apiEndpointCompras);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<CompraRespuesta>({ body: { valor: 1 } }));
  });

  it('deberia eliminar un compra', () => {
    const dummyCompra = new Compra(123456789, 'Calle 1', 'Bogotá', 1, 1, 1);
    service.eliminar(dummyCompra).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCompras}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
