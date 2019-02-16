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
        <div className='cabinetpic'>
        </div>
        <br />
          <div className="cabinets1">
              <br />
              <p className='tableTitle'>Custom Cabinets</p>
              <br />
              <br />
              <div className='section1'>
              <Grid columns='equal'>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image size='medium' centered src={require('../images/pic2.jpg')} />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <p className='tableText'>
                      Your inspired ideas along with our custom design will be the foundation of your kitchen or any other project in your household.
                      With focus on representation such as design, elevation of cabinet, depth of cabinet, hardware and molding, our custom cabinetry will assure to include every personal detail you desire and satisfy your highest expectations.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              </div>
              <br />
            <br />
          </div>
        <br />
        <br />
        <Divider />
        <br />
        <div className="cabinets2">
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
        </div>
        <br />
        <Divider />
        <br />
          <div className="cabinets1">
              <br />
              <p className='tableTitle'>Stock Cabinets</p>
              <br />
              <div className='section1'>
              <Grid columns='equal'>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Image size='medium' centered src={require('../images/pic3.jpg')} />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <p className='tableText'>
                      We construct from scratch our standard cabinets which provides a professional and well-designed look to your commercial or household project at an affordable price!
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              </div>
              <br />
            <br />
            <Divider />
            <br />
          </div>
          <div className='cabinets2'>
            <p className='tableTitle'>Financing</p>
              <br />
              <div className='section2'>
              <Grid columns='equal'>
                <Grid.Row>
                  <Grid.Column width={12}>
                    <p className='tableText'>
                      Want to get new cabinets but don't have the cash?
                      We recently partnered up with Mountain America Credit Union for financing options!
                      You can contact us for more info or contact Mountain America directly.
                    </p>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Image size='medium' centered src={require('../images/pic6.png')} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              </div>
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
