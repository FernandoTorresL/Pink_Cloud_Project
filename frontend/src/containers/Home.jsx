import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import CategoriesList from '../components/CategoriesList';
import CategoryItem from '../components/CategoryItem';
import Employees from '../components/Employees';
import EmployeesList from '../components/EmployeesList';
import EmployeeItem from '../components/EmployeeItem';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/Home.scss';

const API = 'http://localhost:3000/initialState/';

const Home = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='Home'>
      <Header />
      <div className='hero_container'>
        <Categories>
          <CategoriesList>
            {initialState.projects.map((item) => <CategoryItem key={item.id} {...item} />)}
          </CategoriesList>
        </Categories>

        <Employees>
          <EmployeesList>
            {initialState.employees.map((item) => <EmployeeItem key={item.id} {...item} />)}
          </EmployeesList>
        </Employees>
      </div>
    </div>
  );
};

export default Home;
