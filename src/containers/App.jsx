import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import CategoriesList from '../components/CategoriesList';
import CategoryItem from '../components/CategoryItem';
import Employees from '../components/Employees';
import EmployeesList from '../components/EmployeesList';
import EmployeeItem from '../components/EmployeeItem';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState/';

const App = () => {
  const initialState = useInitialState(API);
  const employeeListData = [
    {
      'id': 1,
      'name': 'Fernando',
      'lastName': 'Torres',
      'job': 'Data Scientist',
      'salary': '1.999 USD',
      'typeJob': 'full time',
      'status': 'Activo',
      'avatar': 'https://i.imgur.com/da7QfQl.png',
    },
    {
      'id': 2,
      'name': 'Pepito',
      'lastName': 'Hernández',
      'job': 'Product Manager',
      'salary': '1.000 USD',
      'typeJob': 'half day',
      'status': 'Inactivo',
      'avatar': 'https://i.imgur.com/da7QfQl.png',
    },
    {
      'id': 3,
      'name': 'Angela',
      'lastName': 'Merkel',
      'job': 'Full Stack',
      'salary': '4.500 USD',
      'typeJob': 'eventual',
      'status': 'On holiday',
      'avatar': 'https://i.imgur.com/da7QfQl.png',
    },
  ];

  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <div className='hero_container'>
        <Categories>
          <CategoriesList>
            {initialState.projects.map((item) => <CategoryItem key={item.id} {...item} />)}
          </CategoriesList>
        </Categories>

        <Employees>
          <EmployeesList>
            {employeeListData.map((item) => <EmployeeItem key={item.id} {...item} />)}
          </EmployeesList>
        </Employees>
      </div>
    </div>
  );
};

export default App;
