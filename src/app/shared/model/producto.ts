export class Producto {
    id: number;
    codigoProducto: string;
    nombre: string;
    valorProducto: number;

    constructor(codigoProducto: string, nombre: string, valorProducto: number, id?: number) {
        this.id = id;
        this.codigoProducto = codigoProducto;
        this.nombre = nombre;
        this.valorProducto = valorProducto;
    }
}

export interface ProductoRespuesta {
    valor: number;
}
