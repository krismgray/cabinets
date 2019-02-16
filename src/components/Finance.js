import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Header, Segment, Image, Divider, Button, Container, Table, Icon, Transition } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../About.css';

class Finance extends Component {
  state = { width: window.innerWidth, visible: false }

    handleResize() {
      this.setState({ width: window.innerWidth });
    }

    componentDidMOunt() {
      window.addEventListener('resize', this.handleResize())
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize());
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })


  render() {
    const { activeItem, width, visible } = this.state;
    const isMobile = width <= 500;
    if (!isMobile ){
    return (
      <div>
        <div className='topheader'>
          <div className='logo'>
            <Image size='small' src={require('../images/C&ELogo.jpg')} />
          </div>
          <div className='name'>
            <h1 className='title'>C&E Cabinets</h1>
            <p className='subTitle'>Custom and European cabinets</p>
          </div>
        </div>
        <NavMenu />
        <div className='body3'>
        <div className='Aboutheader'>
          <p className='headertitle'>Financing</p>
        </div>
        </div>
        <Footer />
      </div>
    )} else {
      return (
        <div>
          <Footer />
        </div>
      )
    }
  }
}

export default Finance;
