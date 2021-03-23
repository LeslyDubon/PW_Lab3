const express = require('express');
var mongo = require("../bd_mongo")
const router = express.Router();

function inicio(){
    mongo.inicio();
}

router.get('/get',(req,res) => {
    

    mongo.readAll().then(function(lenguajes){
        console.log(lenguajes);
        res.status(200).json(lenguajes);
        res.end();
    });
    
    
}
);

router.get('/get/:id',(req,res) => {
    let lenguaje = mongo.readOne(req.params.id);
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
    res.status(201).json(mongo.create(req.body.Nombre, 
        req.body.Hablantes,
        req.body.Origen,
        req.body.Familia,
        req.body.Paises));
    res.end();
}
);

router.put('/edit/:id',(req,res) => {
    let lenguaje = mongo.update(parseInt(req.params.id), req.body.Nombre, 
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
    let lenguaje = mongo.deleteOne(req.params.id);
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