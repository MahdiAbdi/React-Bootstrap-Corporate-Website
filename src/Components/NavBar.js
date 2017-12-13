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
        <Nav pullRight>
          {
            this.props.navItems.map((item, index) =>
              <NavItem eventKey={index} href={item.href}>{item.name}</NavItem>)
          }
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar;
