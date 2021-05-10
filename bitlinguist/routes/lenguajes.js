const express = require('express');
var mongo = require("../bd_mongo")
const router = express.Router();
const redis = require('redis');

const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient({
    host: 'redis',
    //host: "127.0.0.1",
    port: REDIS_PORT
});

function inicio() {
    mongo.inicio();
}

function cachegetAll(req, res, next) {
    client.get("getAll", (error, data) => {
        if (data !== null) {
            res.status(200).json(JSON.parse(data));
            res.end();
        } else {
            next()
        }
    }

    )
}

router.get('/get', cachegetAll, (req, res) => {
    mongo.readAll().then(function (lenguajes) {
        console.log(lenguajes);
        client.setex("getAll", 15, JSON.stringify(lenguajes));
        res.status(200).json(lenguajes);
        res.end();
    });
}
);

function cacheget(req, res, next) {
    const id = req.params.id;
    client.get(id, (error, data) => {
        if (data !== null) {
            res.status(200).json(JSON.parse(data));
            res.end();
        } else {
            next()
        }
    }

    )
}

router.get('/get/:id', cacheget, (req, res) => {
    const id = req.params.id;
    mongo.readOne(parseInt(id)).then(function (lenguaje) {
        if (lenguaje.length == 0) {
            res.status(404);
        }
        else {
            client.setex(id, 60, JSON.stringify(lenguaje));
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
        req.body.Paises,
        req.body.Imagen).then(function (lenguaje) {
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
        req.body.Paises,
        req.body.Imagen).then(function (lenguaje) {
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