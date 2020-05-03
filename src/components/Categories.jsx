import React from 'react';
import '../assets/styles/components/Categories.scss';
import checkboxCategoryImg from '../assets/static/checkbox-category.svg';

const Categories = ({ children }) => (
  <div className='categories'>
    <h4 className='categories__title'>Lista de empleados</h4>

    <div className='category'>

      <div className='category__title'>
        <img className='category__title__img' src={checkboxCategoryImg} alt='Imagen lista de empleados' />
        <p>Todos los empleados</p>
      </div>

      <div className='category category__list'>
        <span>PROYECTO</span>
        {children}
      </div>

    </div>
  </div>
);

export default Categories;
