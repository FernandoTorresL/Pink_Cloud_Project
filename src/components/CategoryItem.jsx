import React from 'react';
import image_category from '../assets/static/deportes-category.svg';

const CategoryItem = () => (
	<div className="category__list__item">
		<p>Biología</p>
		<img className="category__header--img" src={image_category} alt="Category" />
	</div>
);

export default CategoryItem;
