import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ProductoPage } from '../page/producto/producto.po';
import { ToastPage } from '../page/toast/toast.po';
import { browser } from 'protractor';
import { CompraPage } from '../page/compra/compra.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let producto: ProductoPage;
    let toast: ToastPage;
    let compra: CompraPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        producto = new ProductoPage();
        compra = new CompraPage();
        toast = new ToastPage();
    });

    it('Deberia crear producto', () => {
        const CODIGO_PRODUCTO = 'AA20A';
        const NOMBRE = 'MAC5';
        const VALOR_PRODUCTO = 140000;

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonCrearProductos();
        producto.ingresarCodigoProducto(CODIGO_PRODUCTO);
        producto.ingresarNombreProducto(NOMBRE);
        producto.ingresarValorProducto(VALOR_PRODUCTO);
        producto.clickBotonCrearProducto();
        browser.sleep(1000);

        expect(toast.getNotificacion()).toEqual('Registro Exitoso');
    });

    it('No deberia crear producto con codigo repetido', () => {
        const CODIGO_PRODUCTO: string = 'AA20A';
        const NOMBRE: string = 'MAC5';
        const VALOR_PRODUCTO: number = 140000;

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonCrearProductos();
        producto.ingresarCodigoProducto(CODIGO_PRODUCTO);
        producto.ingresarNombreProducto(NOMBRE);
        producto.ingresarValorProducto(VALOR_PRODUCTO);
        producto.clickBotonCrearProducto();
        browser.sleep(1000);

        expect(toast.getNotificacion()).toEqual('El codigo del producto ya existe en el sistema');
    });

    it('No deberia crear producto con nombre repetido', () => {
        const CODIGO_PRODUCTO: string = 'AA20B';
        const NOMBRE: string = 'MAC5';
        const VALOR_PRODUCTO: number = 140000;

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonCrearProductos();
        producto.ingresarCodigoProducto(CODIGO_PRODUCTO);
        producto.ingresarNombreProducto(NOMBRE);
        producto.ingresarValorProducto(VALOR_PRODUCTO);
        producto.clickBotonCrearProducto();
        browser.sleep(1000);

        expect(toast.getNotificacion()).toEqual('El nombre del producto ya existe en el sistema');
    });

    it('No deberia eliminar un producto que ya ha sido comprado', () => {
        const CODIGO_PRODUCTO: string = 'AA20A';
        const IDENTIFICADOR_USUARIO = 123456789;
        const CIUDAD = 'Bogotá';
        const DIRECCION = 'Calle 5';
        const PRODUCTO = 'MAC5';
        const TIPO_USUARIO = 'Level 1';

        page.navigateTo();
        navBar.clickBotonCompras();
        compra.clickBotonCrearCompras();
        compra.ingresarIdentificadorUsuario(IDENTIFICADOR_USUARIO);
        compra.ingresarDireccion(DIRECCION);
        compra.ingresarProductoId(PRODUCTO);
        compra.ingresarTipoUsuario(TIPO_USUARIO);
        compra.ingresarCiudad(CIUDAD);
        compra.clickBotonCrearCompra();
        browser.sleep(1000);
        expect(toast.getNotificacion()).toEqual('Registro exitoso')

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonListarProductos();
        producto.clickBotonEliminarProductos(CODIGO_PRODUCTO);
        browser.sleep(1000);

        expect(toast.getNotificacion()).toEqual('El producto ha sido comprado, elimine la compra primero')

    });

    it('Deberia eliminar un producto', () => {
        const CODIGO_PRODUCTO: string = 'AA20A';

        page.navigateTo();
        navBar.clickBotonCompras();
        compra.clickBotonListarCompras();
        compra.clickBotonEliminarCompra(CODIGO_PRODUCTO);
        browser.sleep(1000);


        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonListarProductos();
        producto.clickBotonEliminarProductos(CODIGO_PRODUCTO);
        browser.sleep(1000);

        expect(toast.getNotificacion()).toEqual('Eliminado exitosamente')

    });
    it('Deberia listar productos', () => {

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonListarProductos();
        browser.sleep(1000);

        expect(producto.contarProductos()).toBeGreaterThanOrEqual(1)
    });
});
