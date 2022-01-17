import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CompraPage } from '../page/compra/compra.po';
import { ToastPage } from '../page/toast/toast.po';
import { browser } from 'protractor';


describe('workspace-project Compra', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let compra: CompraPage;
    let toast: ToastPage;
    browser.manage().window().maximize();

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        compra = new CompraPage();
        toast = new ToastPage();
    });

    it('Deberia crear compra', () => {
        const IDENTIFICADOR_USUARIO = 123456789;
        const CIUDAD = 'Bogotá';
        const DIRECCION = 'Calle 5';
        const PRODUCTO = 'USB HubX';
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
        expect(toast.getNotificacion()).toEqual('Registro exitoso');
    });

    it('Deberia listar compras', () => {
        page.navigateTo();
        navBar.clickBotonCompras();
        compra.clickBotonListarCompras();
        expect(compra.contarCompras()).toBeGreaterThanOrEqual(1);
    });

    it('Deberia eliminar un compra', () => {
        const CODIGO_PRODUCTO: string = 'FGJ10E';

        page.navigateTo();
        navBar.clickBotonCompras();
        compra.clickBotonListarCompras();
        browser.sleep(1000);
        compra.clickBotonEliminarCompra(CODIGO_PRODUCTO);
        browser.sleep(1000);

        expect(toast.getNotificacion()).toEqual('Eliminado exitoso');
    });
});
