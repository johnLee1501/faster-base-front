import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ToastService } from '@core/services/toast.service';
import { ProductoService } from '@shared/service/producto.service';



const LONGITUD_MINIMA_PERMITIDA_TEXTO = 1;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 6;
const VALOR_MINIMO = 1;
const VALOR_MAXIMO = 5000000;

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService, protected toastService: ToastService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  crear() {
    this.productoServices.guardar(this.productoForm.value).subscribe(
      res => {
        if (res.valor > 0) {
          this.productoForm.reset();
          this.showSuccess('Registro Exitoso');
        }
      }, error => {
        this.showDanger(error.error.mensaje);
      });
  }
  showSuccess(mensaje) {
    this.toastService.show(mensaje, { classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light'});
  }
  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      codigoProducto: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      nombre: new FormControl('', [Validators.required]),
      valorProducto: new FormControl('', [Validators.required, Validators.min(VALOR_MINIMO),
      Validators.max(VALOR_MAXIMO)])
    });
  }

  public validarAlfanumerico(event, form: AbstractControl) {
    event.target.value = event.target.value.replace(/[^A-ZÁÉÍÓÚÑa-záéíóúñ0123456789\s]+/g, '').trimLeft();
    const start = event.target.selectionStart;
    event.target.value = event.target.value.toUpperCase();
    event.target.selectionStart = start;
    event.target.selectionEnd = start;
    if (form.value) {
      form.setValue(event.target.value, { emitEvent: false });
    } else {
      return event.target.value;
    }
  }
}
