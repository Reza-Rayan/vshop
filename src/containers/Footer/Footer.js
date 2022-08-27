import React from 'react'
import { Col, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Footer.css'

import TitleContainer from '../../components/TitleContainer/TitleContainer'

function Footer() {
    return (
        <footer className='footer w-100 p-3 card-footer  text-light shadow' >
            <Container>
                <Col lg={4} md={4} sm={12} xs={12}>
                <TitleContainer title='لینک های میانبر' />
                    <ul>
                        <li className=' list-group py-2 px-0 mx-0'> <Link to='/'> صغحه اصلی</Link></li>
                        <li className=' list-group py-2'> <Link to='/shop'> محصولات</Link></li>
                        <li className=' list-group py-2'> <Link to='/contact-us'> ارتباط با ما</Link></li>
                       
                    </ul>
                </Col>
            </Container>
            <div className='text-center'>طراحی و برنامه نویسی وبسایت توسط تیم رایان وب</div>
        </footer>
    )
}

export default Footer