import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import NavMenu from './NavMenu';
import Footer from './Footer';
import CabMobile from './CabMobile';
import { Header, Segment, Image, Divider, Button, Container, Table, Icon, Transition, Grid, Accordion } from 'semantic-ui-react';
import '../Cabinets.css';



class Cabinets extends Component {
  state = { activeIndex: '', width: window.innerWidth, visible: false  }

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

  handleClick = (e, titleProps) => {
  const { index } = titleProps
  const { activeIndex } = this.state
  const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;
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
        <div className='colorpage'>
        <div className='Cabinetheader'>
          <p className='headertitle'>Cabinet Styles</p>
        </div>
        <Divider />
        <br />
        <br />
        <div className='sections'>
          <Grid columns='equal'>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image size='medium' centered src={require('../images/block.jpg')} />
                <p className='sectionp'>Custom Cabinets</p>
                <p className='sectionbio'>We offer custom cabients that ....... and ...... and .....</p>
                <Link activeClass="active" to="sec1" smooth={true} duration={500} delay={500}>
                  <Button size='large' basic color='red'>Learn More!</Button>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Image size='medium' centered src={require('../images/block.jpg')} />
                <p className='sectionp'>European Cabinets</p>
                <p className='sectionbio'>We offer European cabients that ....... and ...... and .....</p>
                <Link activeClass="active" to="sec2" smooth={true} duration={500} delay={500}>
                  <Button size='large' basic color='red'>Learn More!</Button>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Image size='medium' centered src={require('../images/block.jpg')} />
                <p className='sectionp'>Stock cabinets</p>
                <p className='sectionbio'>We have a variety of stock cabients that ....... and ...... and .....</p>
                <Link activeClass="active" to="sec3" smooth={true} duration={500} delay={500}>
                  <Button size='large' basic color='red'>Learn More!</Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <br />
        <br />
        <div className='cabinetpic'>

        </div>
        <br />
        <div>
          <br />
          <Element name="sec1" className="element">
            <br />
          <div className='container1'>
            <p className='tableTitle'>Custom Cabinets</p>
            <p className='tableText'>
              Your inspired ideas along with our custom design will be the foundation of your kitchen or any other project in your household.
              With focus on representation such as design, elevation of cabinet, depth of cabinet, hardware and molding, our custom cabinetry will assure to include every personal detail you desire and satisfy your highest expectations.
            </p>
            <br />
            <div className="cabinets1">
            <Accordion fluid styled>
              <Accordion.Title style={{ 'color' : 'red' }} active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Shenandoah
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  this is where the details regarding these cabinets go.
                </p>
              </Accordion.Content>
              <Accordion.Title style={{ 'color' : 'red' }} active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Schuler
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                  a;lskdjfa;lwkejfa;lkwejfae
                </p>
              </Accordion.Content>
              <Accordion.Title style={{ 'color' : 'red' }} active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Diamond
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  This style .....
                </p>
              </Accordion.Content>
            </Accordion>
          </div>
        </div>
          </Element>
          <br />
          <br />
          <br />
          <div className='picGroup'>
            <Image size='medium' src={require('../images/pic1.jpg')} />
            <Image size='medium' src={require('../images/pic2.jpg')} />
            <Image size='medium' src={require('../images/pic3.jpg')} />
          </div>
        </div>
        <br />
        <br />
        <Divider />
        <br />
        <div className="cabinets2">
          <Element name="sec2" className="element">
            <br />
            <p className='tableTitle'>European Cabinets</p>
            <br />
            <br />
            <div className='section2'>
            <Grid columns='equal'>
              <Grid.Row>
                <Grid.Column width={12}>
                  <p className='tableText2'>
                    The European style of manufacturing cabinets includes frameless cabinet construction.
                    This popular preference brings a modern and fashionable design to your cabinetry.
                    This choice of cabinet can provide easier access due to elimination of face frame and greater stability with thicker box construction.
                  </p>
                </Grid.Column>

                <Grid.Column width={4}>
                  <Image size='medium' centered src={require('../images/pic1.jpg')} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="cabinets1">
            <Accordion fluid styled>
              <Accordion.Title style={{ 'color' : 'red', 'border-width' : 'thick' }} active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Shenandoah
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  this is where the details regarding these cabinets go.
                </p>
              </Accordion.Content>
              <Accordion.Title style={{ 'color' : 'red' }} active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Schuler
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                  a;lskdjfa;lwkejfa;lkwejfae
                </p>
              </Accordion.Content>
              <Accordion.Title style={{ 'color' : 'red' }} active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Diamond
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  This style .....
                </p>
              </Accordion.Content>
            </Accordion>
          </div>
          </Element>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <Divider />
        <br />
        <div className="cabinets3">
          <Element name="sec3" className="element">
            <br />
          <div className="container1">
            <p className='tableTitle'>Stock Cabinets</p>
            <p className='tableText'>
              We construct from scratch our standard cabinets which provides a professional and well-designed look to your commercial or household project at an affordable price!
            </p>
            <br />
            <div className="cabinets1">
            <Accordion fluid styled>
              <Accordion.Title style={{ 'color' : 'red' }} active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Shenandoah
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  this is where the details regarding these cabinets go.
                </p>
              </Accordion.Content>
              <Accordion.Title style={{ 'color' : 'red' }} active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Schuler
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                  a;lskdjfa;lwkejfa;lkwejfae
                </p>
              </Accordion.Content>
              <Accordion.Title style={{ 'color' : 'red' }} active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Diamond
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  This style .....
                </p>
              </Accordion.Content>
            </Accordion>
            </div>
          </div>
        </Element>
          <br />
          <br />
          <br />
          <div className='picGroup'>
            <Image size='medium' src={require('../images/pic1.jpg')} />
            <Image size='medium' src={require('../images/pic3.jpg')} />
          </div>
          <br />
          <br />
        </div>
        <br />
        <br />
        <Footer />
        </div>
      </div>
    )} else {
      return (
        <div>
          <CabMobile />
        </div>
      )
    }
  }
}

export default Cabinets;
