import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Card, ListGroup,Button,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Components/Rating';
import axios from 'axios';

const ProductDetail = ({ match }) => {

    const [product,setProduct] = useState({});

    useEffect(() => {
      const fetchProduct = async() => {
        const { data } = await axios.get(`/api/product/${match.params.id}`)
        setProduct(data);
      }
      fetchProduct();
    },[match.params.id]);

    return (
      <Fragment>
        <Link className="btn btn-dark my-3" to="/">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item>price:${product.price}</ListGroup.Item>
              <ListGroup.Item>
                description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>price</Col>
                    <Col>
                      <strong> {product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                     {product.countInStock > 0 ? 'In stock':'Out of stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button disabled={product.countInStock === 0} className='btn-block' type='button'>Add To Cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
};

export default ProductDetail;