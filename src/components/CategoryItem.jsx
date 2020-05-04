import React from 'react';

const CategoryItem = ({ name, icon }) => (
  <li>
    <div className='category__list__item'>
      <p>
        {name}
        <img className='category__header--img' src={icon} alt='Proyect icon' />
      </p>
    </div>
  </li>
);

export default CategoryItem;
