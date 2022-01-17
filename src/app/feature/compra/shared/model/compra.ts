export class Compra {
    id: number;
    identificadorUsuario: number;
    direccion: string;
    ciudad: string;
    productoId: number;
    tipoUsuario: number;
    fechaCompra: Date;
    fechaEntrega: Date;
    constructor(identificadorUsuario: number, direccion: string, ciudad: string, productoId: number,
                tipoUsuario: number, id?: number, fechaCompra?: Date, fechaEntrega?: Date) {
        this.id = id;
        this.identificadorUsuario = identificadorUsuario;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.productoId = productoId;
        this.tipoUsuario = tipoUsuario;
        this.fechaCompra = fechaCompra;
        this.fechaEntrega = fechaEntrega;
    }
}

export interface CompraRespuesta {
    valor: number;
}
