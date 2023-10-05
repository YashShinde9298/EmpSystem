const express = require('express');
const config = require('config');
const dashboardRelatedRoutes = require('./routes/dashboard');
const editRelatedRoutes = require('./routes/edit');
const deleteRelatedRoutes = require('./routes/delete');
const insertRelatedRoutes = require('./routes/insert');
const app = express();

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Methods', "*"),
        response.setHeader('Access-Control-Allow-Origin', "*"),
        response.setHeader('Access-Control-Allow-Headers', "*"),
        next();
})

app.use(express.json());
app.use('/dashboard', dashboardRelatedRoutes);
app.use('/edit', editRelatedRoutes);
app.use('/delete', deleteRelatedRoutes);
app.use('/add', insertRelatedRoutes);
const portNo = config.get("PORT");

app.listen(portNo, () => {
    console.log("Server started at " + portNo);
})