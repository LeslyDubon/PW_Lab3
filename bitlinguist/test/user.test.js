let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000';
var app = require('../app');
chai.use(chaiHttp);

describe(' Login :', () => {
    it('should be a successful login', (done) => {
        chai.request(app)
            .post('/api/v1/user/login')
            .send({
                Email: "lkdubon@correo.url.edu.gt",
                Password: "3r1z0s311"
            })
            .end((err, res) => {
                expect(res.statusCode).to.equals(200);
                done();
            });
    });
    it('should return not found', (done) => {
        chai.request(url)
            .post('/api/v1/user/login')
            .send({
                Email: "lkdubon@url.edu.gt",
                Password: "3r1z0s311"
            })
            .end((err, res) => {
                expect(res.statusCode).to.equals(404);
                done();
            });
    });
    it('should return unauthorized access', (done) => {
        chai.request(url)
            .post('/api/v1/user/login')
            .send({
                Email: "lkdubon@correo.url.edu.gt",
                Password: "3r1z0s31"
            })
            .end((err, res) => {
                expect(res.statusCode).to.equals(401);
                done();
            });
    });
});

describe(' Create user :', () => {
    it('should create user', (done) => {
        chai.request(app)
            .post('/api/v1/user/create')
            .send({
                Nombre: "Lesly Dubón",
                Email: "lkdcc.8@gmail.com",
                Password: "PW2021"
            })
            .end((err, res) => {
                expect(res.statusCode).to.equals(201);
                done();
            });
    });
    it('should return error', (done) => {
        chai.request(url)
            .post('/api/v1/user/create')
            .send({
                Nombre: "Lesly Dubón",
                Email: "lkdubon@correo.url.edu.gt",
                Password: "PW2021"
            })
            .end((err, res) => {
                expect(res.statusCode).to.equals(400);
                done();
            });
    });
});

describe(' Change password :', () => {
    it('should change password', (done) => {
        chai.request(app)
            .put('/api/v1/user/editPassword')
            .send({
                Email: "lkdubon@correo.url.edu.gt",
                Password: "PW2021"
            })
            .end((err, res) => {
                expect(res.statusCode).to.equals(204);
                done();
            });
    });
    it('should return error', (done) => {
        chai.request(url)
            .put('/api/v1/user/editPassword')
            .send({
                Email: "lkdubon@url.edu.gt",
                Password: "PW2021"
            })
            .end((err, res) => {
                expect(res.statusCode).to.equals(404);
                done();
            });
    });
});
