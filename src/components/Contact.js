import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Grid, Row, Col } from 'react-bootstrap';
import { Header, Segment, Image, Divider, Button, Container, Table, Icon, Transition } from 'semantic-ui-react';
import '../Contact.css';



class Contact extends Component {
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
        <div className='contactpic'>

        </div>
        <div className='body2'>
          <br />
          <br />
          <div className='contacttitle'>Our Contact Info</div>
          <br />
          <div className='section1'>
        <Grid>
          <Row>
            <Col xs={8} md={6}>
              <Header as='h2' disabled>C&E Cabinets</Header>
              <p>1953 S 4130 W, Salt Lake City, UT 84104</p>
              <a href="https://www.google.com/maps?z=16&q=1953+s+4130+w,+salt+lake+city,+ut+84104">
                Get Directions
              </a>
              <p></p>
              <Header as='h3'>Please call or email for a free estimate.</Header>
              <p></p>
              <a href="tel:1-801-973-6554">
                <p>(801)973-6554</p>
              </a>
              <p></p>
                <div>
                  <a href="mailto:cabinetry@c&ecabinets.com">
                    cabinetry@c&ecabinets.com
                  </a>
                </div>
                <br />
                <p style={{ "font-size" : "14px"}}>
                  <p style={{ "text-decoration" : "underline", "padding-bottom" : "10px", "font-size" : "18px"}}>
                    Cancellation Policy
                  </p>
                  If you place an order and then decide to cancel it, you have 3 days to cancel from the date you ordered it.
                  After that time period there will be 35% restocking fee (NO EXCEPTIONS).
                  We can also deliver the finished product for an extra $25.00 around the Wasatch valley.
                  Upon delivery you are required to inspect the product and sign a consent form stating you
                  received the product with no problem. Without the form signed we can not release the product,
                  same goes if you were picking it up. This is just to insure us as well as the customer as we can fix the product.
                  We offer a guarantee of our product if there are major scratches, dents, or broken pieces.
                  During delivery we are not responsible for wrongful installation not done by us or normal wear and tear.
                </p>
              </Col>
              <Col xs={12} md={6}>
                <div className='scheduletop'>
                  <p>Working Hours</p>
                </div>
                <br />
                <div className='schedule'>
                  <p>Sunday</p>
                  <p>Closed</p>
                </div>
                <div className='schedule'>
                  <p>Monday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Tuesday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Wednesday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Thursday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Saturday</p>
                  <p>Closed</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <br />
        <br />
        </div>
        <Footer />
      </div>
    );
  }
    else {
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
          <br />
          <NavMenu />
          <div className='Mobilecontactpic'>

          </div>
          <div className='Mobilebody2'>
            <br />
            <br />
            <div className='contacttitle'>Our Contact Info</div>
            <br />
            <div className='section1'>
          <Grid>
            <Row>
              <Col xs={12} md={6}>
                <Header as='h2' disabled>C&E Cabinets</Header>
                <p>1953 S 4130 W, Salt Lake City, UT 84104</p>
                <a href="https://www.google.com/maps?z=16&q=1953+s+4130+w,+salt+lake+city,+ut+84104">
                  Get Directions
                </a>
                <p></p>
                <Header as='h3'>Please call or email for a free estimate.</Header>
                <p></p>
                <a href="tel:1-801-973-6554">
                  <p>(801)973-6554</p>
                </a>
                <p></p>
                  <div>
                    <a href="mailto:cabinetry@c&ecabinets.com">
                      cabinetry@c&ecabinets.com
                    </a>
                  </div>
                  <br />
                  <p style={{ "font-size" : "16px", "padding-bottom" : "10px"}}>
                    <p style={{ "text-decoration" : "underline", "padding-bottom" : "10px", "font-size" : "20px"}}>
                      Cancellation Policy
                    </p>
                    If you place an order and then decide to cancel it, you have 3 days to cancel from the date you ordered it.
                    After that time period there will be 35% restocking fee (NO EXCEPTIONS).
                    We can also deliver the finished product for an extra $25.00 around the Wasatch valley.
                    Upon delivery you are required to inspect the product and sign a consent form stating you
                    received the product with no problem. Without the form signed we can not release the product,
                    same goes if you were picking it up. This is just to insure us as well as the customer as we can fix the product.
                    We offer a guarantee of our product if there are major scratches, dents, or broken pieces.
                    During delivery we are not responsible for wrongful installation not done by us or normal wear and tear.
                  </p>
                </Col>
                <Col xs={12} md={6}>
                  <div className='scheduletop'>
                    <p>Working Hours</p>
                  </div>
                  <br />
                  <div className='schedule'>
                    <p>Sunday</p>
                    <p>Closed</p>
                  </div>
                  <div className='schedule'>
                    <p>Monday</p>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <div className='schedule'>
                    <p>Tuesday</p>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <div className='schedule'>
                    <p>Wednesday</p>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <div className='schedule'>
                    <p>Thursday</p>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <div className='schedule'>
                    <p>Friday</p>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <div className='schedule'>
                    <p>Saturday</p>
                    <p>Closed</p>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
          <br />
          <br />
          </div>
          <Footer />
        </div>
      )
    }
  }
}

export default Contact;
