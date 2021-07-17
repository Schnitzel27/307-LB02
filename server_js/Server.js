'use strict';

let express = require("express");
let bodyParser = require("body-parser");
let app     = express();
const { v4: uuidv4 } = require('uuid');
const UserRepository = require('./UserRepository');
const Validation = require('./ValidationService');

const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; 

//Man muss aufpassen, dass man den Path richtig setzt
const staticPath = '.\C:\Users\Lysse\OneDrive\Dokumente\BZZ\Valdi\server_js';
const registrationFile = staticPath+'registration.json';

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/test1', (req, res) => {
    const id = uuidv4();
    res.send(id);
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {

    const HTTP_STATUS_NO_ACCEPTABLE = 406;
    //Daten des Posts-Requests auslesen und zusätzlich eine User-id erzeugen
    let userObj = {
        "id": uuidv4(),
        "username": req.body.user.username,
        "email": req.body.user.email,
        "password": req.body.user.password,
        "prename": req.body.user.prename,
        "name": req.body.user.name,
        "phonenumber": req.body.user.phonenumber,
        "repeatpassword": req.body.user.repeatpassword

    }

    let result = Validation.validateUser(userObj);
    if (result.isNotValid) {
        res.status(HTTP_STATUS_NO_ACCEPTABLE).send(result.msg);
    } else {
        let userRepo = new UserRepository(registrationFile);
        userRepo.read()
            .then((data) => {
                console.log(userObj);
                data.push(userObj);
                return data;
            })
            .then(data => userRepo.save(data))
            .catch(error => {
                console.error(error);
            });
        res.status(201).send(`User ${userObj.username} inserted!`);
    }
});