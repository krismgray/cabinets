import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Header, Segment, Image, Divider, Button, Container, Table, Icon, Transition, Grid, Accordion } from 'semantic-ui-react';
import {  Row, Col } from 'react-bootstrap';
import '../Cabinets.css';



class CabMobile extends Component {
  state = { activeIndex: '' }

  handleClick = (e, titleProps) => {
  const { index } = titleProps
  const { activeIndex } = this.state
  const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;
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
        <div className='colorpage'>
        <div className='CabinetheaderMobile'>
          <p className='headertitle'>Cabinet Styles</p>
        </div>
        <div className='Mobilecabinetpic'>

        </div>
        <div>
            <p className='tableTitle'>Custom Cabinets</p>
            <p className='MobiletableText'>
              Your inspired ideas along with our custom design will be the foundation of your kitchen or any other project in your household.
              With focus on representation such as design, elevation of cabinet, depth of cabinet, hardware and molding, our custom cabinetry will assure to include every personal detail you desire and satisfy your highest expectations.
            </p>
            <br />
          <br />
          <br />
          <div className='picGroup'>
            <Image size='medium' src={require('../images/pic2.jpg')} />
          </div>
        </div>
        <br />
        <Divider />
        <br />
        <div className="cabinets2">
            <br />
            <p className='tableTitle'>European Cabinets</p>
            <br />
            <br />
            <div className='section2'>
              <p className='MobiletableText'>
                The European style of manufacturing cabinets includes frameless cabinet construction.
                This popular preference brings a modern and fashionable design to your cabinetry.
                This choice of cabinet can provide easier access due to elimination of face frame and greater stability with thicker box construction.
              </p>
            </div>
          <br />
          <br />
            <div className='picGroup'>
              <Image size='medium' src={require('../images/pic1.jpg')} />
            </div>
        </div>
        <br />
        <Divider />
        <br />
        <div className="cabinets3">
            <br />
            <p className='tableTitle'>Stock Cabinets</p>
            <p className='MobiletableText'>
              We construct from scratch our standard cabinets which provides a professional and well-designed look to your commercial or household project at an affordable price!
            </p>
          <br />
          <br />
          <br />
          <div className='picGroup'>
            <Image size='medium' src={require('../images/pic3.jpg')} />
          </div>
          <br />
        </div>
        <br />
        <Divider />
        <br />
        <div className="cabinets3">
            <br />
            <p className='tableTitle'>Financing</p>
            <p className='MobiletableText'>
              Want to get new cabinets but don't have the cash?
              We recently partnered up with Mountain America Credit Union for financing options!
              You can contact us for more info or contact Mountain America directly.
            </p>
          <br />
          <br />
          <br />
          <div className='picGroup'>
            <Image size='medium' src={require('../images/pic6.png')} />
          </div>
          <br />
        </div>
        <br />
        <Footer />
        </div>
      </div>
    );
  }
}

export default CabMobile;
