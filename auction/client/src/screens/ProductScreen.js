import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import products from '../products'
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";


function ProductScreen(props) {




    const {id} = useParams();
    const product= products.find((p) => p._id == Number(id))
    const last_bidder = props.accounts
    var Web3 = require('web3');
    var web3= new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545')
    function handleSubmit(e) {
      e.preventDefault()
      const {price } = e.target.elements
      alert('bidding successfully')
      product.price = price.value
      product.last_bidder = last_bidder
      product.time =30000
      
    }

    
      
  
  return (
    <div>
        <Link to='/' className='btn btn-dark my-3'>Go back</Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid/>
            
            <h3>Price: {product.price} ETH</h3>
            
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
              <h3>{product.name}</h3>
              </ListGroup.Item>
              
              <ListGroup.Item>
              Description: {product.description}
              </ListGroup.Item>
            </ListGroup>

          </Col>
          <Col md={3}>
            <Card>
            <form onSubmit={handleSubmit}>
            <ListGroup.Item>
              <input type="float" id="price"/>
            </ListGroup.Item>
            <ListGroup.Item>
              <input type="submit" value="Bid" />
            </ListGroup.Item>
</form>
            </Card>
          </Col>
        </Row>
    </div>
  )
}


export default ProductScreen