import React from 'react';
import ReactDOM from 'react-dom/client';
import { Model, createServer} from 'miragejs'

import  App  from './App';

createServer({              // criação da api com mirage
  models: {                 // configuração do bd do mirage
    transaction: Model,
  },

  seeds(server) {             // cadastro de algumas transaçoes para nao iniciar vazio
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2023-06-21 12:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1500,
          createdAt: new Date('2023-06-22 13:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
        
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)    //como os dados vem no formato de texto é preciso fazer o parse

      return schema.create('transaction', data);
    })
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
