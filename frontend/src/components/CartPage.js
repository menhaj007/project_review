import React from 'react'
import UserProduct from './UserProduct'
import {useState, useEffect} from 'react'



function CartPage() {
    // fetch list of users from backend
    const [users, setUsers] = useState([])
    const [filterUser, setFilterUser] = useState([])
    useEffect(() => {
        fetch("http://localhost:9393/users")
        .then(r => r.json())
        .then(data => {
            // console.log("fetch data",data);
            setUsers(data);
        })
    }, [])

    function test(e) {
        console.log(e.target.value)
        // debugger
    }




    return (
        <div>
        <h1>CART</h1>

         {users.map((user) => <UserProduct key={user.id} {...user}/>)}

        <select onChange={e => test(e)}>
            {users.map((user) => <option key={user.id}>{user.full_name} </option>)
          }






        </select>

            {/* whenever this changes we must send a fetch request to local... /orders/user.id/ */}



            {/* <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select> */}
        </div>
    )
}
export default CartPage;
