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
            insertDocuments(db, function() {
                getAllDocuments(db, function() {
                    client.close();
                });
              });
          })
    });
    
  })
}
const insertDocuments = function(db, callback) {

    const collection = db.collection('formas_comunicacion');
    // Insert some documents
    collection.insertMany([{id: 1,  Nombre: 'Mandarin Chinese', Hablantes: 918000000, Origen: 'Old Chinese', Familia:['Sino-Tibetan', 'Sinitic'],  Paises:['Hong Kong', 'Macau', 'China', 'Singapore']}, 
    {id: 2,  Nombre: 'Spanish', Hablantes: 480000000, Origen: 'Old Latin', Familia:['Indo-European', 'Romance'],  Paises:['Mexico', 'United States', 'Colombia', 'Spain']}, 
    {id: 3,  Nombre: 'English', Hablantes: 379000000, Origen: 'Old English', Familia:['Indo-European', 'Germanic'],  Paises:['United States', 'Australia', 'New Zealand', 'United Kingdom']}, 
    {id: 4,  Nombre: 'Hindi (sanskritised Hindustani)', Hablantes: 341000000, Origen: 'Shauraseni Prakrit', Familia:['Indo-European', 'Indo-Aryan'],  Paises:['India', 'Nepal', 'United States', 'Mauritius']}, 
    {id: 5,  Nombre: 'Bengali', Hablantes: 228000000, Origen: 'Prakrit', Familia:['Indo-European', 'Indo-Aryan'],  Paises:['Pakistan', 'Saudi Arabia', 'United Kingdom', 'United States']}, 
    {id: 6,  Nombre: 'Portuguese', Hablantes: 221000000, Origen: 'Old Latin', Familia:['Indo-European', 'Romance'],  Paises:['Brazil', 'Portugal', 'Angola', 'Cape Verde']}, 
    {id: 7,  Nombre: 'Russian', Hablantes: 154000000, Origen: 'Old East Slavic', Familia:['Indo-European', 'Balto-Slavic'],  Paises:['Russia', 'Belarus', 'Kazakhstan', 'Tajikistan']}, 
    {id: 8,  Nombre: 'Japanese', Hablantes: 128000000, Origen: 'Old Japanese', Familia:['Japonic', 'Japanese'],  Paises:['Japan', 'Philippines', 'France', 'Brazil']}, 
    {id: 9,  Nombre: 'Western Punjabi', Hablantes: 92700000, Origen: 'Western Punjabi', Familia:['Indo-European', 'Indo-Aryan'],  Paises:['India', 'Pakistan', 'United Kingdom', 'Canada']}, 
    {id: 10,  Nombre: 'Marathi', Hablantes: 83100000, Origen: 'Maharashtri Prakrit', Familia:['Indo-European', 'Indo-Aryan'],  Paises:['India', 'Pakistan', 'Israel', 'Mauritius']}, 
    {id: 11,  Nombre: 'Telugu', Hablantes: 82000000, Origen: 'Old Telugu', Familia:['Dravidian', 'South-Central'],  Paises:['India', 'Mauritius', 'Denmark', 'Germany']}, 
    {id: 12,  Nombre: 'Wu Chinese', Hablantes: 81400000, Origen: 'Old Chinese', Familia:['Sino-Tibetan', 'Sinitic'],  Paises:['China', 'Hong Kong', 'United States', 'Canada']}, 
    {id: 13,  Nombre: 'Turkish', Hablantes: 79400000, Origen: 'Old Anatolian Turkish', Familia:['Turkic', 'Oghuz'],  Paises:['Turkey', 'Cyprus', 'Iraq', 'Kosovo']}, 
    {id: 14,  Nombre: 'Korean', Hablantes: 77300000, Origen: 'Proto-Koreanic', Familia:['Koreanic', 'language isolate'],  Paises:['Australia', 'North Korea', 'South Korea', 'China']}, 
    {id: 15,  Nombre: 'French', Hablantes: 77200000, Origen: 'Old Latin', Familia:['Indo-European', 'Romance'],  Paises:['Belgium', 'France', 'Monaco', 'Switzerland']}, 
    {id: 16,  Nombre: 'German (only Standard German)', Hablantes: 76100000, Origen: 'Old High German', Familia:['Indo-European', 'Germanic'],  Paises:['Austria', 'Germany', 'Liechtenstein', 'Switzerland']}, 
    {id: 17,  Nombre: 'Vietnamese', Hablantes: 76000000, Origen: 'Viet-Muong', Familia:['Austroasiatic', 'Vietic'],  Paises:['Vietnam', 'United States', 'Australia', 'Cambodia']}, 
    {id: 18,  Nombre: 'Tamil', Hablantes: 75000000, Origen: 'Old Tamil', Familia:['Dravidian', 'South'],  Paises:['India', 'Sri Lanka', 'Singapore', 'Australia']}, 
    {id: 19,  Nombre: 'Yue Chinese', Hablantes: 73100000, Origen: 'Old Chinese', Familia:['Sino-Tibetan', 'Sinitic'],  Paises:['Hong Kong', 'Macau', 'Angola', 'Cape Verde']}
    ], function(err, result) {
        console.log(result);
      assert(19, result.result.n);
      assert(19, result.ops.length);
      console.log('Inserted 19 documents into the collection');
      callback(result);
    });
  };

  const getAllDocuments = function(db, callback) {
    const collection = db.collection('formas_comunicacion');
    collection.find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
      });
  };



  exports.inicio = inicio;