import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import ProductCard from '../../components/ProductCard/ProductCard'
const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const sendRequest = async () => {
          const response = await  axios.get('http://localhost:8000/api/products');

          setProducts(response.data);
        }
        sendRequest()
    }, [])


    let productList = products.map((item) => {
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