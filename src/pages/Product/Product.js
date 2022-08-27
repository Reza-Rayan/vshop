import React from 'react'
import Products from '../../Products'
import { Link, useParams } from 'react-router-dom'
import { Col, Container, Row, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const Product = () => {
  const { id } = useParams()
  const thisProduct = Products.find(prod => prod._id === id)


  return (
    <Container >
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} >
          <Image src={thisProduct.image} width={500} />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} >
          <Link to='/' className="btn btn-secondary text-center text-light">بازگشت به صفحه اصلی</Link>
          <h2 className='mt-3'>{thisProduct.name}</h2>
          <ListGroup>
            <ListGroupItem>{thisProduct.description}</ListGroupItem>
            <ListGroupItem> قیمت :{thisProduct.price} تومان</ListGroupItem>
          </ListGroup>
          <Button className="mt-3">افزودن به سبد خرید</Button>
          
        </Col>
      </Row>

    </Container>
  )
}

export default Product