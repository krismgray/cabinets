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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lobortis orci.
            Suspendisse mattis nisi auctor, accumsan leo a, viverra risus. Nam viverra tempus efficitur.
            Nulla facilisi. Donec egestas tellus est, vel iaculis dolor ornare at. Integer sed placerat tortor,
            eget consectetur tellus.
          </p>
          <p className='aboutcontent'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lobortis orci.
            Suspendisse mattis nisi auctor, accumsan leo a, viverra risus. Nam viverra tempus efficitur.
            Nulla facilisi.Donec vitae elit luctus, egestas risus in, tristique ante. Suspendisse potenti.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <p className='aboutcontent'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lobortis orci.
            Suspendisse mattis nisi auctor, accumsan leo a, viverra risus. Nam viverra tempus efficitur.
            Nulla facilisi. Donec egestas tellus est, vel iaculis dolor ornare at. Integer sed placerat tortor,
            eget consectetur tellus.Donec vitae elit luctus, egestas risus in, tristique ante. Suspendisse potenti.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
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
          <Image.Group size='large'>
            <Image src={require('../images/pic1.jpg')} />
            <Image src={require('../images/pic2.jpg')} />
            <Image src={require('../images/pic3.jpg')} />
          </Image.Group>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lobortis orci.
              Suspendisse mattis nisi auctor, accumsan leo a, viverra risus. Nam viverra tempus efficitur.
              Nulla facilisi. Donec egestas tellus est, vel iaculis dolor ornare at. Integer sed placerat tortor,
              eget consectetur tellus.
            </p>
            <p className='aboutcontent'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lobortis orci.
              Suspendisse mattis nisi auctor, accumsan leo a, viverra risus. Nam viverra tempus efficitur.
              Nulla facilisi.Donec vitae elit luctus, egestas risus in, tristique ante. Suspendisse potenti.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>
            <p className='aboutcontent'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lobortis orci.
              Suspendisse mattis nisi auctor, accumsan leo a, viverra risus. Nam viverra tempus efficitur.
              Nulla facilisi. Donec egestas tellus est, vel iaculis dolor ornare at. Integer sed placerat tortor,
              eget consectetur tellus.Donec vitae elit luctus, egestas risus in, tristique ante. Suspendisse potenti.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
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
            <Image.Group size='large'>
              <Image src={require('../images/pic1.jpg')} />
              <Image src={require('../images/pic2.jpg')} />
              <Image src={require('../images/pic3.jpg')} />
            </Image.Group>
          </div>
            <Divider />
          </div>
          <Footer />
        </div>
      )
    }
  }
}

export default About;
