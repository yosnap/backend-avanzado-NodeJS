const app = require('../app');
const supertest = require('supertest')
const request = supertest(app)

describe('Sample',() => {
    it('Debe ser true',() => {
        expect(true).toBe(true)
    });
});

it('gets the test endpoint', async () => {
    const response = await request.get('/test')
    
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
})