import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCompraComponent } from './components/crear-compra/crear-compra.component';
import { ListarCompraComponent } from './components/listar-compra/listar-compra.component';
import { CompraComponent } from './components/compra/compra.component';


const routes: Routes = [
  {
    path: '',
    component: CompraComponent,
    children: [
      {
        path: 'crear',
        component: CrearCompraComponent
      },
      {
        path: 'listar',
        component: ListarCompraComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
