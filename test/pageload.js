// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

const config = require('../config');

const server = require('../server');

const should = chai.should();
chai.use(chaiHttp);

/**
 * Test Login
 */
describe('GET /holamundo', () => {
  it('should return hola mundo', (done) => {
    chai
      .request(server)
      .get('/holamundo')
      .end((err, res) => {
        console.log(res.body);
        console.log('PROCESS: ', process.env.NODE_ENV);
        console.log('CONFIG: ', config);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
        done();
      });
  });
});
