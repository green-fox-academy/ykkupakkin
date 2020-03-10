const request = require('supertest');
const { expect } = require('chai');
const app = require('../../src/app');

describe('Foods Endpoint', () => {
  it('GET /api/foods should return the list of foods', () => {
    request(app)
      .get('/api/foods')
      .expect(200)
      .end((err, res) => {
        // if(err) throw err;
        expect(err).to.be.null;

        expect(res.body.length).to.equal(1);
        expect(res.body[0].name).to.equal('Chicken breast');
      });
  })

  // with async/await
  it('GET /api/foods should return the list of foods', async () => {
    let res = await request(app)
      .get('/api/foods')
      .expect(200);

    expect(res.body.length).to.equal(1);
    expect(res.body[0].name).to.equal('Chicken breast');
  })

  it('POST /api/foods should add a new food', () => {
    request(app)
      .post('/api/foods')
      .send({ name: 'test food', amount: 123 })
      .expect(200)
      .end((err, res) => {
        // if(err) throw err;
        expect(err).to.be.null;

        // HTTP request finished

        request(app)
          .get('/api/foods')
          .expect(200)
          .end((err, res) => {
            // if(err) throw err;
            expect(err).to.be.null;

            expect(res.body.length).to.equal(2);
            expect(res.body[1].name).to.equal('test food');
          });
      });

    // the previous request is not finished
  })

  // with async await
  // it('POST /api/foods should add a new food', async () => {
  //   let res1 = await request(app)
  //     .post('/api/foods')
  //     .send({ name: 'test food', amount: 123 })
  //     .expect(200);

  //   expect(res1).not.to.be.null;

  //   let res = await request(app)
  //     .get('/api/foods')
  //     .expect(200);

  //   expect(res.body.length).to.equal(2);
  //   expect(res.body[1].name).to.equal('test food');
  // })
})


    // fetch('/api/users')
    //   .then(res => res.json())
    //   .catch(err => console.error(err))
    //   .then(body => console.log(body));

    // try {
    //   let res = await fetch('/api/users');
    //   let body = await res.json();
    //   console.log(body);
    // }
    // catch (err) {
    //   console.error(err);
    // }
