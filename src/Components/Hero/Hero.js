import React from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from '..//../Assets/heroImg.png'
import { Link } from 'react-router-dom'
import './Hero.css'



function Hero() {
  return (
    <Container className='hero-header'>
      <Row>
        <Col sm={12} lg={6} className='d-flex align-items-center justify-content-center flex-column p-5'>
            <h2>Welcome to to <br /><span>O</span>dor EasyBuy</h2>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, accusamus error? Necessitatibus!</p>
            <Button className='pe-4 ps-4 fs-5 fw-5'>
              <Link to='/store' className=' link text-decoration-none text-white'>Shop Now</Link>
            </Button>
        </Col>
        <Col sm={12} lg={6} className='d-flex align-items-center justify-content-center flex-column'>
          <div className=''>
            <img className='w-100' src={Image} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
      

  )
}

export default Hero
