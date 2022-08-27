import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Products from '../../Products'
import ProductCard from '../../components/ProductCard/ProductCard'

const Home = () => {

    let productList = Products.map((item) => {
        return (
            <Col xl={3} md={3} sm={4} xs={6} >
            <ProductCard product={item} key={item._id} />
            </Col>
        )
    })
    return (
        <div>
            <h1 className='text-center'>
                خانه
            </h1>
            <Row className="w-100 mt-3">
                    {productList}
            </Row>

        </div>
    )
}

export default Home