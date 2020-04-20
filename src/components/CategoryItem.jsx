import React from 'react';
import categoryImg from '../assets/static/deportes-category.svg';

const CategoryItem = () => (
  <div className='category__list__item'>
    <p>Biología</p>
    <img className='category__header--img' src={categoryImg} alt='Category' />
  </div>
);

export default CategoryItem;
