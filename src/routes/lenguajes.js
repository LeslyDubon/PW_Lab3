const express = require('express');
const router = express.Router();

router.get('/api/v1/lenguaje',(req,res) => {
    console.log('get');
    res.end();
}
);

router.post('/api/v1/lenguaje',(req,res) => {
    console.log('post');
    res.end();
}
);

router.put('/api/v1/lenguaje',(req,res) => {
    console.log('put');
    res.end();
}
);

router.delete('/api/v1/lenguaje',(req,res) => {
    console.log('delete');
    res.end();
}
);

module.exports = router;