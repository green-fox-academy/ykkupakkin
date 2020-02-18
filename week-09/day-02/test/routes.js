'use strict';

const request = require('supertest');
const app = require('../routes');
const { expect } = require('chai');
​
describe('GET /groot', () => {
  it('should return I am Groot!', (done) => {
    request(app)
      .get('/groot')
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body.message).to.equal('I am Groot!');

        done();
      });
  })
})
