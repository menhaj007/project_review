import React, {useState, useEffect} from 'react'

export default function Category({id, name}) {
    const[getCategories, setCategories] = useState([])




    // useEffect(() => {
    //     fetch(`http://localhost:9393/cat/${id}/prods`)
    //     .then(r => r.json())
    //     .then(data => {
    //         console.log("data from useEffect", data);
    //         setCategories(data);
    //     })
    // }, [])


    function test(e) {
        console.log("test",e.firstChild.data)
        // debugger
        id = parseInt(e.firstChild.data)
        fetch(fetch(`http://localhost:9393/cat/${id}/prods`)
        .then(r => r.json())
        .then(data => {
            console.log("fetch data from cats",data);
            setCategories(data);
        }))
        // debugger
        //user/id
        //return orders/products
    }




    return (
      <div>

          <span>
              <li onClick={e => test(e.target)}>{id} {name}</li>
          </span>
          { getCategories.length > 0? <select> {getCategories.map((category) => <option key={category.id}>{category.product.name}</option>)} </select>:null
          }


      </div>
    )
}
