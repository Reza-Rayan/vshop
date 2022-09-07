import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'
import { Col, Container, Row, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`);
      setProduct(response.data)
    }
    sendRequest()
  }, [id])


  return (
    <Container >
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} >
          <Image src={product.image} width={500} />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} >
          <Link to='/' className="btn btn-secondary text-center text-light">بازگشت به صفحه اصلی</Link>
          <h2 className='mt-3'>{product.name}</h2>
          <ListGroup>
            <ListGroupItem>{product.description}</ListGroupItem>
            <ListGroupItem> قیمت :{product.price} تومان</ListGroupItem>
          </ListGroup>
          <Button className="mt-3">افزودن به سبد خرید</Button>

        </Col>
      </Row>

    </Container>
  )
}

export default Product