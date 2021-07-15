import React from 'react';
import Category from './Category';

export default function CategoryContainer({categories}) {
    return (
        <div>
            {categories.map(category => <Category key={category.id} {...category} />)}
        </div>
    )
}
