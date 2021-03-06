import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import CategoriesList from '../components/CategoriesList';
import CategoryItem from '../components/CategoryItem';
import Employees from '../components/Employees';
import EmployeesList from '../components/EmployeesList';
import EmployeeItem from '../components/EmployeeItem';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/Home.scss';

//const API = 'http://localhost:3000/initialState/';

const Home = ({ projects, employees }) => {
  //const initialState = useInitialState(API);
  // return initialState.length === 0 ? <h1>Loading...</h1> : (
  return (
    <>
      <div className='hero_container'>
        <Categories>
          <CategoriesList>
            {projects.map((item) => <CategoryItem key={item.id} {...item} />)}
          </CategoriesList>
        </Categories>

        <Employees>
          <EmployeesList>
            {employees.map((item) => <EmployeeItem key={item.id} {...item} />)}
          </EmployeesList>
        </Employees>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    employees: state.employees,
  };
};

export default connect(mapStateToProps, null)(Home);
