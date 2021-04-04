import React, {Fragment, useState} from 'react';
import AddCategory from "./components/AddCategory";
import CategoriesCollection from "./components/CategoriesCollection";

const GifExpertApp = () => {

    const [categories, setCategories ] = useState( ['One punch man']);

    return (
        <Fragment >
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                {
                    categories.map( category =>
                        <CategoriesCollection
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ol>
        </Fragment>
    );
};

export default GifExpertApp;
