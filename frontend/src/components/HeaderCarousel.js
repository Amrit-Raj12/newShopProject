import React from 'react';
import { Container, Row, Col, Button,Carousel } from "react-bootstrap";
import './HCStyle.css';

const HeaderCarousel = () => {

  const carouselHeadingStyle = {
    color: "black",
    backgroundColor: "#E8C766",
    padding: "10px",
    fontFamily: "Poppins",
    marginTop:"30px",
    marginLeft:"50px",
    height:"300px",
  };

  const firstColStyle={
    position:"relative",
    marginLeft:"100px",
    left:"50px",
    width:"150px",
    zIndex:"2",
    
  }



    return (
        <div>
        <Container className="mt-2">
            <Row>
                <Col style={firstColStyle} className="fstcol">
                    <div className="carousel_heading" style={carouselHeadingStyle}>
                        <h3 style={{ fontSize:"35px",textTransform: "capitalize"}}>Back to School <br /> Bedding Combos</h3>
                        
                        <p>Winning mixes of bedding, pillow shams and trow pillows</p>
                        <Button >Shop Now</Button>
                    </div>
                </Col>
                <Col>
                    <div className="carousel_box">
                    <Carousel>
<Carousel.Item interval={1000}>
<img
  className="d-block w-100"
  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  alt="First slide"
/>
<Carousel.Caption>
  <h3><sup style={{fontSize:"34px"}}>1</sup> 0f <sub>1</sub></h3>
  <p></p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={500}>
<img
  className="d-block w-100"
  src="https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  alt="Second slide"
/>
<Carousel.Caption>
  <h3><sup style={{fontSize:"34px"}}>2</sup> 0f <sub>2</sub></h3>
  <p></p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block w-100"
  src="https://images.unsplash.com/photo-1560184897-502a475f7a0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
  alt="Third slide"
/>
<Carousel.Caption>
  <h3><sup style={{fontSize:"34px"}}>3</sup> of <sub>3</sub></h3>
  <p></p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default HeaderCarousel
