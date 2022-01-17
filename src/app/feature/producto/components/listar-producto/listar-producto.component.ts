import { Component, OnInit } from '@angular/core';
import { ToastService } from '@core/services/toast.service';


import { Producto } from '@shared/model/producto';
import { ProductoService } from '@shared/service/producto.service';


@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  public productos: Producto[];
  constructor(protected productoService: ProductoService, protected toastService: ToastService) { }

  ngOnInit() {
    this.obtenerProducto();
  }

  eliminarProducto(producto: Producto, index: number) {
    this.productoService.eliminar(producto).subscribe(
      res => {
        console.log(res);
        this.removerProductoEnLista(index);
        this.showSuccess('Eliminado exitosamente');
      }, error => {
        this.showDanger(error.error.mensaje);
      }
    );
  }
  obtenerProducto() {
    this.productoService.consultar().subscribe(productos => this.productos = productos);
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, { classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light'});
  }

  removerProductoEnLista(index: number) {
    this.productos.splice(index, 1);
  }
}
