import React, {useState, useEffect} from 'react';

function UsersList() {
  const [users, setUsers] = useState([])

  const [orders, setOrders] = useState([])

  useEffect(() => {
      fetch("http://localhost:9393/users")
      .then(r => r.json())
      .then(data => {
          console.log("fetch data",data);
          setUsers(data);
      })
  }, [])

  function handleChange(event) {
    // console.log(event.target)
    const select = event.target;
    const id = select.children[select.selectedIndex].id;

    fetch(`http://localhost:9393/user/${id}/products/`)
    .then(r => r.json())
    .then(data => {
        // console.log("Orders",data);
        setOrders(data);
    })

  }



  return(
    <div>
        <h2>Users List</h2>

          <select onChange={handleChange}>
            {users.map(u => <option key={u.id} id ={u.id} >{u.full_name}</option>)}
          </select>

          <h2>List of products Total: {orders.length}</h2>

          {orders.length> 0? console.log("It has items", orders[0].id, orders[0].product.name): console.log("It has nothing")}

          { orders.length > 0? orders.map(product => <li key={product.id}>{product.product.name}</li>) : <span>No orders yet</span>}




    </div>
  )

}
export default UsersList;
