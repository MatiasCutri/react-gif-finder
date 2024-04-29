import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories( categories.concat( document.querySelector('#inputValue').value ) );
        // setCategories( cat => [ ...cat, document.querySelector('#inputValue').value ] );
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={ onAddCategory }
            // setCategories={ setCategories } 
            />

            {
                categories.map( (category) => (
                    <GifGrid 
                        category={category}
                        key={category} />
                ))
            }

        </>
    );
}