import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

//Services
import { postAuth } from "./services/auth";
import { getLoggedUser } from "./services/users";
import { getBookingsByUser } from "./services/bookings";
import { getProduct } from "./services/products";

//Models
import AuthModel from "./models/auth.model";
import UsuarioModel from "./models/usuario.model";
import BookingModel from "./models/booking.model";
import ProductModel from "./models/product.model";

//Components
import Listing from "./components/listing/listing"
import RecommendedCard from './components/recommendedCard/recommendedCard';


const standardTest = (data, model) => {
    Object.keys(data).forEach(key => {
        expect(typeof data[key]).toEqual(typeof model[key]);
    });

    expect(data.lenght).toEqual(model.lenght);
}


let authCookie;

const setAuthCookie = (string ,data) => {
    authCookie = data;
}

let userCookie;

const setUserCookie = (string, data) => {
    userCookie = data;
}

let product = new ProductModel();

let fechas = {
    fechaCheckIn: "01/03/2023",
    fechaCheckOut: "10/03/2023",
}


test('Authenticating', async () => {

    //Authentication Service
    const response = await postAuth('agomez@mail.com', '123456', setAuthCookie);

    const model = new AuthModel();
    standardTest(response.data, model);
});

test('Getting user data', async () => {

    //Users Service
    const response = await getLoggedUser(authCookie, setUserCookie);

    const model = new UsuarioModel();
    standardTest(response.data, model);
});


test('Getting product', async () => {

    //Product service
    await getProduct(1).then(
        data => {
            const model = new ProductModel();

            standardTest(data, model);

            product = data;
        }
    )
});


test('Getting bookings by user', () => {

    getBookingsByUser(authCookie, userCookie.id).then(
        data => {
            
            const model = new BookingModel();
            data.forEach(d => {
                standardTest(d, model);
            })
        }
    )
});


const mockupData = JSON.parse('[{"idProducto":2,"titulo":"Hilton Buenos Aires","descripcion":"Este moderno hotel con un impresionante atrio se encuentra en el lujoso distrito de Puerto Madero, a 12 minutos a pie de la histórica plaza de Mayo y a 3.1 km del Museo de Arte Moderno de Buenos Aires.","ciudadNombre":"Buenos Aires","ciudadPais":"Argentina","tituloCategoria":"Hoteles","imagenes":[{"imagenId":5,"imagenTitulo":"Pasillo lounge","imagenUrl":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/182745551.jpg?k=66e2b35fac6e0c62d0822bf5b533ede3190f9cd36e30708665f928d606a3e5aa&o=&hp=1"},{"imagenId":6,"imagenTitulo":"Pileta","imagenUrl":"https://plus.unsplash.com/premium_photo-1664278685944-64382414d099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNpdHklMjBob3RlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},{"imagenId":7,"imagenTitulo":"Habitación 1","imagenUrl":"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{"imagenId":8,"imagenTitulo":"Bar","imagenUrl":"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{"imagenId":9,"imagenTitulo":"Habitación 2","imagenUrl":"https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}],"caracteristicas":[{"id":2,"caracteristicaNombre":"Apto mascotas","caracteristicaIcono":"FaPaw"},{"id":4,"caracteristicaNombre":"Pileta","caracteristicaIcono":"FaSwimmer"},{"id":1,"caracteristicaNombre":"Aire acondicionado","caracteristicaIcono":"FaSnowflake"},{"id":5,"caracteristicaNombre":"Estacionamiento gratuito","caracteristicaIcono":"FaCarAlt"}],"houseRulesPolicy":"No se permiten fiestas","healthAndSecurityPolicy":"Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus","cancellationPolicy":"Cancelaciones realizadas 7 días o más antes de la fecha de reserva recibirán un reembolso del 50%. Las cancelaciones realizadas dentro de 48 horas no recibirán un reembolso."}]');

test('Recommended Card render', () => {
    render(
        mockupData?.map((item) => (
            <RecommendedCard key={item.titulo} {...item} />
        )), { wrapper: MemoryRouter }
    )

    const element = screen.getByTestId('recommendedCard');
    expect(element).toBeInTheDocument();
});

test('Listing render', () => {
    render(
        <Listing loading={false} hospedajes={mockupData} />, { wrapper: MemoryRouter }
    )

    const element = screen.getByTestId('listSection');
    expect(element).toBeInTheDocument();
});




