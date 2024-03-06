import express from 'express';
import bodyParser from 'body-parser';
// import { Orders } from '../model/Orders.js';
import {orders } from '../model/index.js'
// import { verifyAToken } from "../middleware/AuthenticateUser.js";

const orderRouter = express.Router();

// Fetch all orders
orderRouter.get('/', (req, res) => {
    try {
        orders.fetchAllOrders(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode, 
            msg: 'Failed to retrieve orders'
        });
    }
});

// Fetch order by ID
orderRouter.get('/:id', (req, res) => {
    try {
        Orders.fetchOrderById(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve the order'
        });
    }
});

// Create a new order
// orderRouter.post('/', bodyParser.json(), (req, res) => {
//     try {
//         orders.createOrder(req, res);
//     } catch(e) {
//         res.json({
//             status: res.statusCode,
//             msg: 'Failed to create a new order.'
//         }); 
//     }
// });

// Update an order
// orderRouter.patch('/:id', bodyParser.json(), (req, res) => {
//     try {
//         orders.updateOrder(req, res);
//     } catch(e) {
//         res.json({
//             status: res.statusCode, 
//             msg: "Failed to update the order"
//         });
//     }
// });

// Delete an order
// orderRouter.delete('/:id', (req, res) => {
//     try {
//         orders.deleteOrder(req, res);
//     } catch(e) {
//         res.json({
//             status: res.statusCode,
//             msg: "Failed to delete the order."
//         });
//     }
// });

export { orderRouter };
