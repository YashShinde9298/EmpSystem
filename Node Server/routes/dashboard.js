const express = require('express');
const config = require('config');
const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: config.get("host"),
    user: config.get("user"),
    password: config.get("password"),
    database: config.get("database")
})

const appForDashboard = express.Router();

appForDashboard.get("/", (request, response) => {
    var query = `select empid, firstname, lastname, email, phone, salary, gender, role from employee`;
    console.log(query);
    console.log("In Get Request");
    connection.query(query, (error, result) => {
        if (error == null) {
            var v = JSON.stringify(result);
            response.setHeader("Content-type", "application/json");
            response.send(v);
        } else {
            console.log(error);
            response.setHeader("Content-type", "application/json");
            response.send(JSON.stringify(error));
        }
    })
})

module.exports = appForDashboard;