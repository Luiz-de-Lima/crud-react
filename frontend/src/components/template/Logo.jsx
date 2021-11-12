import './Logo.css'
import React from 'react'
import Logo from '../../assets/images/logo.jpeg'
import { Link } from 'react-router-dom'


export default props=>
<aside className="logo">
    <Link to="">
    <img src={Logo} alt="logo" />
    </Link>
</aside>
