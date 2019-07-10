const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../app');

chai.use(chaiHttp);

describe('Node Server', () => {
    it('/Get Home page control', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});

let token;
describe('User API Test', () => {
    before((done) => {
        chai.request(server)
            .post('/authenticate')
            .send({username: 'zafer', password: '123456'})
            .end((err,res) => {
                token = res.body.token;
                done();
            });
    })
    describe('/GET Users', () => {
        it('Get all users', (done) => {
            chai.request(server)
                .get('/users')
                .send({token: token})
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        })
    })
});

