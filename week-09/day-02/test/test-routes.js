'use strict';

const request = require('supertest');
const app = require('./app');

request(app)
  .get('/groot')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });