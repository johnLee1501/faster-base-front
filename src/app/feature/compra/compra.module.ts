import { NgModule } from '@angular/core';

import { CompraRoutingModule } from './compra-routing.module';
import { ListarCompraComponent } from './components/listar-compra/listar-compra.component';
import { CrearCompraComponent } from './components/crear-compra/crear-compra.component';
import { CompraComponent } from './components/compra/compra.component';
import { SharedModule } from '@shared/shared.module';
import { CompraService } from './shared/service/compra.service';
import { CiudadService } from '@shared/service/ciudad.service';
import { ProductoService } from '@shared/service/producto.service';



@NgModule({
  declarations: [
    CrearCompraComponent,
    ListarCompraComponent,
    CompraComponent
  ],
  imports: [
    CompraRoutingModule,
    SharedModule
  ],
  providers: [CompraService, CiudadService, ProductoService]
})
export class CompraModule { }
