import { by, element } from 'protractor';

export class ProductoPage {
    private linkCrearProducto = element(by.id('linkCrearProducto'));
    private linkListarProductos = element(by.id('linkListarProductos'));
    private botonCrearProducto = element(by.id('btnCrearProducto'));
    private inputCodigoProducto = element(by.id('codigoProducto'));
    private inputNombreProducto = element(by.id('nombre'));
    private inputValorProducto = element(by.id('valorProducto'));
    private listaProductos = element.all(by.css('app-root app-producto app-listar-producto table tbody tr'));

    async clickBotonCrearProductos() {
        await this.linkCrearProducto.click();
    }
    async clickBotonListarProductos() {
        await this.linkListarProductos.click();
    }
    async clickBotonCrearProducto() {
        await this.botonCrearProducto.click();
    }
    async ingresarCodigoProducto(codigoProducto) {
        await this.inputCodigoProducto.sendKeys(codigoProducto);
    }
    async ingresarNombreProducto(nombre) {
        await this.inputNombreProducto.sendKeys(nombre);
    }
    async ingresarValorProducto(valorProducto) {
        await this.inputValorProducto.sendKeys(valorProducto);
    }
    async contarProductos() {
        return this.listaProductos.count();
    }
    async clickBotonEliminarProductos(codigoProducto) {
        await element(by.id(`borrar-${codigoProducto}`)).click();
    }
}
