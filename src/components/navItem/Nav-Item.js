import React from 'react'
import './Nav-Item.css'
import  { Link } from 'react-router-dom'

function NavItem(props) {
    return (
        <li className='nav-item text-light'><Link to={props.link} className='nav-link text-center'>
            {props.children}
        </Link></li>
    )
}

export default NavItem