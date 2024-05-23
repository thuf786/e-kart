import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Footer() {
  return (
    <>
    <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5 mt-5 
    bg-primary text-light' style={{height:"300px"}}>
        <div style={{ width: "400px" }}>
            <h4 style={{ fontFamily: "-moz-initial" }}>
            <i class="fa-solid fa-cart-shopping"></i>E-Kart</h4>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusantium voluptates veniam libero explicabo! Aliquid hic fuga quis facere veniam culpa 
                ratione voluptate sequi, aut eveniet cupiditate dicta libero fugiat repudiandae!</h6>
        </div>
        <div>
            <h4 style={{ fontFamily: "Times-New-Roman" }}>Links</h4>
            <Link to={'/'} style={{ textDecoration: 'none', color:'white'}}><h6>Home</h6></Link>
            <Link to={'/wishlist'} style={{ textDecoration: 'none' , color:'white' }}><h6>Wishlist</h6></Link>
            <Link to={'/cart'} style={{ textDecoration: 'none', color:'white' }}><h6>Cart</h6></Link>
        </div>
        <div>
            <h4 style={{ fontFamily: "Times-New-Roman" }}>Guides</h4>
            <h6>React</h6>
            <h6>React Bootstrap</h6>
            <h6>Bootswatch</h6>
        </div>
        <div>
            <h4 style={{ fontFamily: "Times-New-Roman" }}>Contact Us</h4>
            <div className='d-flex'>
                <input type="text" placeholder='Enter Your Email' className='form-control' />
                <Button variant="warning ms-2">Subscribe</Button>{' '}
            </div>
            <div className='d-flex align-items-center justify-content-evenly fs-4 mt-3'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-facebook"></i>
            </div>
        </div>
    </div>
    <div className='text-center'>
        <p>&copy; Copyright 2023.Media player built with react </p>
    </div>
</>
    
  )
}
