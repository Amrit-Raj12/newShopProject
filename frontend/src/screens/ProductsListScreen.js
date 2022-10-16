import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
// import Rating from '../components/Rating';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
import { listProductsDetails } from '../actions/productActions';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './ProductsListScreenStyle.css';
import Product from '../components/Product';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films } from './ProductsData';


const ProductsListScreen = ({ history, match, product }) => {

    // const [qty, setQty] = useState(0)



    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    // const { loading, error, products } = productList
    const { products } = productList


    useEffect(() => {


        dispatch(listProductsDetails(match.params.id))

    }, [dispatch, match])

    function valuetext(value) {
        return `${value}$`;
      }

     


    return (
        <>
            <style>
                {`
        .breadcrumb-item active {
            color:red;
        }
        `}
            </style>

            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            <Breadcrumb>
                <Breadcrumb.Item active>
                    <Link to='/' className='active-link text-secondary'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item className='current-link' active>Products</Breadcrumb.Item>
            </Breadcrumb>
            {/* {loading?<Loader/>:error ? <Message variant='danger'>{error}</Message> : ( */}
            <Row>
                <p className='text-dark font-weight-bold'>Product Name</p>
                <div>
                    <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                        {/* <a className="navbar-brand ml-2 font-weight-bold" href="#">FORCEPAUSED</a> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link" href="/products">Bed</a> </li>
                                <li className="nav-item"><a className="nav-link" href="/products">Door</a> </li>
                                <li className="nav-item "><a className="nav-link" href="/products">Window</a> </li>
                                <li className="nav-item "><a className="nav-link" href="/products">Table</a> </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="filter">
                        <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span className="fa fa-filter pl-1"></span></button>
                    </div>
                    <div id="mobile-filter">
                        <div className='mb-2'>
                        <Stack spacing={1} sx={{ width: '95%' }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search furniture"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
                        </div>
                        <div>
                            <h6 className="p-1 border-bottom">Furniture Types</h6>
                            <ul>
                                <li><a href="/products">Living</a></li>
                                <li><a href="/products">Dining</a></li>
                                <li><a href="/products">Office</a></li>
                                <li><a href="/products">Bedroom</a></li>
                                <li><a href="/products">Kitchen</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="p-1 border-bottom">Filter By</h6>
                            <p className="mb-2">Size</p>
                            <ul className="list-group">
                                {/* <li className="list-group-item list-group-item-action mb-2 rounded"><a href="/products">
                                    <span className="fa fa-circle pr-1" id="red"></span>Red
                                </a></li>
                                <li className="list-group-item list-group-item-action mb-2 rounded"><a href="/products">
                                    <span className="fa fa-circle pr-1" id="teal"></span>Teal
                                </a></li>
                                <li className="list-group-item list-group-item-action mb-2 rounded"><a href="/products">
                                    <span className="fa fa-circle pr-1" id="blue"></span>Blue
                                </a></li> */}
                                <select className="list-group-item list-group-item-action mb-2 rounded">
                                <option>Select Size</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </ul>
                        </div>
                        <div>
                            <h6>Price</h6>
                            {/* <form className="ml-md-2">
                                <div className="form-inline border rounded p-sm-2 my-2">
                                    <input type="radio" name="type" id="boring" />
                                    <label for="boring" className="pl-1 pt-sm-0 pt-1">Boring</label>
                                </div>
                                <div className="form-inline border rounded p-sm-2 my-2">
                                    <input type="radio" name="type" id="ugly" />
                                    <label for="ugly" className="pl-1 pt-sm-0 pt-1">Ugly</label>
                                </div>
                                <div className="form-inline border rounded p-md-2 p-sm-1">
                                    <input type="radio" name="type" id="notugly" />
                                    <label for="notugly" className="pl-1 pt-sm-0 pt-1">Not Ugly</label>
                                </div>
                            </form> */}
                                           <Box sx={{ width: 200 }}>
      <Slider
        aria-label="Price"
        defaultValue={1000}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10000}
        marks
        min={0}
        max={100000}
        // color="secondary"
        sx={{color:'black'}}
      />
    </Box>
                        </div>
                    </div>
                    <section id="sidebar">
                        <div className='mb-2'>
                        <Stack spacing={2} sx={{ width: 200 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search furniture"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
                        </div>
                        <div>
                            <h6 className="p-1 border-bottom">Furniture Types</h6>
                            <ul>
                                <li><a href="/products">Living</a></li>
                                <li><a href="/products">Dining</a></li>
                                <li><a href="/products">Office</a></li>
                                <li><a href="/products">Bedroom</a></li>
                                <li><a href="/products">Kitchen</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="p-1 border-bottom">Filter By</h6>
                            <p className="mb-2">Size</p>
                            <ul className="list-group">
                                {/* <li className="list-group-item list-group-item-action mb-2 rounded"><a href="/products">
                                    <span className="fa fa-circle pr-1" id="red"></span>Red
                                </a></li>
                                <li className="list-group-item list-group-item-action mb-2 rounded"><a href="/products">
                                    <span className="fa fa-circle pr-1" id="teal"></span>Teal
                                </a></li>
                                <li className="list-group-item list-group-item-action mb-2 rounded"><a href="/products">
                                    <span className="fa fa-circle pr-1" id="blue"></span>Blue
                                </a></li> */}
                                 <select className="list-group-item list-group-item-action mb-2 rounded">
                                <option>Select Size</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </ul>
                        </div>
                        <div>
                            <h6>Price</h6>
                            {/* <form className="ml-md-2">
                                <div className="form-inline border rounded p-sm-2 my-2">
                                    <input type="radio" name="type" id="boring" />
                                    <label for="boring" className="pl-1 pt-sm-0 pt-1">Boring</label>
                                </div>
                                <div className="form-inline border rounded p-sm-2 my-2">
                                    <input type="radio" name="type" id="ugly" />
                                    <label for="ugly" className="pl-1 pt-sm-0 pt-1">Ugly</label>
                                </div>
                                <div className="form-inline border rounded p-md-2 p-sm-1">
                                    <input type="radio" name="type" id="notugly" />
                                    <label for="notugly" className="pl-1 pt-sm-0 pt-1">Not Ugly</label>
                                </div>
                            </form> */}
                         <Box sx={{ width: 200 }}>
      <Slider
        aria-label="Price"
        defaultValue={1000}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10000}
        marks
        min={0}
        max={100000}
        // color="secondary"
        sx={{color:'black'}}
      />
      {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}
    </Box>
      {/* "react-bootstrap": "^1.6.1", */}
                        </div>
                    </section>
                    <section id="products">
                        <div className="container">
                            <div className="row">
                                {products!==undefined && products.map((product) => (
                                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                        <Product product={product} />
                                    </Col>
                                ))}
                            </div>
                            <div className="row mt-3">

                            </div>
                        </div>
                    </section>
                </div>
            </Row>
            {/* )} */}
        </>
    )
}

export default ProductsListScreen
