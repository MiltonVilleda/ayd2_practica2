let chai = require("chai"); 
let chaiHttp = require("chai-http"); 
const app = require("../index");
const expect = require("chai").expect; 

chai.use(chaiHttp)

//unit test 1 add user
describe('create user', () => {
    it('add user', (done) => {
        const status = 200;
        const j = {
            username: 'a',
            password: 'a'
        }

        chai.request(app)
            .post('/add')
            .send(j)
            .end(function(err, res){
                if(err) throw err; 
                console.log(res.body);
                expect(res).to.have.status(status); 
                expect(res.text).to.equal('registro exitoso');
                done();
            })
    })
})

//unit test 2 add user
describe('user authentication', () => {
    it('login', (done) => {
        const status = 200;
        const j = {
            username: 'a',
            password: 'a'
        }

        chai.request(app)
            .post('/login')
            .send(j)
            .end(function(err, res){
                if(err) throw err; 
                console.log(res.body);
                expect(res).to.have.status(status); 
                expect(res.text).to.equal('ingreso exitoso');
                done();
            })
    })
})

//unit test 3 update user
describe('update user', () => {
    it('update registration', (done) => {
        const status = 200;
        const j = {
            username: 'a',
            password: 'a',
            new_username: 'b'
        }

        chai.request(app)
            .post('/update')
            .send(j)
            .end(function(err, res){
                if(err) throw err; 
                console.log(res.body);
                expect(res).to.have.status(status); 
                expect(res.text).to.equal('actualizacion exitosa');
                done();
            })
    })
})

/*
//unit test 1.2 add user fail
describe('create user fail', () => {
    it('add user', (done) => {
        const status = 200;
        const j = {
            username: 'a'
        }

        chai.request(app)
            .post('/add')
            .send(j)
            .end(function(err, res){
                if(err) throw err; 
                console.log(res.body);
                expect(res).to.have.status(status); 
                expect(res.text).to.equal('registro exitoso');
                done();
            })
    })
})

//unit test 2.2 add user fail
describe('user authentication fail', () => {
    it('login', (done) => {
        const status = 200;
        const j = {
            username: 'a'
        }

        chai.request(app)
            .post('/login')
            .send(j)
            .end(function(err, res){
                if(err) throw err; 
                console.log(res.body);
                expect(res).to.have.status(status); 
                expect(res.text).to.equal('ingreso exitoso');
                done();
            })
    })
})

//unit test 3.2 update user fail
describe('update user fail', () => {
    it('update registration', (done) => {
        const status = 200;
        const j = {
            username: 'a',
            password: 'a'
        }

        chai.request(app)
            .post('/update')
            .send(j)
            .end(function(err, res){
                if(err) throw err; 
                console.log(res.body);
                expect(res).to.have.status(status); 
                expect(res.text).to.equal('actualizacion exitosa');
                done();
            })
    })
})
*/