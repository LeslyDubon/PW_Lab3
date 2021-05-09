const mongodb = require('mongodb').MongoClient;
const assert = require('assert');

var client;
var db;

function inicio() {
    //connection
    const url = 'mongodb://localhost:27017';
    client = new mongodb(url);
    client.connect(function (err) {
        db = client.db("bitlinguist");
        //     db.dropDatabase(function (err, result) {
        //         console.log("Error : " + err);
        //         if (err) throw err;
        //         console.log("Operation Success ? " + result);
        //         db.createCollection("counters", function (err, result) {
        //             if (err) console.log(err);
        //             console.log("Collection created");
        //         })
        //         const collection = db.collection('counters');
        //         collection.insertOne({
        //             _id: "lenguajeId",
        //             sequence_value: 19
        //         }).then(
        //             collection.insertOne({
        //                 _id: "userId",
        //                 sequence_value: 1
        //             })).then(
        //                 db.createCollection("lenguajes", function (err, result) {
        //                     if (err) console.log(err);
        //                     console.log("Collection created");
        //                     insertDocuments(db, function () {
        //                     });
        //                 })).then(
        //                     db.createCollection("users", function (err, result) {
        //                         if (err) console.log(err);
        //                         console.log("Collection created");
        //                         insertUsers(db, function () {
        //                         });
        //                     }))
        //     })

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