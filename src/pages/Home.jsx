import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

export default function Home() {
  const data=useFetch("https://dummyjson.com/products");
  console.log(data);
  const dispatch = useDispatch();
  return (
    <>
    <Row  style={{marginTop:"150px"}}>
     {
        data?.length>0?
      data?.map((item)=>(
    <Col>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>{item?.title}</Card.Title>
        <Card.Text>
          <p>{item.description.slice(0,50)}...</p>
          <p>Price: {item.price}</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
        <Button variant="outline-danger" onClick={()=>dispatch(addToWishlist(item))}><i class="fa-solid fa-heart"></i></Button>
        <Button variant="outline-success" onClick={()=>dispatch(addToCart(item))}><i class="fa-solid fa-cart-plus"></i></Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
      )) 
    :<h3>No item to Display</h3>}
    </Row>
    </>
  )
}
