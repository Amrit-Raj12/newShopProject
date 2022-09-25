import React, { useState } from 'react'
import { Form, Button, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress]= useState(shippingAddress.address)
    const [city, setCity]= useState(shippingAddress.city)
    const [postalCode, setPostalCode]= useState(shippingAddress.postalCode)
    const [country, setCountry]= useState(shippingAddress.country)
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [website, setWebsite] = useState('')


    const dispatch = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country, phone, company, website }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='text'>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' required placeholder='Enter address' value={address} onChange={(e)=>setAddress(e.target.value)}></Form.Control>    
            </Form.Group>

            <Form.Group controlId='phone'>
                <Form.Label>Phone</Form.Label>
                <Form.Control type='text' placeholder='Enter Phone number' value={phone} onChange={(e)=>setPhone(e.target.value)}></Form.Control>    
            </Form.Group>

            <Form.Group controlId='company'>
                <Form.Label>company</Form.Label>
                <Form.Control type='text' placeholder='Enter Company name' value={company} onChange={(e)=>setCompany(e.target.value)}></Form.Control>    
            </Form.Group>

            <Form.Group controlId='website'>
                <Form.Label>Comapany Website</Form.Label>
                <Form.Control type='text' placeholder='Enter Comapany website' value={website} onChange={(e)=>setWebsite(e.target.value)}></Form.Control>    
            </Form.Group>

            <Form.Group controlId='text'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' required placeholder='Enter city' value={city} onChange={(e)=>setCity(e.target.value)}></Form.Control>    
            </Form.Group>
            <br />
            <Dropdown>
  <Dropdown.Toggle style={{background:"#F7F7F9", color:"#000000"}} id="dropdown-basic">
    State
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item >Andhra Pradesh</Dropdown.Item>
    <Dropdown.Item >Bihar</Dropdown.Item>
    <Dropdown.Item >Chhattisgarh</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        <br />
            <Form.Group controlId='text'>
                <Form.Label>PostalCode</Form.Label>
                <Form.Control type='text' required placeholder='Enter postalCode' value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}></Form.Control>    
            </Form.Group>

            <Form.Group controlId='text'>
                <Form.Label>Country</Form.Label>
                <Form.Control type='text' required placeholder='Enter country' value={country} onChange={(e)=>setCountry(e.target.value)}></Form.Control>    
            </Form.Group>

            <Button variant="primary" type="submit">
                Continue
            </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
