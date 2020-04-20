import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import CategoriesList from '../components/CategoriesList';
import CategoryItem from '../components/CategoryItem';

import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Categories>
      <CategoriesList>
        <CategoryItem />
      </CategoriesList>
    </Categories>
  </div>
);

export default App;
