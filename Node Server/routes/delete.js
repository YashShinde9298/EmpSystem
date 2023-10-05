const express = require('express');
const mysql = require('mysql2');
const config = require('config');

var connection = mysql.createConnection({
    host: config.get("host"),
    user: config.get("user"),
    password: config.get("password"),
    database: config.get("database")
})

const appForDelete = express.Router();

appForDelete.delete("/:empid", (request, response) => {
    var query = `delete from employee where empid = ${request.params.empid}`;
    console.log(query);
    console.log("In Delete Request");
    connection.query(query, (error, result) => {
        if (error == null) {
            var data = JSON.stringify(result);
            response.send(data);
        }
        else {
            console.log(error);
            response.send(error);
        }
        response.end();
    })
})

module.exports = appForDelete;