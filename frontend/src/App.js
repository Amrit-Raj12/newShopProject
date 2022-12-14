import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import ProductsListScreen from './screens/ProductsListScreen';
import AddProducts from './screens/AddProducts';
// import ProfileScreen from './screens/ProfileScreen';

const App=()=> {
  return (
  <Router>
  <Header />
  <main className="py-3">
    <Container>
      <Route path="/shipping" component={ShippingScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      {/* <Route path="/profile" component={ProfileScreen} /> */}
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/products" component={ProductsListScreen} exact />
      <Route path="/add-products" component={AddProducts} exact />
    </Container>
  </main>
  <Footer />
  </Router>
  );
}

export default App;
