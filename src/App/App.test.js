//Services
import { postAuth } from "./services/auth";
import { getLoggedUser } from "./services/users";

//Models
import AuthModel from "./models/auth.model";
import UsuarioModel from "./models/usuario.model";

import BookingModel from "./models/booking.model";
import ProductModel from "./models/product.model";


import App from "./App";
import { getBookings, getBookingsByUser, postBooking } from "./services/bookings";
import { getProduct, getProducts, createProduct } from "./services/products";


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


