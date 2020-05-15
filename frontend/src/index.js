import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'user': {},
  'projects': [
    {
      'id': 1,
      'name': 'Deportes',
      'icon': 'https://i.imgur.com/537mxyz.png'
    },
    {
      'id': 2,
      'name': 'Automóviles',
      'icon': 'https://i.imgur.com/da7QfQl.png'
    },
    {
      'id': 3,
      'name': 'Construcción',
      'icon': 'https://i.imgur.com/GhXN6ne.png'
    },
    {
      'id': 4,
      'name': 'Programación',
      'icon': 'https://i.imgur.com/MGBY6xc.png'
    },
    {
      'id': 5,
      'name': 'Biología',
      'icon': 'https://i.imgur.com/cdFN664.png'
    },
    {
      'id': 6,
      'name': 'Animales',
      'icon': 'https://i.imgur.com/K5BSzJM.png'
    }
  ],
  'employees': [
    {
      'id': 1,
      'first_name': 'Fernando',
      'last_name': 'Torres',
      'salary': '1.999',
      'job': 'Data Scientist',
      'job_type': 'full time',
      'status': 'Activo',
      'avatar': 'https://i.imgur.com/da7QfQl.png'
    },
    {
      'id': 2,
      'first_name': 'Araceli',
      'last_name': 'Mote',
      'salary': '2.000',
      'job': 'Web Developer',
      'job_type': 'full time',
      'status': 'Activo',
      'avatar': 'https://i.imgur.com/da7QfQl.png'
    },
    {
      'id': 3,
      'first_name': 'Ale',
      'last_name': 'Torres Mote',
      'salary': '5.000',
      'job_type': 'full time',
      'job': 'Full Stack',
      'status': 'Activo',
      'avatar': 'https://i.imgur.com/da7QfQl.png'
    }
  ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
