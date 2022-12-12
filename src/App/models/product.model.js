class ImagenModel {
    imagenId = 0;
    imagenTitulo = "";
    imagenUrl = "";
}

class CaracteristicaModel {
    id = 0;
    caracteristicaNombre = "";
    caracteristicaIcono = "";
}

export default class ProductModel {
    idProducto = 0;
    titulo = "";
    descripcion = "";
    ciudadNombre = "";
    ciudadPais = "";
    tituloCategoria = "";
    imagenes = [];
    caracteristicas = [];
    houseRulesPolicy = "";
    healthAndSecurityPolicy = "";
    cancellationPolicy = "";
}

