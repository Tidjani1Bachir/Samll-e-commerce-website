import React from 'react'
import { FiHeart } from "react-icons/fi";
import {  AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md"
import "./nav.css"
const Nav = ({handleInputChange}) => {
  return (
    <nav>
      <div className='nav-container'>
        <input onChange={handleInputChange} className='search-input'   placeholder='Enter you search shoes'></input>
      </div>
      <div className='profile-container'>
          <a href='#'>
            <FiHeart className='nav-icons'></FiHeart>
           </a>

          <a href='#'>
            <MdOutlineShoppingCart className='nav-icons'></MdOutlineShoppingCart>
           </a>

           <a href='#'>
            <AiOutlineUser className='nav-icons'></AiOutlineUser>
           </a>

      </div>
    </nav>
  )
}

export default Nav