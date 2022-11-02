import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>Book Management App</h1>
        <hr/>
        <div className='links'>
            <NavLink to= "/" className = "link" activeClassName = "active" exact>
                Books
            </NavLink>
            <NavLink to= "/add" className = "link" activeClassName = "active" exact>
                Add
            </NavLink>
        </div>
    </header>
  )
}

export default Header