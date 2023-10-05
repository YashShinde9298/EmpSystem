const express = require('express');
const mysql = require('mysql2');
const config = require('config');
const { request } = require('http');

var connection = mysql.createConnection({
    host: config.get("host"),
    user: config.get("user"),
    password: config.get("password"),
    database: config.get("database")
})

const appForEdit = express.Router();

appForEdit.get("/:empid", (request, response) => {
    var query = `select empid, firstname, lastname, email, phone, gender, salary, role from employee where empid=${request.params.empid}`;
    connection.query(query, (error, result) => {
        if (error == null) {
            var r = JSON.stringify(result);
            response.send(r);
        } else {
            console.log(error);
            response.send(JSON.stringify(error));
        }
    })
})

appForEdit.put("/:empid", (request, response) => {
    var query = `update employee set firstname='${request.body.firstname}', lastname='${request.body.lastname}', email='${request.body.email}', phone='${request.body.phone}', gender='${request.body.gender}', role='${request.body.role}' where empid=${request.params.empid}`;
    console.log(query);
    console.log("In Put Request");
    connection.query(query, (error, result) => {
        if (error == null) {
            var r = JSON.stringify(result);
            response.send(r);
        }
        else {
            console.log(error);
            response.send(JSON.stringify(error));
        }
    })
})

module.exports = appForEdit;