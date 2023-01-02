const express = require('express');
const crudsFormsRoutes = require('./routes/routesCrudForms');

const app = express();
app.use(express.json());
app.use(crudsFormsRoutes);

module.exports = app;