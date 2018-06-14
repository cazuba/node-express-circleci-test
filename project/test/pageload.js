// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

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
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
        done();
      });
  });
});
