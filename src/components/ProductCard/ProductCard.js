import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product }) => {
    return (

        <Card className='product-card py-2 rounded-3 text-center mb-3'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' width={120} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title className="text-center  product-title" as="h4">{product.name}</Card.Title>
                </Link>
                <Card.Text as="span" className="my-2">{product.price} تومان</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Link className='btn' to='/' >افزودن به سبد خرید</Link>
            </Card.Body>
        </Card>

    )
}

export default ProductCard