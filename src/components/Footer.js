import React, { Component } from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../Home.css';

class Footer extends Component {
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


  render() {
    const { activeItem, width, visible } = this.state;
    const isMobile = width <= 500;
    if (!isMobile ){
    return (
      <div>
      <div className='footer'>
        <div className='footer1'>
          <Header as='h1'>C&E Cabinets</Header>
          <br />
          <p className='footnote2'>|</p>
          <br />
          <a href="https://www.facebook.com/">
            <Icon color='black' name='facebook square' size='big' />
          </a>
          <a href="https://www.instagram.com/">
            <Icon color='black' name='instagram' size='big' />
          </a>
        </div>
        <div className='footnote3'>
          <p>Email:</p>
            <a href="mailto:test@test.com">
              <p> c&ecabinets.com</p>
            </a>
            <p className='footnote2'>|</p>
            <p>Phone: </p>
              <a href="tel:1-801-973-6554">
                <p> (801)973-6554</p>
              </a>
        </div>
      </div>
      <div className='allrights'>
        <p>©Copyright @2018 All rights reserved | Designed by Kris Gray</p>
      </div>
    </div>
    )
  }else {
    return(
      <div>
        <Grid>
          <Row>
              <div className='mobilefooter'>
                <div className='mobilefooter1'>
                  <p style={{ "font-size" : "13px"}}>C&E Cabinets |</p>
                  <a href="https://www.facebook.com/">
                    <Icon color='black' name='facebook square' size='big' />
                  </a>
                  <a href="https://www.instagram.com/">
                    <Icon color='black' name='instagram' size='big' />
                  </a>
                </div>
                <div className='mobilefootnote3'>
                  <p>Email:</p>
                    <a href="mailto:test@test.com">
                      <p> c&ecabinets.com</p>
                    </a>
                    <p className='mobilefootnote2'>|</p>
                    <p>Phone: </p>
                      <a href="tel:1-801-973-6554">
                        <p> (801)973-6554</p>
                      </a>
                </div>
              </div>
          </Row>
        </Grid>
        <Grid>
          <Row>
              <div className='allrights'>
                <p>©Copyright @2018 All rights reserved | Designed by Kris Gray</p>
              </div>
          </Row>
        </Grid>
    </div>
    )
    }
  }
}

export default Footer;
