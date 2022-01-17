import { HomePage } from '../page/home/home.po';

describe('workspace-project Producto', () => {
    let home: HomePage;
    beforeEach(() => {
        home = new HomePage();
    });

    it('Mostrar home con mensaje', () => {
        home.navigateTo();
        expect(home.getCardHeader()).toEqual('Comercio Electrónico');
        expect(home.getCardTitle()).toEqual('Bienvenido a su portal de compras faster');
        expect(home.getCardText()).toEqual('Realiza tus compras y obten tu envío gratis');
        expect(home.getButton()).toEqual('Comprar');
        home.clickBotonCompras();
    })
});
