const mongodb = require('mongodb').MongoClient;
const assert = require('assert');

var client;
var db;

function inicio() {
    //connection
    nid = 19;
    const url = 'mongodb://localhost:27017';
    client = new mongodb(url);
    client.connect(function (err) {
        db = client.db("bitlinguist");
        if (err) console.log(err);
        db.dropDatabase(function (err, result) {
            console.log("Error : " + err);
            if (err) throw err;
            console.log("Operation Success ? " + result);
            db.createCollection("counters", function (err, result) {
                if (err) console.log(err);
                console.log("Collection created");
            })
            const collection = db.collection('counters');
            collection.insertOne({
                _id: "lenguajeId",
                sequence_value: 19
            }).then(
                collection.insertOne({
                    _id: "userId",
                    sequence_value: 1
                })).then(
                    db.createCollection("lenguajes", function (err, result) {
                        if (err) console.log(err);
                        console.log("Collection created");
                        insertDocuments(db, function () {
                        });
                    })).then(
                        db.createCollection("users", function (err, result) {
                            if (err) console.log(err);
                            console.log("Collection created");
                            insertUsers(db, function () {
                            });
                        }))
        })

    })
}

async function getNextSequenceValue(sequenceName) {
    const collection = db.collection('counters');
    return await collection.findOneAndUpdate(
        { _id: sequenceName },
        {
            $inc: { sequence_value: 1 }

        });
}

