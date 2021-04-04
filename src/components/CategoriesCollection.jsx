import React, {Fragment, useState, useEffect} from 'react';
import {useFetchGifs} from "../hooks/useFetchGifts";
import CategoriesCollectionItem from "./CategoriesCollectionItem";


const CategoriesCollection = ( { category } ) => {

    const { data:images , loading } = useFetchGifs( category );

    return (
        <Fragment>
            <h3> { category }</h3>
            { loading && <p>Cargando...</p>}
            <div className="card-grid">
                {
                    images.map( img =>
                        <CategoriesCollectionItem key={ img.id } {...img} />
                    )
                }
            </div>
        </Fragment>

    );
};

export default CategoriesCollection;
