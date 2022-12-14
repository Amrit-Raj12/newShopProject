import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, ListGroup, Card, Button, FormControl } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductsDetails } from '../actions/productActions';
import ReactImageMagnify from 'react-image-magnify';



 // import axios from 'axios';
// import products from '../products';

const ProductScreen = ({ history, match }) => {

    const [qty,setQty]=useState(0)

    // const [product, setProduct]=useState({})

    const dispatch = useDispatch()

    const productDetails= useSelector(state=>state.productDetails)
    const { loading, error, product }=productDetails

    useEffect(()=>{
        
        
        dispatch(listProductsDetails(match.params.id))
        
        // const fetchProduct= async() =>{
        //     const { data }= await axios.get(`/api/products/${match.params.id}`)
        //     setProduct(data)
        // }
        // fetchProduct()
    }, [dispatch, match])

    const addToCartHandler = ()=>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
      <>
      
        <Link className="btn btn-light my-3" to="/">
            Go Back
        </Link>
        {loading?<Loader/>:error ? <Message variant='danger'>{error}</Message> : (
            <Row>
            <Col md={6}>
                {/* <Image src={product.image} alt={product.name} fluid /> */}
                <ReactImageMagnify {...{
            smallImage: {
              alt: 'Wristwatch by Ted Baker London',
            //   isFluidWidth: true,
              src: product.image,
              width: 300,
              height: 400
            //   srcSet: this.srcSet,
            //   sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw',
            },
            largeImage: {
              alt: '',
              src: product.image,
              width: 1200,
              height: 1800
            },
            isHintEnabled: true
          }}/>
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                    <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price
                            </Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Status
                            </Col>
                            <Col>
                                {product.countInStock>0? 'In stock' : 'out of stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                <Col>
                                    <FormControl as='select' value={qty} onChange={(e)=>setQty(e.target.value)}>
                                        {
                                        [...Array(product.countInStock).keys()].map(x =>(
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))}
                                    </FormControl>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}

                    <ListGroup.Item>
                        <center>
                        <Button onClick={addToCartHandler} className='btn-block' type="button" disabled={product.countInStock===0}>
                            Add to Cart
                        </Button>
                        </center>
                    </ListGroup.Item>
                </ListGroup>
                </Card>
            </Col>
        </Row>
        )}
      </>
    )
}

export default ProductScreen
