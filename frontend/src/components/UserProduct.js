import React, {useState, useEffect} from 'react'

export default function UserProduct({id, full_name}) {
    const [getProducts, setProducts] = useState([]);

    const [getOrders, setOrders] = useState([]);
    useEffect(() => {
        // loadProducts();
    },[])
    function test(e) {
        console.log(e.firstChild.data)
        id = parseInt(e.firstChild.data)
        fetch(fetch(`http://localhost:9393/user/${id}/products/`)
        .then(r => r.json())
        .then(data => {
            console.log("fetch data from user-order-product",data);
            setProducts(data);
        }))
        // debugger
        //user/id
        //return orders/products
    }
    return (
        <div>
            <ul>
                <li onClick={e => test(e.target)}>{id} {full_name}</li>
            </ul>
            { getProducts.length > 0? <select> {getProducts.map((product) => <option key={product.id}>{product.product.name}</option>)} </select>:null
            }
        </div>
    )
}
