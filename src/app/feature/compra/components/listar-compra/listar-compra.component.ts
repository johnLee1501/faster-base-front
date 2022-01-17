import { Component, OnInit } from '@angular/core';
import { Compra } from '@compra/shared/model/compra';
import { CompraService } from '@compra/shared/service/compra.service';
import { ToastService } from '@core/services/toast.service';


@Component({
  selector: 'app-listar-compra',
  templateUrl: './listar-compra.component.html',
  styleUrls: ['./listar-compra.component.css']
})
export class ListarCompraComponent implements OnInit {
  identificadorUsuario: number;
  public compras: Compra[];
  constructor(protected compraService: CompraService, protected toastService: ToastService) { }

  ngOnInit(): void {
    this.consultarCompras();
  }
  consultarComprasPorIdUsuario(identificadorUsuario: number) {
    this.compraService.consultarPorIdentificadorUsuario(identificadorUsuario).subscribe(compras => this.compras = compras);
  }

  consultarCompras() {
    this.compraService.consultar().subscribe(compras => this.compras = compras);
  }

  eliminarCompra(compra: Compra) {
    this.compraService.eliminar(compra).subscribe(
      res => {
        console.log(res);
        this.removerCompraDeLista(this.compras, compra);
        this.showSuccess('Eliminado exitoso');
      }, error => {
        this.showDanger(error.error.mensaje);
      }
    );
  }
  removerCompraDeLista(compras: Compra[], compra: Compra) {
    const i = compras.indexOf(compra);
    if (i !== -1) {
      compras.splice(i, 1);
    }
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, { classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light'});
  }

}
