const request = require('supertest');

const server = require('../server.js');

// close the server after each test
afterAll(() => {
 server.close();
 console.log('server closed!');
});

describe('basic route tests', () => {

    let response;

    beforeEach(async () => {
        response = await request(server).get('/');
    });
 
    test('get home route GET /', async () => {
        expect(response.status).toEqual(200);
        
    });

    test("Home page text should be 'Weather API v0.1'", () => {
        expect(response.text).toContain('Weather API v0.1');
    });

});

describe('weather test', () => {
    let response;
    
    beforeEach(async () => {
        response = await request(server).get('/weather/sofia');
    });

    test('get weather for sofia should return 200 ok', async () => {
      expect(response.status).toEqual(200);
    });
});