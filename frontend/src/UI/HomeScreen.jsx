import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Components/Products/Product";
import axios from 'axios';

const HomeScreen = () => {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    
    const fetchProducts = async() => {
      const { data } = await axios.get('/api/products');
      console.log(data);
      setProducts(data);
    }
    fetchProducts();

  },[])

  const uiProducts = products.map((product,idx) => {
    return (
      <Col key={idx} sm={12} md={6} xl={3} lg={4}>
        <Product key={idx} product={product} />
      </Col>
    );
  });
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>{uiProducts}</Row>
    </div>
  );
};
export default HomeScreen;
