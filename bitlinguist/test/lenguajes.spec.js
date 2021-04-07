let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000';
chai.use(chaiHttp);


describe(' Get lenguajes :', ()=>{
    it('should get all the languages', (done) => {
        chai.request(url)
        .get('/api/v1/lenguaje/get')
        .end( (err, res) =>{
            expect(res.statusCode).to.equals(200);
            done(); 
        });
    });
});