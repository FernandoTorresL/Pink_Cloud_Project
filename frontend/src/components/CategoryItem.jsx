import React from 'react';

const CategoryItem = ({ name, icon }) => (
  <li>
    <div className='category__list__item'>
      <p>
        {name}
        <img className='category__header--img' src={icon} alt='icon' />
      </p>
    </div>
  </li>
);

export default CategoryItem;
