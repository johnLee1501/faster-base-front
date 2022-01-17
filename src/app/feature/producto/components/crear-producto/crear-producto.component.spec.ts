import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearProductoComponent } from './crear-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductoService } from '@shared/service/producto.service';

describe('CrearProductoComponent', () => {
  let component: CrearProductoComponent;
  let fixture: ComponentFixture<CrearProductoComponent>;
  let productoService: ProductoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearProductoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ProductoService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'guardar').and.returnValue(
      of({ valor: 1 })
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.productoForm.valid).toBeFalsy();
  });

  it('Registrando producto', () => {
    expect(component.productoForm.valid).toBeFalsy();
    component.productoForm.controls.codigoProducto.setValue('001AA');
    component.productoForm.controls.nombre.setValue('Producto test');
    component.productoForm.controls.valorProducto.setValue(150000);
    expect(component.productoForm.valid).toBeTruthy();

    component.crear();

  });
});
