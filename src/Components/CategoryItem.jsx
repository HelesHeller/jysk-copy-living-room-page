import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryItem.css';

const CategoryItem = ({ name, image, path }) => (
    <div className="category-item">
        <Link to={`/categories/${path}`}>
            <img src={image} alt={name} className="category-image" />
            <h3>{name}</h3>
        </Link>
    </div>
);

export default CategoryItem;
