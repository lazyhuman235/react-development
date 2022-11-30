
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({onClick, item, isFav}) {
  return (
    <Card style={{ width: '18rem', margin:'1px'}}>
    <Card.Img variant="top" src={require(`../assets/${item.image}`)} style={{ width: '16rem' }} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
      <p>Storage: {item.storage}gb</p>
      <p>Color: {item.color}</p>
      <p>Price: ${item.price}</p>
      </Card.Text>
      {
        !isFav?
      <Button onClick = {onClick} variant="primary">Add to Favorites</Button>
        :
      <Button onClick = {onClick} variant="danger">Remove from Favorites</Button>
        }
    </Card.Body>
  </Card>
  )
}

export default Product