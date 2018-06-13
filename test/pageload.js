// Require the dev-dependencies
const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

/**
 * Test Login
 */
describe('GET /holamundo', () => {
  it('should return hola mundo', done => {
    const creds = {
      email: 'thewing@thehangar.cr',
      password: 'wingtesting!2018'
    };
    chai
      .request(server)
      .post('/api/auth/login')
      .send(creds)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('auth').eql(true);
        res.body.should.have.property('token');
        done();
      });
  });
});
