const request = require('supertest');
const app = require('../index');

describe('Todo API', () => {
  it('should create and list todos', async () => {
    const res = await request(app).post('/todos').send({ text: 'Test todo' });
    expect(res.status).toBe(201);
    const list = await request(app).get('/todos');
    expect(list.body.length).toBe(1);
  });
});