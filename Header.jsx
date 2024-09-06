import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Home from './Home';

function Header() {
  return (
    <div>

      <ul> 

       
        <li> <Link to ='/Motivation'> Motivation</Link></li>
        <li> <Link to = '/Determine'> Determination</Link></li>
        <li> <Link to = '/Consistent'> Consistent</Link> </li>
        <li> <Link to = '/Patience'>Patience </Link></li>
       
        <li> <Link to = '/Innovation'> Innovation</Link> </li>
        <li> <Link to = '/Balanced'> Balanced </Link> </li>
        <li><Link to = '/Mentor'>My Mentor</Link></li>
      
      </ul> 


      <Home/>


      

    </div>
  )
}

export default Header
