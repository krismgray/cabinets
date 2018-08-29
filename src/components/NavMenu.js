import React, { Component } from 'react';
import { Header, Menu, Image, Button, Icon, Sidebar, Divider } from 'semantic-ui-react';
import { Grid, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import '../Home.css';

class NavMenu extends Component {
  state = { width: window.innerWidth, visible: false, activeItem: '' }

  handleClick = (e, { name }) => this.setState({ activeItem: name })

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMOunt() {
    window.addEventListener('resize', this.handleResize())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize());
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { activeItem, width, visible } = this.state;
    const isMobile = width <= 500;
    if (!isMobile ){
    return (
      <div>
      <br />
      <div className="navbar">
        <Menu secondary inverted size='huge'>
          <Link to="/">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}>
              Home
            </Menu.Item>
          </Link>
          <Link to="/About">
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleClick}>
              About Us
            </Menu.Item>
          </Link>
          <Link to='Cabinets'>
            <Menu.Item name='cabinets' active={activeItem === 'cabinets'} onClick={this.handleClick}>
              Cabinets
            </Menu.Item>
          </Link>
          <Link to='Contact'>
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleClick}>
              Contact
            </Menu.Item>
          </Link>
        </Menu>
      </div>
      </div>
    )} else {
      return(
        <div>
          <div className='mobilemenu'>
            <div className='mobilemenu1'>
            <Button fluid size='big' icon onClick={this.toggleVisibility}><Icon name='content' size='large' /></Button>
            </div>
            <br />
          </div>
          <br />
            <Sidebar as={Menu} animation='overlay' visible={visible} direction='left' vertical>
              <Button onClick={this.toggleVisibility}><Icon name='remove' size='large' /></Button>
            <Link to="/">
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}>
                Home
              </Menu.Item>
            </Link>
            <Link to="/Stylists">
              <Menu.Item name='stylists' active={activeItem === 'stylists'} onClick={this.handleClick}>
                Stylists
              </Menu.Item>
            </Link>
              <Link to='Services'>
                <Menu.Item name='services' active={activeItem === 'services'} onClick={this.handleClick}>
                  Services
                </Menu.Item>
              </Link>
              <Link to='Contact'>
                <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleClick}>
                  Contact
                </Menu.Item>
              </Link>
          </Sidebar>
        </div>
      )
    }
  }
}

export default NavMenu;
