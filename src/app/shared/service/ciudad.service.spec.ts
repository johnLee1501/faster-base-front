import { TestBed } from '@angular/core/testing';

import { CiudadService } from './ciudad.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Ciudad } from '@shared/model/ciudad';



describe('CiudadService', () => {
  let httpMock: HttpTestingController;
  let service: CiudadService;
  const apiEndpointCiudadConsulta = `${environment.endpoint}/ciudades`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CiudadService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CiudadService);
  });

  it('should be created', () => {
    const ciudadService: CiudadService = TestBed.inject(CiudadService);
    expect(ciudadService).toBeTruthy();
  });

  it('deberia listar ciudades', () => {
    const dummyCiudads = [
      new Ciudad(1, 'Bogotá'), new Ciudad(2, 'Medellín')
    ];
    service.consultar().subscribe(ciudades => {
      expect(ciudades.length).toBe(2);
      expect(ciudades).toEqual(dummyCiudads);
    });
    const req = httpMock.expectOne(apiEndpointCiudadConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCiudads);
  });

});
