import React from 'react';

const CategoriesCollectionItem = ( { id, title, url }) => {
    return (
        <div className="card animate__animated animate__jackInTheBox">
            <img src={ url } alt={title} />
            <p>{ title }</p>
        </div>
    );
};

export default CategoriesCollectionItem;
