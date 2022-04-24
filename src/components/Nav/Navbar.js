
import React from 'react';
import {Nav } from 'react-bootstrap';

const Navbar = ()=>{
    return (
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/books">Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href ="/authors">Authors</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/categories">Categories</Nav.Link>
        </Nav.Item>
     
      </Nav>
    )
}
export default Navbar;