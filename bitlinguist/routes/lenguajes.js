const express = require('express');
var mongo = require("../bd_mongo")
const router = express.Router();

function inicio() {
    mongo.inicio();
}

router.get('/get', (req, res) => {
    mongo.readAll().then(function (lenguajes) {
        console.log(lenguajes);
        res.status(200).json(lenguajes);
        res.end();
    });
}
);

router.get('/get/:id', (req, res) => {

    mongo.readOne(parseInt(req.params.id)).then(function (lenguaje) {
        if (lenguaje.length == 0) {
            res.status(404);
        }
        else {
            res.status(200).json(lenguaje);
        }
        res.end();
    });
}
);


router.post('/create', (req, res) => {
    mongo.create(req.body.Nombre,
        req.body.Hablantes,
        req.body.Origen,
        req.body.Familia,
        req.body.Paises).then(function (lenguaje) {
            res.status(201).json(lenguaje);
            res.end();
        });
}
);

router.put('/edit/:id', (req, res) => {
    mongo.update(parseInt(req.params.id), req.body.Nombre,
        req.body.Hablantes,
        req.body.Origen,
        req.body.Familia,
        req.body.Paises).then(function (lenguaje) {
            if (lenguaje.modifiedCount == 0) {
                res.status(404);
            }
            else {
                res.status(204);
            }
            res.end();
        });
}
);

router.delete('/delete/:id', (req, res) => {
    mongo.deleteOne(parseInt(req.params.id)).then(function (lenguaje) {
        console.log(lenguaje)
        if (lenguaje.deletedCount == 0) {
            res.status(404);
        }
        else {
            res.status(204);
        }
        res.end();
    });
}
);

inicio();
module.exports = router;