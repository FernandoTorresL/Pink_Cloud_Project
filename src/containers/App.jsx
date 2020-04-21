import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import CategoriesList from '../components/CategoriesList';
import CategoryItem from '../components/CategoryItem';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState/';

const App = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <Categories>
        <CategoriesList>
          {initialState.projects.map((item) => <CategoryItem key={item.id} {...item} />)}
        </CategoriesList>
      </Categories>
    </div>
  );
};

export default App;
