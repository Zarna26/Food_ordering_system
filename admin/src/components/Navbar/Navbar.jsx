import React from 'react'
import './Navbar.css'
import { assets } from '../../../../admin/src/assets/assets'

export const Navbar = () => {
  return (
    <div className='navbar' >
        <img className='logo' src={assets.logo} alt="" />
        <p>Admin page</p> 
        <img className="profile" src={assets.profile_new} alt="" />
    </div>
  )
}
