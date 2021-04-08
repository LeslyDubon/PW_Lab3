let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000';
var app = require('../app');
chai.use(chaiHttp);


describe(' Get languages :', ()=>{
    it('should get all the languages', (done) => {
        chai.request(app)
        .get('/api/v1/lenguaje/get')
        .end( (err, res) =>{
            expect(res.statusCode).to.equals(200);
            done(); 
        });
    });
});

describe(' Get one language :', ()=>{
    it('should get one language', (done) => {
        chai.request(app)
        .get('/api/v1/lenguaje/get/3')
        .end( (err, res) =>{
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
        .end( (err, res) =>{
            expect(res.statusCode).to.equals(404);
            done(); 
        });
    });
});

describe(' Create language :', ()=>{
    it('should create a language', (done) => {
        chai.request(app)
        .post('/api/v1/lenguaje/create')
        .send({
            Nombre:"English",
            Hablantes:379000000,
            Origen:"Old English",
            Familia:["Indo-European", "Germanic"],
            Paises:["United States", "Australia","New Zealand"]
        })
        .end( (err, res) =>{
            expect(res.statusCode).to.equals(201);
            done(); 
        });
    });
});

describe(' Edit a language :', ()=>{
    it('should edit a language', (done) => {
        chai.request(app)
        .put('/api/v1/lenguaje/edit/2')
        .send({
            Nombre:"Italiano",
            Hablantes:68000000,
            Origen:"Latín Vulgar",
            Familia:["Italic", "Romance Western","Romance"],
            Paises:["Angola", "Brazil","Mozambique"]
        })
        .end( (err, res) =>{
            expect(res.statusCode).to.equals(204);
            done(); 
        });
    });
    it('should return error', (done) => {
        chai.request(url)
        .put('/api/v1/lenguaje/edit/9999')
        .end( (err, res) =>{
            expect(res.statusCode).to.equals(404);
            done(); 
        });
    });
});

describe(' Delete a language :', ()=>{
    it('should delete a language', (done) => {
        chai.request(app)
        .delete('/api/v1/lenguaje/delete/6')
        .end( (err, res) =>{
            expect(res.statusCode).to.equals(204);
           
            done(); 
        });
    });
    it('should return error', (done) => {
        chai.request(app)
        .delete('/api/v1/lenguaje/delete/9999')
        .end( (err, res) =>{
            expect(res.statusCode).to.equals(404);
            done(); 
        });
    });
});