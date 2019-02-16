import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Header, Segment, Image, Divider, Button, Container, Table, Icon, Transition } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../About.css';



class About extends Component {
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
          <p className='headertitle'>About Us</p>
        </div>
        <Divider />
        <br />
        <div className='abouttext'>
          <p className='aboutcontent'>
            C&E Cabinets has been manufacturing custom woodworking items for 18 years in the state of Utah.
            We serve residential as well as commercial clients.
            We take pride in what we build and know what it means to construct a quality piece of art.
          </p>
          <p className='aboutcontent'>
            Make your dream kitchen or project a reality at an affordable price.
            Our most common woods that we work with are Hickory, Maple, Alder, Oak, Cherry, Walnut that can be designed with a knotty or clear look.
            Cabinets may come In natural color, or any color of your choice as well with an option to include glaze or non-glaze to the finish of the cabinet.
            Please call or email for a free estimate.
          </p>
        </div>
        <br />
        <br />
        <div className='bar'>
          <Divider />
        </div>
        <br />
        <br />
        <div className='picSection'>
            <Image size='large' src={require('../images/pic5.jpg')} />
        </div>
        <br />
        <br />
        <div className='bar'>
          <Divider />
        </div>
        <br />
        <br />
        </div>
        <Footer />
      </div>
    )} else {
      return (
        <div>
          <Grid>
            <Row>
              <Col sx={12}>
                  <div className='topheader'>
                    <div className='logo'>
                      <Image size='small' src={require('../images/C&ELogo.jpg')} />
                    </div>
                    <div className='name'>
                      <h1 className='title'>C&E Cabinets</h1>
                      <p className='subTitle'>Custom and European cabinets</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
            <br />
          <NavMenu />
          <div className='body3'>
          <div className='Aboutheader'>
            <p className='headertitle'>About Us</p>
          </div>
          <Divider />
          <br />
          <div className='abouttext'>
            <p className='aboutcontent'>
              C&E Cabinets has been manufacturing custom woodworking items for 18 years in the state of Utah.
              We serve residential as well as commercial clients.
              We take pride in what we build and know what it means to construct a quality piece of art.
            </p>
            <p className='aboutcontent'>
              Make your dream kitchen or project a reality at an affordable price.
              Our most common woods that we work with are Hickory, Maple, Alder, Oak, Cherry, Walnut that can be designed with a knotty or clear look.
              Cabinets may come In natural color, or any color of your choice as well with an option to include glaze or non-glaze to the finish of the cabinet.
              Please call or email for a free estimate.
            </p>
          </div>
          <br />
          <br />
          <div className='bar'>
            <Divider />
          </div>
          <br />
          <br />
          <div className='picSection'>
              <Image src={require('../images/pic5.jpg')} />
          </div>
          <br />
          </div>
          <Footer />
        </div>
      )
    }
  }
}

export default About;
