import React from 'react';
import categoryImg from '../assets/static/deportes-category.svg';

const categoryPath = '../assets/static/';

const CategoryItem = ({name, icon}) => (
  <li>
    <div className='category__list__item'>
      <p>{name}</p>
      <img className='category__header--img' src={categoryImg} alt={icon} />
    </div>
  </li>
);

export default CategoryItem;
