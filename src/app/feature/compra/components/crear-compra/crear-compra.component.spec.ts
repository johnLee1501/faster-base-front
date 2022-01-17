import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CompraService } from '@compra/shared/service/compra.service';
import { HttpService } from '@core/services/http.service';
import { CiudadService } from '@shared/service/ciudad.service';
import { ProductoService } from '@shared/service/producto.service';
import { of } from 'rxjs';

import { CrearCompraComponent } from './crear-compra.component';

describe('CrearCompraComponent', () => {
  let component: CrearCompraComponent;
  let fixture: ComponentFixture<CrearCompraComponent>;
  let compraService: CompraService;
  let ciudadService: CiudadService;
  let productoService: ProductoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCompraComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [CompraService, CiudadService, ProductoService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompraComponent);
    component = fixture.componentInstance;
    compraService = TestBed.inject(CompraService);
    productoService = TestBed.inject(ProductoService);
    ciudadService = TestBed.inject(CiudadService);
    spyOn(compraService, 'guardar').and.returnValue(
      of({ valor: 1 })
    );
    spyOn(ciudadService, 'consultar').and.returnValue(
      of([
        {
          id: 1,
          nombre: 'Bogotá'
        }
      ])
    );
    spyOn(productoService, 'consultar').and.returnValue(
      of([
        {
          id: 1,
          codigoProducto: 'FGH12D',
          nombre: 'Iphone 12',
          valorProducto: 4000000
        }
      ])
    );
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.compraForm.valid).toBeFalsy();
  });

  it('Registrando compra', () => {
    component.compraForm.controls.identificadorUsuario.setValue(123456789);
    component.compraForm.controls.direccion.setValue('Calle 1');
    component.compraForm.controls.ciudad.setValue('Bogotá');
    component.compraForm.controls.productoId.setValue(1);
    component.compraForm.controls.tipoUsuario.setValue(1);

    expect(component.compraForm.valid).toBeTruthy();

    component.crear();

  });
});
