const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const connection = require('../../src/db/connection');
const { expect } = chai;
const app = require('../../src/app');

chai.use(chaiHttp);

const endpoint = {
  main: '/tasks',
  id: '/tasks/:id'
};


describe('Testing Tasks API routes', () => {
  afterEach(sinon.restore);

  it('Expect endpoint POST /tasks create a task with ID 50', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 50 }]);

    const response = await chai
      .request(app)
      .post(endpoint.main)
      .send({ nome: 'Ruby', descricao: 'Proxima linguagem a aprender' });

    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal({ success: true, message: 'Task cadastrada com sucesso com o ID 50' });
  });

  it('Expect endpoint POST /task throws an error', async () => {
    sinon.stub(connection, 'execute').rejects({ success: false, message: 'Erro ao cadastrar uma task' });

    const response = await chai
      .request(app)
      .post(endpoint.main)
      .send({ nome: 'Ruby', descricao: 'Proxima linguagem a aprender' });

    expect(response.status).to.equal(500);
    expect(response.body).to.deep.equal({ success: false, message: 'Erro ao cadastrar uma task' });
  });

});