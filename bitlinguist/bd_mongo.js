const mongodb = require('mongodb').MongoClient;
const assert = require('assert');



function inicio(){
    //connection
const url = 'mongodb://localhost:27017';
const client = new mongodb(url);
client.connect(function (err){
    
    const db = client.db("lenguajes");
    if(err) console.log(err);
    db.dropDatabase(function(err, result){
        console.log("Error : "+err);
        if (err) throw err;
        console.log("Operation Success ? "+result);
        db.createCollection("formas_comunicacion", function(err, result){
            if(err) console.log(err);
            console.log("Collection created");
            client.close();
          })
    });
    
  })
}

  exports.inicio = inicio;