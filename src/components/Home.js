import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Header, Segment, Image, Divider, Button, Container, Table, Icon, Transition } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../Home.css';

const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow']


class Home extends Component {
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
        <div className='body'>
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
          <NavMenu />
          <div className='slideshow'>
            <Carousel autoPlay={true} transitionTime={500} infiniteLoop={true} showThumbs={false} interval={8000}>
              <div>
                <img src={require('../images/cabinet1.jpg')} />
              </div>
              <div>
                <img src={require('../images/cabinet2.jpg')} />
              </div>
              <div>
                <img src={require('../images/cabinet3.jpg')} />
              </div>
              <div>
                <img src={require('../images/cabinet5.jpg')} />
              </div>
            </Carousel>
          </div>
          <div className='body2'>
          <br />
          <br />
          <div className='hometext'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h1 className='hometextTitle'>WELCOME TO C&E CABINETS!</h1>
              </Col>
              <Container className='textbox'>
                <p>
                  C&E Cabinets has supplied custom, standard
                  and European cabinets for Northern Utah,
                  Southern Utah, and the Salt Lake Valley for the
                   last 17 years, providing quality cabinets and
                   personalized service.
                </p>
            </Container>
            </Row>
          </Grid>
          </div>
          <br />
          <br />
          <div className='tableInfo'>
            <Container>
              <Table basic='very' celled collapsing>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='money bill alternate outline' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='leaf' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='point' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='pencil alternate' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='tree' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='home' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Container>
            <br />
            <br />
          </div>
        </div>
        </div>
        <Footer />
      </div>
    )} else {
      return (
      <div>
        <div className='body'>
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
          <div className='slideshow'>
            <Carousel autoPlay={true} transitionTime={500} infiniteLoop={true} showThumbs={false} interval={8000}>
              <div>
                <img src={require('../images/cabinet1.jpg')} />
              </div>
              <div>
                <img src={require('../images/cabinet2.jpg')} />
              </div>
              <div>
                <img src={require('../images/cabinet3.jpg')} />
              </div>
              <div>
                <img src={require('../images/cabinet5.jpg')} />
              </div>
            </Carousel>
          </div>
          <div className='body2'>
          <br />
          <br />
          <div className='hometext'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h1 className='hometextTitle'>WELCOME TO C&E CABINETS!</h1>
              </Col>
              <Container className='textbox'>
              <Col xs={12} sm={6} md={4}>
                <p className='homemobiletext'>
                  C&E Cabinets has supplied custom, standard
                  and European cabinets for Northern Utah,
                  Southern Utah, and the Salt Lake Valley for the
                   last 17 years, providing quality cabinets and
                   personalized service. 
                </p>
              </Col>
            </Container>
            </Row>
          </Grid>
          </div>
          <br />
          <br />
          <div className='tableInfo'>
            <Container>
              <Table basic='very' collapsing>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='money bill alternate outline' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='leaf' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='point' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='pencil alternate' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='tree' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Icon name='home' size='big' style={{ 'align-content': 'center'}} />
                      </div>
                      <h4 className='infoText'>Traditional or Modern</h4>
                      <br />
                      <p className='infoText'>From traditional raw oak to modern painted shaker cabinets,
                        we fit every style you’re looking for.
                      </p>
                      <br />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Container>
          </div>
        </div>
        </div>
        <Footer />
      </div>
      )
    }
  }
}

export default Home;
