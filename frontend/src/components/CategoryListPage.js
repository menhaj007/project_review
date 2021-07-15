import React from 'react';
import Header from './Header'

import Search from './Search'
import CategoryContainer from './CategoryContainer'

import {useState, useEffect} from 'react'

// Contains Header + Categories Filter + Search Bar + NavBar + ItemContainer
// will need a way to populate products from database and pass as a prop

function CategoryListPage(props) {
    const [categories, setCategories] = useState([]);

    
    useEffect(() => {
        fetch("http://localhost:9393/categories")
        .then(r => r.json())
        .then(data => {
            console.log("data from useEffect", data);
            setCategories(data);
        })
    }, [])

    return (
        <div>
            
            <h1>Category List Page</h1>

            <CategoryContainer categories={categories}/>
        </div> 
        )
  }
  
  export default CategoryListPage;