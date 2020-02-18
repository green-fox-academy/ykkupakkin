'use strict';

const request = require('supertest')
const app = require('../routes')
const { expect } = require('chai');

describe('GET /groot', () => {
  it('should return I am Groot!', (done) => {
    request(app)
      .get('/groot')
      .query('')
      .expect(404)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.text).to.equal(`{"error":"I am Groot!"}`);
        //expect(res.json).to.equal({error:"I am Groot!"});

        done();
      });
  });
});
