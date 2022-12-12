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

const setAuthCookie = (data) => {
    authCookie = data;
}

let userCookie;

const setUserCookie = (data) => {
    userCookie = data;
}

let product = new ProductModel();

let fechas = {
    fechaCheckIn: "01/03/2023",
    fechaCheckOut: "10/03/2023",
}


test('Authenticating', async () => {

    console.log("start");

    /* ESTO ANDA, NO SE PORQUE */
    // let status = 0;

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ 
    //         email: 'agomez@mail.com',
    //         password: '123456'
    //     })
    // };

    // await fetch(`http://localhost:8080/auth/`, requestOptions)
    //     .then(response => {
    //         status = response.status;
    //         return response.json()
    //     }).then(data => {
    //         console.log(data);
    //     })

    /* ESTO NO ANDA, TAMPOCO SE PORQUE JAJAJ */

    //Authentication Service
    const response = postAuth('agomez@mail.com', '123456', setAuthCookie);

    const model = new AuthModel();
    //standardTest(response, model);

    response.then(data => console.log(data))

    //console.log(response);

    console.log("end");
});

// test('Getting user data', async () => {

//     //Users Service
//     await getLoggedUser(authCookie, setUserCookie).then(
//         data => {
//             const model = new UsuarioModel();

//             standardTest(data, model);

//             console.log(data);
//         }
//     )
// });


// test('Getting product for testing', async () => {

//     //Product service
//     await getProduct(1).then(
//         data => {
//             const model = new ProductModel();

//             standardTest(data, model);

//             product = data;
//         }
//     )
// });


// test('Testing Booking service', () => {

//     //Booking service
//     getBookings(1).then(
//         data => {
//             const model = new BookingModel();

//             standardTest(data, model);
//         }
//     )

//     getBookingsByUser(authCookie, userCookie.id).then(
//         data => {
            
//             const model = new BookingModel();
//             standardTest(data, model);
//         }
//     )

//     postBooking(authCookie, userCookie, product, fechas).then(
//         data => {
//             const model = new BookingModel();

//             standardTest(data, model);
//         }
//     )
// });


