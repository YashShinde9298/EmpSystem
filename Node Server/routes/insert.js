const express = require('express');
const mysql = require('mysql2');
const config = require('config');

const appForInsert = express.Router();

var connection = mysql.createConnection({
    host: config.get("host"),
    user: config.get("user"),
    password: config.get("password"),
    database: config.get("database")
})

appForInsert.post("/", (request, response) => {
    var query = `insert into employee(firstname, lastname, email, phone, gender, salary, role) values('${request.body.firstname}','${request.body.lastname}','${request.body.email}','${request.body.phone}','${request.body.gender}','${request.body.salary}','${request.body.role}')`;
    console.log(query);
    console.log("In Post Request");
    connection.query(query, (error, result) => {
        if (error == null) {
            var data = JSON.stringify(result);
            response.setHeader("Content-type", "application/json");
            response.write(data);
        }
        else {
            console.log(error);
            response.setHeader("Content-type", "application/json");
            response.write(error);
        }
        response.end();
    })
})

module.exports = appForInsert;