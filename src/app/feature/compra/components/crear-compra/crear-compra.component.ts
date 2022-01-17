import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompraService } from '@compra/shared/service/compra.service';
import { Producto } from '@shared/model/producto';

import { Observable } from 'rxjs';

import { Ciudad } from '@shared/model/ciudad';
import { CiudadService } from '@shared/service/ciudad.service';
import { ProductoService } from '@shared/service/producto.service';
import { ToastService } from '@core/services/toast.service';


@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.css']
})
export class CrearCompraComponent implements OnInit {
  compraForm: FormGroup;
  productos: Observable<Producto[]>;
  ciudades: Observable<Ciudad[]>;
  tiposUsuario: any;
  constructor(
    protected productoServices: ProductoService,
    protected compraService: CompraService,
    protected ciudadService: CiudadService,
    protected toastService: ToastService) { }

  ngOnInit() {
    this.construirFormularioCompra();
    this.consultarProductos();
    this.consultarCiudades();
    this.cargarTiposUsuario();
  }

  private cargarTiposUsuario() {
    this.tiposUsuario = [
      { tipo: 'Level 1', id: 1 },
      { tipo: 'Level 2', id: 2 },
      { tipo: 'Level 3', id: 3 },
    ];
  }
  crear() {
    this.compraService.guardar(this.compraForm.value).subscribe(
      res => {
        if (res.valor > 0) {
          this.compraForm.reset();
          this.showSuccess('Registro exitoso');
        }
      }, error => {
        this.showDanger(error.error.mensaje);
      });
  }
  consultarProductos() {
    this.productos = this.productoServices.consultar();
  }

  consultarCiudades() {
    this.ciudades = this.ciudadService.consultar();
  }
  showSuccess(mensaje) {
    this.toastService.show(mensaje, { classname: 'bg-success text-light' });
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light' });
  }

  private construirFormularioCompra() {
    this.compraForm = new FormGroup({
      identificadorUsuario: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(10)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(1),
      Validators.maxLength(25)]),
      ciudad: new FormControl('', [Validators.required]),
      productoId: new FormControl('', [Validators.required]),
      tipoUsuario: new FormControl('', [Validators.required]),
    });
  }
}
