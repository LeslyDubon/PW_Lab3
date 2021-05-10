const express = require('express');
var mongo = require("../bd_mongo");
var crypto = require('crypto');
const router = express.Router();

router.post('/login', (req, res) => {
    const email = req.body.Email;
    const password = crypto.createHash('md5').update(req.body.Password).digest("hex");
    mongo.readUser(email).then(function (user) {

        if (user.length == 0) {
            res.status(404);
        }
        else {
            if (email == user[0].Email && password == user[0].Password) {
                res.status(200);
            }
            else {
                res.status(401);
            }

        }
        res.end();
    });
}
);

router.post('/create', (req, res) => {
    const email = req.body.Email;
    const password = crypto.createHash('md5').update(req.body.Password).digest("hex");
    mongo.readUser(email).then(function (user) {
        if (user.length == 0) {
            mongo.createUser(req.body.Nombre,
                email,
                password).then(function (user) {
                    res.status(201);
                    res.end();
                });
        }
        else {
            res.status(400);
            res.end();
        }
    });

}
);

router.put('/editPassword', (req, res) => {
    mongo.updatePassword(req.body.Email,
        req.body.Password).then(function (user) {
            if (user.modifiedCount == 0) {
                res.status(404);
            }
            else {
                res.status(204);
            }
            res.end();
        });
}
);

module.exports = router;