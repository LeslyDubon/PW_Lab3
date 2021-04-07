let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000';
chai.use(chaiHttp);


describe(' Get languages :', ()=>{
    it('should get all the languages', (done) => {
        chai.request(url)
        .get('/api/v1/lenguaje/get')
        .end( (err, res) =>{
            expect(res.statusCode).to.equals(200);
            done(); 
        });
    });
});

describe(' Get one language :', ()=>{
    it('should get one language', (done) => {
        chai.request(url)
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
        chai.request(url)
        .get('/api/v1/lenguaje/get/9999')
        .end( (err, res) =>{
            expect(res.statusCode).to.equals(404);
            done(); 
        });
    });
});