const express = require('express');
const userRoutes = require('./routes/user/index');
const productRoutes = require('./routes/product/index');

const v1 = express.Router();

// burada bulunacak routerlar şu şekilde olmalı:
// api/v1/route_name, yani route_name = ana kategori.

v1.use('/user', userRoutes);
v1.use('/product', productRoutes);

module.exports = v1;
