let chai = require('chai');
const redis = require('redis');
let chaiHttp = require('chai-http');
const mongodb = require('mongodb').MongoClient;
const expect = require('chai').expect;
const url = 'http://localhost:3000';
var app = require('../app');
chai.use(chaiHttp);
var cliente;
var db;
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient({
    host:'redis',
    port: REDIS_PORT});


async function inicio() {
    client.flushdb(function (err, succeeded) {
        console.log(succeeded);
    });

    const urlMongo = 'mongodb://mongo:27017';
    cliente = new mongodb(urlMongo);
    return await cliente.connect(async function (err) {
        db = cliente.db("bitlinguist");
        db.dropDatabase(async function (err, result) {
            console.log("Operation Success ? " + result);
            db.createCollection("counters", async function (err, result) {
                if (err) console.log(err);
                console.log("Collection created");
            })
            const collection = db.collection('counters');
            collection.insertOne({
                _id: "lenguajeId",
                sequence_value: 19
            }).then(async function () {
                collection.insertOne({
                    _id: "userId",
                    sequence_value: 1
                })
            }).then(async function () {
                db.createCollection("lenguajes", async function (err, result) {
                    if (err) console.log(err);
                    console.log("Collection created");
                    insertDocuments(db).then(async function () {
                        console.log("conf");
                        db.createCollection("users", async function (err, result) {
                            if (err) console.log(err);
                            console.log("Collection created");
                            insertUsers(db, function () {

                            });
                        })
                    })

                })
            });
        });
    })
};

async function insertDocuments(db, callback) {

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
    ], async function (err, result) {
        console.log(err, result);
        assert(19, result.result.n);
        assert(19, result.ops.length);
        console.log('Inserted 19 documents into the collection');
        return await result;
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
function delay(interval) {
    return it('should delay', done => {
        setTimeout(() => done(), interval)

    }).timeout(interval + 100)
}


inicio().then(function () {
    delay(10000);
    describe(' Get languages :', () => {
        it('should get all the languages from db', (done) => {
            chai.request(app)
                .get('/api/v1/lenguaje/get')
                .end((err, res) => {
                    expect(res.statusCode).to.equals(200);
                    done();
                });
        })
        it('should get all the languages from cache', (done) => {
            chai.request(app)
                .get('/api/v1/lenguaje/get')
                .end((err, res) => {
                    expect(res.statusCode).to.equals(200);
                    done();
                });
        });
    });

    describe(' Get one language :', () => {

        it('should get one language from db', (done) => {
            chai.request(app)
                .get('/api/v1/lenguaje/get/3')
                .end((err, res) => {
                    expect(res.statusCode).to.equals(200);
                    expect(res.body[0].id).to.equals(3);
                    expect(res.body[0].Nombre).to.equals("English");
                    expect(res.body[0].Hablantes).to.equals(379000000);
                    expect(res.body[0].Origen).to.equals("Old English");
                    expect(res.body[0].Familia).to.eql([
                        "Indo-European",
                        "Germanic"
                    ]);
                    expect(res.body[0].Paises).to.eql([
                        "United States",
                        "Australia",
                        "New Zealand",
                        "United Kingdom"
                    ]);

                    done();
                });
        })
        it('should get one language from cache', (done) => {

            chai.request(app)
                .get('/api/v1/lenguaje/get/3')
                .end((err, res) => {
                    expect(res.statusCode).to.equals(200);
                    expect(res.body[0].id).to.equals(3);
                    expect(res.body[0].Nombre).to.equals("English");
                    expect(res.body[0].Hablantes).to.equals(379000000);
                    expect(res.body[0].Origen).to.equals("Old English");
                    expect(res.body[0].Familia).to.eql([
                        "Indo-European",
                        "Germanic"
                    ]);
                    expect(res.body[0].Paises).to.eql([
                        "United States",
                        "Australia",
                        "New Zealand",
                        "United Kingdom"
                    ]);
                    done();
                });

        });
        it('should return error', (done) => {
            chai.request(app)
                .get('/api/v1/lenguaje/get/9999')
                .end((err, res) => {
                    expect(res.statusCode).to.equals(404);
                    done();
                });
        });



    });

    describe(' Create language :', () => {
        it('should create a language', (done) => {
            chai.request(app)
                .post('/api/v1/lenguaje/create')
                .send({
                    id: 20,
                    Nombre: "Urdu (persianised Hindustani)",
                    Hablantes: 68600000,
                    Origen: "Hindustani",
                    Familia: ["Indo-European", "Indo-Aryan"],
                    Paises: ["Fiji", "India", "Pakistan", "Bangladesh"],
                    Imagen: "https://www.pngkey.com/png/detail/443-4435318_indian-flag-png-flag-of-india.png"
                })
                .end((err, res) => {
                    expect(res.statusCode).to.equals(201);
                    done();
                });
        });
    });

    describe(' Edit a language :', () => {
        it('should edit a language', (done) => {
            chai.request(app)
                .put('/api/v1/lenguaje/edit/2')
                .send({
                    Nombre: "Italiano",
                    Hablantes: 68000000,
                    Origen: "Latín Vulgar",
                    Familia: ["Italic", "Romance Western", "Romance"],
                    Paises: ["Angola", "Brazil", "Mozambique"],
                    Imagen: "https://cdn.countryflags.com/thumbs/italy/flag-button-round-250.png"
                })
                .end((err, res) => {
                    expect(res.statusCode).to.equals(204);
                    done();
                });
        });
        it('should return error', (done) => {
            chai.request(url)
                .put('/api/v1/lenguaje/edit/9999')
                .end((err, res) => {
                    expect(res.statusCode).to.equals(404);
                    done();
                });
        });
    });

    describe(' Delete a language :', () => {
        it('should delete a language', (done) => {
            chai.request(app)
                .delete('/api/v1/lenguaje/delete/6')
                .end((err, res) => {
                    expect(res.statusCode).to.equals(204);

                    done();
                });
        });
        it('should return error', (done) => {
            chai.request(app)
                .delete('/api/v1/lenguaje/delete/9999')
                .end((err, res) => {
                    expect(res.statusCode).to.equals(404);
                    done();
                });
        });
    })
});