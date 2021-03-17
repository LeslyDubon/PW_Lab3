const express = require('express');
const bd_lenguajes = require('../bd_lenguajes');
const router = express.Router();

function inicio(){
    bd_lenguajes.inicio();
}

router.get('/get',(req,res) => {
    res.status(200).json(bd_lenguajes.readAll());
    res.end();
}
);

router.get('/get/:id',(req,res) => {
    let lenguaje = bd_lenguajes.readOne(req.params.id);
    if(lenguaje == null){
        res.status(404);
    }
    else
    {
        res.status(200).json(lenguaje);
    }
    res.end();
}
);


router.post('/create',(req,res) => {
    res.status(201).json(bd_lenguajes.create(req.body.Nombre, 
        req.body.Hablantes,
        req.body.Origen,
        req.body.Familia,
        req.body.Paises));
    res.end();
}
);

router.put('/edit/:id',(req,res) => {
    let lenguaje = bd_lenguajes.update(parseInt(req.params.id), req.body.Nombre, 
    req.body.Hablantes,
    req.body.Origen,
    req.body.Familia,
    req.body.Paises);
    if(lenguaje == null){
        res.status(404);
    }
    else
    {
        res.status(204);
    }
    res.end();
}
);

router.delete('/delete/:id',(req,res) => {
    let lenguaje = bd_lenguajes.deleteOne(req.params.id);
    if(lenguaje == null){
        res.status(404);
    }
    else
    {
        res.status(204);
    }
    res.end();
}
);

inicio();
module.exports = router;