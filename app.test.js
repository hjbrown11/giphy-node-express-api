const request = require('supertest');
const app = require('./app');

describe('Giphy API', () => {
  // below should retrieve all gifs - maybe have this coming from trending?
  it('GET /giphy returns an array of gifs', () => {
    return request(app)
      .get('/giphy')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
            }),
          ])
        );
      });
  });

  // I'd like this to work by clicking on the gif and it opens in new window with more info
  // Will implement this later
  it('GET /giphy/:id returns a specific todo by id', () => {});
  it('GET /giphy/:id returns a 404 if not found', () => {});

  // Search for keywords and get related gifs:
  it('POST /giphy searches by params and returns the matching gifs', () => {
    return request(app).post('/giphy').send({
    }).expect('Content-Type', /json/).expect(201)
    .then((response) => {
      expect(response.body).toEqual(
        expect.objectContaining({
        })
      );
    });
  });
  it('POST /giphy validates the request body', () => {});
});