const insertDocuments = function (db, callback) {

    const collection = db.collection('lenguajes');
    // Insert some documents
    collection.insertMany([{ id: 1, Nombre: 'Mandarin Chinese', Hablantes: 918000000, Origen: 'Old Chinese', Familia: ['Sino-Tibetan', 'Sinitic'], Paises: ['Hong Kong', 'Macau', 'China', 'Singapore'], Imagen: 'https://static.vecteezy.com/system/resources/previews/001/925/435/original/china-flag-icon-isolate-print-illustration-vector.jpg' },
    { id: 2, Nombre: 'Spanish', Hablantes: 480000000, Origen: 'Old Latin', Familia: ['Indo-European', 'Romance'], Paises: ['Mexico', 'United States', 'Colombia', 'Spain'], Imagen: 'https://www.expatrio.com/themes/expatrio/dist/images/es-flag.png' },
    { id: 3, Nombre: 'English', Hablantes: 379000000, Origen: 'Old English', Familia: ['Indo-European', 'Germanic'], Paises: ['United States', 'Australia', 'New Zealand', 'United Kingdom'], Imagen: 'https://www.pngkey.com/png/detail/10-103641_usa-flag-png-image-jpg-black-and-white.png' },
    { id: 4, Nombre: 'Hindi (sanskritised Hindustani)', Hablantes: 341000000, Origen: 'Shauraseni Prakrit', Familia: ['Indo-European', 'Indo-Aryan'], Paises: ['India', 'Nepal', 'United States', 'Mauritius'], Imagen: 'https://i.pinimg.com/originals/0b/ef/fd/0beffd6341cf43a6e794df3a7326fae9.png' },
    { id: 5, Nombre: 'Bengali', Hablantes: 228000000, Origen: 'Prakrit', Familia: ['Indo-European', 'Indo-Aryan'], Paises: ['Pakistan', 'Saudi Arabia', 'United Kingdom', 'United States'], Imagen: 'https://i.pinimg.com/736x/b3/6b/27/b36b27b3d5d390b43f40bbbdc9091e82.jpg' },
    { id: 6, Nombre: 'Portuguese', Hablantes: 221000000, Origen: 'Old Latin', Familia: ['Indo-European', 'Romance'], Paises: ['Brazil', 'Portugal', 'Angola', 'Cape Verde'], Imagen: 'https://images.emojiterra.com/twitter/v13.0/512px/1f1e7-1f1f7.png' },
    { id: 7, Nombre: 'Russian', Hablantes: 154000000, Origen: 'Old East Slavic', Familia: ['Indo-European', 'Balto-Slavic'], Paises: ['Russia', 'Belarus', 'Kazakhstan', 'Tajikistan'], Imagen: 'https://cdn.countryflags.com/thumbs/russia/flag-round-250.png' },
    { id: 8, Nombre: 'Japanese', Hablantes: 128000000, Origen: 'Old Japanese', Familia: ['Japonic', 'Japanese'], Paises: ['Japan', 'Philippines', 'France', 'Brazil'], Imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Nuvola_Japan_flag.svg/768px-Nuvola_Japan_flag.svg.png' },
    { id: 9, Nombre: 'Western Punjabi', Hablantes: 92700000, Origen: 'Western Punjabi', Familia: ['Indo-European', 'Indo-Aryan'], Paises: ['India', 'Pakistan', 'United Kingdom', 'Canada'], Imagen: 'https://assets.stickpng.com/images/580b585b2edbce24c47b2804.png' },
    { id: 10, Nombre: 'Marathi', Hablantes: 83100000, Origen: 'Maharashtri Prakrit', Familia: ['Indo-European', 'Indo-Aryan'], Paises: ['India', 'Pakistan', 'Israel', 'Mauritius'], Imagen: 'https://illustoon.com/photo/307.png' },
    { id: 11, Nombre: 'Telugu', Hablantes: 82000000, Origen: 'Old Telugu', Familia: ['Dravidian', 'South-Central'], Paises: ['India', 'Mauritius', 'Denmark', 'Germany'], Imagen: 'https://lh3.googleusercontent.com/proxy/w-vO1NhTTmI2qD39AFWg2pHvUes35m4AfvV83VrIpNyuqqrFckgvqZ7uHAtg09gdIJoHlu_MMhx1qJyrk6wVycP7D8lNkoRSB1pJn0s7JdUpRw' },
    { id: 12, Nombre: 'Wu Chinese', Hablantes: 81400000, Origen: 'Old Chinese', Familia: ['Sino-Tibetan', 'Sinitic'], Paises: ['China', 'Hong Kong', 'United States', 'Canada'], Imagen: 'https://www.emoji.co.uk/files/google-emojis/flags-android/8232-flag-of-china.png' },
    { id: 13, Nombre: 'Turkish', Hablantes: 79400000, Origen: 'Old Anatolian Turkish', Familia: ['Turkic', 'Oghuz'], Paises: ['Turkey', 'Cyprus', 'Iraq', 'Kosovo'], Imagen: 'https://atlas-content-cdn.pixelsquid.com/stock-images/turkey-flag-turkish-k1kPxE6-600.jpg' },
    { id: 14, Nombre: 'Korean', Hablantes: 77300000, Origen: 'Proto-Koreanic', Familia: ['Koreanic', 'language isolate'], Paises: ['Australia', 'North Korea', 'South Korea', 'China'], Imagen: 'https://icons.iconarchive.com/icons/pan-tera/flags/256/South-Korea-Flag-icon.png' },
    { id: 15, Nombre: 'French', Hablantes: 77200000, Origen: 'Old Latin', Familia: ['Indo-European', 'Romance'], Paises: ['Belgium', 'France', 'Monaco', 'Switzerland'], Imagen: 'https://cdn1.iconfinder.com/data/icons/european-country-flags/83/france-512.png' },
    { id: 16, Nombre: 'German (only Standard German)', Hablantes: 76100000, Origen: 'Old High German', Familia: ['Indo-European', 'Germanic'], Paises: ['Austria', 'Germany', 'Liechtenstein', 'Switzerland'], Imagen: 'https://cdn.countryflags.com/thumbs/germany/flag-round-250.png' },
    { id: 17, Nombre: 'Vietnamese', Hablantes: 76000000, Origen: 'Viet-Muong', Familia: ['Austroasiatic', 'Vietic'], Paises: ['Vietnam', 'United States', 'Australia', 'Cambodia'], Imagen: 'https://icons.iconarchive.com/icons/wikipedia/flags/512/VN-Vietnam-Flag-icon.png' },
    { id: 18, Nombre: 'Tamil', Hablantes: 75000000, Origen: 'Old Tamil', Familia: ['Dravidian', 'South'], Paises: ['India', 'Sri Lanka', 'Singapore', 'Australia'], Imagen: 'https://www.kindpng.com/picc/m/161-1619845_india-flag-png-india-flag-icon-png-transparent.png' },
    { id: 19, Nombre: 'Yue Chinese', Hablantes: 73100000, Origen: 'Old Chinese', Familia: ['Sino-Tibetan', 'Sinitic'], Paises: ['Hong Kong', 'Macau', 'Angola', 'Cape Verde'], Imagen: 'https://cdn.countryflags.com/thumbs/hongkong/flag-3d-round-250.png' }
    ], function (err, result) {
        console.log(err, result);
        assert(19, result.result.n);
        assert(19, result.ops.length);
        console.log('Inserted 19 documents into the collection');
        callback(result);
    });
};

const insertUsers = function (db, callback) {

    const collection = db.collection('users');
    // Insert some documents
    collection.insertOne({
        id: 1, Nombre: 'Lesly Dubón', Email: 'lkdubon@correo.url.edu.gt', Password: "901f03065142fd288ea194af43a37fe9"
    }, function (err, result) {
        console.log(err, result);
        assert(1, result.result.n);
        assert(1, result.ops.length);
        console.log('Inserted 1 documents into the collection');
        callback(result);
    });
};

async function createUser(nombre, email, password) {
    const collection = db.collection('users');
    return await getNextSequenceValue("userId").then(async function (userId) {
        console.log(userId.value.sequence_value)
        return await collection.insertOne({
            id: (userId.value.sequence_value + 1),
            Nombre: nombre,
            Email: email,
            Password: password
        });
    });
};

async function readUser(email) {

    const collection = await db.collection('users');
    return await collection.find({ Email: email }).toArray();
};

async function updatePassword(email, password) {
    const collection = db.collection('users');
    return await collection.updateOne(
        { Email: email },
        {
            $set:
            {
                Email: email,
                Password: password
            }
        });
};


async function readAll() {
    const collection = db.collection('lenguajes');
    return await collection.find({}).toArray();
};

async function readOne(id_lenguaje) {
    const collection = await db.collection('lenguajes');
    return await collection.find({ id: id_lenguaje }).toArray();
};

async function create(nombre, hablantes, origen, familia, paises, imagen) {
    const collection = db.collection('lenguajes');
    return await getNextSequenceValue("lenguajeId").then(async function (lenguajeId) {
        console.log(lenguajeId.value.sequence_value)
        return await collection.insertOne({
            id: (lenguajeId.value.sequence_value + 1),
            Nombre: nombre,
            Hablantes: hablantes,
            Origen: origen,
            Familia: familia,
            Paises: paises,
            Imagen: imagen
        });
    });

};

async function update(id, nombre, hablantes, origen, familia, paises, imagen) {
    const collection = db.collection('lenguajes');
    return await collection.updateOne(
        { id: id },
        {
            $set:
            {
                id: id,
                Nombre: nombre,
                Hablantes: hablantes,
                Origen: origen,
                Familia: familia,
                Paises: paises,
                Imagen: imagen
            }
        });
};

async function deleteOne(id) {
    const collection = db.collection('lenguajes');
    return await collection.deleteOne(
        { id: id },
    );
};

exports.inicio = inicio;
exports.readOne = readOne;
exports.readAll = readAll;
exports.create = create;
exports.update = update;
exports.deleteOne = deleteOne;
exports.createUser = createUser;
exports.readUser = readUser;
exports.updatePassword = updatePassword;