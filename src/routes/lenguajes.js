const express = require('express');
const bd_lenguajes = require('../bd_lenguajes');
const router = express.Router();

function inicio(){
    bd_lenguajes.inicio();
}

router.get('/api/v1/lenguaje',(req,res) => {
    console.log('get');
    console.log(bd_lenguajes.readOne(1));
    console.log(bd_lenguajes.readAll());
    res.end();
}
);

router.post('/api/v1/lenguaje',(req,res) => {
    console.log('post');
    console.log(bd_lenguajes.readAll());
    console.log(bd_lenguajes.create('English', 
    379000000,
    'Old English',
    ["Indo-European", "Germanic"],
    ["United States", "Australia","New Zealand"]));
    res.end();
}
);

router.put('/api/v1/lenguaje',(req,res) => {
    console.log('put');
    console.log(bd_lenguajes.update(3, 'Italiano', 
    68000000,
    'Latín Vulgar',
    ["Italic", "Romance Western","Romance"],
    ["Angola", "Brazil","Mozambique"]));
    res.end();
}
);

router.delete('/api/v1/lenguaje',(req,res) => {
    console.log('delete');
    console.log(bd_lenguajes.deleteOne(3));
    res.end();
}
);

inicio();
module.exports = router;