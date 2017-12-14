import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'

class NavBar extends Component {

  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img src="https://bootstrapmade.com/demo/themes/Imperial/img/logo.png" /></a>
          </Navbar.Brand>
        </Navbar.Header>
        <ul>
          {
            this.props.navItems.map((item, index) =>
              <li key={index}><a href={item.href}>{item.name}</a></li>)
          }
        </ul>
      </Navbar>
    )
  }
}

export default NavBar;
