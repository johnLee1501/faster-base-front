import { by, element } from 'protractor';

export class ToastPage {
    private notificaciontRegistro = element(by.css('app-root .toast-body'));

    getNotificacion() {
        return this.notificaciontRegistro.getText() as Promise<string>;
    }
}
