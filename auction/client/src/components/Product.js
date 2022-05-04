import React, { useState, useEffect }  from 'react'
import {Card, ListGroup, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Countdown from "react-countdown";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";
import products from '../products';


function Product({product}) {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [data, setData] = useState('0xaFaCBA8e6Bc7630EeEEdBa1080c8c1698F701B57');

  useEffect(() => {
    if(product.last_bidder=='0x00'){return}
  setInterval(() => {
    setIsDisplayed(false);
    setData('0xf565AbA58a6916830876ccDBb29560288babc79b')
  }, 30000);
    }, []);
    
    var Web3 = require('web3');
    var web3= new Web3(Web3.givenProvider || 'HTTP://127.0.0.1:7545')
    var account = window.ethereum.request({ method: 'eth_requestAccounts' })
    const triggerPayment= () =>{
     window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [
              {
                from: '0xf565AbA58a6916830876ccDBb29560288babc79b',
                to: '0xaFaCBA8e6Bc7630EeEEdBa1080c8c1698F701B57',
                value: web3.utils.numberToHex(product.price * Math.pow(10,18)),
                gasPrice: '0x09184e72a000',
                gas: '50000',
              },
            ],
          })
          .then((txHash) => console.log(txHash))
          .catch((error) => console.error);
        product.last_bidder =product.owner
        product.last_bidder ='0x00'
    }
    
    
      

    
  return (
    <Card className="my-3 p-3 rounded">
        <ListGroup.Item>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image}></Card.Img>
        </a>

        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="h3">
                {product.price} <i class="fa-brands fa-ethereum"></i>
            </Card.Text>
        </Card.Body>
        </ListGroup.Item>
        <Card.Text>
        <Countdown date={Date.now() + product.time} />
        </Card.Text>
        <ListGroup.Item>
        <Card.Text>
                Last bidder: {product.last_bidder}
        </Card.Text>
        <Card.Text>
                Owner: {data} 
        </Card.Text>
        <Card.Text>
        <Button disabled={isDisplayed} onClick={triggerPayment}>Payment</Button>
        </Card.Text>
        </ListGroup.Item>
    </Card>
  )
}

export default Product  