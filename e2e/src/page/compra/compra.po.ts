import { by, element } from 'protractor';

export class CompraPage {
    private linkCrearCompra = element(by.id('linkCrearCompra'));
    private linkListarCompras = element(by.id('linkListarCompra'));
    private botonCrearCompra = element(by.id('btnCrearCompra'));
    private identificadorUsuario = element(by.id('identificadorUsuario'));
    private direccion = element(by.id('direccion'));
    private ciudad = element(by.id('ciudad'));
    private productoId = element(by.id('productoId'));
    private tipoUsuario = element(by.id('tipoUsuario'));
    private listaCompras = element.all(by.css('app-root app-compra app-listar-compra table tbody tr'));


    async clickBotonCrearCompras() {
        await this.linkCrearCompra.click();
    }

    async clickBotonListarCompras() {
        await this.linkListarCompras.click();
    }
    async clickBotonCrearCompra() {
        await this.botonCrearCompra.click();
    }
    async ingresarIdentificadorUsuario(identificadorUsuario) {
        await this.identificadorUsuario.sendKeys(identificadorUsuario);
    }
    async ingresarDireccion(direccion) {
        await this.direccion.sendKeys(direccion);
    }
    async ingresarCiudad(ciudad) {
        await this.ciudad.sendKeys(ciudad);
    }
    async ingresarProductoId(productoId) {
        await this.productoId.sendKeys(productoId);
    }
    async ingresarTipoUsuario(tipoUsuario) {
        await this.tipoUsuario.sendKeys(tipoUsuario);
    }
    async contarCompras() {
        return this.listaCompras.count();
    }
    async clickBotonEliminarCompra(idCompra) {
        await element(by.id(`borrar-${idCompra}`)).click();
    }
}
