import React from "react";
import { Container, Button, Box, Grid, TextField } from '@material-ui/core';

function ItemPage(props){


  const click = (event) => {

    console.log ('Adding to Cart')
    // post request to backend

    let orderObj = {
      user_id: 16,
      product_id: props.currentItem.id
    }
      fetch(`http://localhost:9393/neworder`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(orderObj)
      })
          .then(res => res.json())
          .then(console.log)
    //history.push('/orders')
  }

    return (
        <div className="card">

          <Container>
          <Box>
          <h1> Item</h1>
            <ul>
              <p>{props.currentItem.id}</p>
              <p>{props.currentItem.name}</p>
              <p>{props.currentItem.price}</p>
            </ul>
          <Button onClick={click} variant="contained" color="primary" type="submit">Add to Cart</Button>

          </Box>
          </Container>



        </div>
      )
}









export default ItemPage
