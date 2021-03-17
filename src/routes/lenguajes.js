const express = require('express');
const bd_lenguajes = require('../bd_lenguajes');
const router = express.Router();

function inicio(){
    bd_lenguajes.inicio();
}

router.get('/api/v1/lenguaje/get',(req,res) => {
    res.json(bd_lenguajes.readAll());
    res.end();
}
);

router.get('/api/v1/lenguaje/get/:id',(req,res) => {
    res.json(bd_lenguajes.readOne(req.params.id));
    res.end();
}
);


router.post('/api/v1/lenguaje/create',(req,res) => {
    res.json(bd_lenguajes.create(req.body.Nombre, 
        req.body.Hablantes,
        req.body.Origen,
        req.body.Familia,
        req.body.Paises));
    res.end();
}
);

router.put('/api/v1/lenguaje/edit/:id',(req,res) => {
    res.json(bd_lenguajes.update(parseInt(req.params.id), req.body.Nombre, 
        req.body.Hablantes,
        req.body.Origen,
        req.body.Familia,
        req.body.Paises));
    res.end();
}
);

router.delete('/api/v1/lenguaje/delete/:id',(req,res) => {
    res.json(bd_lenguajes.deleteOne(req.params.id));
    res.end();
}
);

inicio();
module.exports = router;