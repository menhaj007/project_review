import React, {useState} from 'react';
import Item from './Item'
import Search from './Search'

// for loop displaying filtered (?) items list

function ItemContainer({products}){
   const [searchText, setSearch] = useState("")
     
    return (
    
    <div>
   

  <h5>Item Container</h5>
  <Search setSearch={setSearch}/>
  
        {
        products.map(product => <Item key={product.id} {...product}/>)
        }
     </div>

     )

}

export default ItemContainer

// where does the search bar go?