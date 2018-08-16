import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import Carousel from 'nuka-carousel';
import { Header, Segment, Image, Divider, Button, Container, Table, Icon, Transition } from 'semantic-ui-react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow']


class Home extends Component {
  state = { animation: transitions[0], duration: 700, visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  toggleVisibility1 = () => this.setState({ visible: !this.state.visible })
  toggleVisibility2 = () => this.setState({ visible: !this.state.visible })
  toggleVisibility3 = () => this.setState({ visible: !this.state.visible })
  toggleVisibility4 = () => this.setState({ visible: !this.state.visible })
  toggleVisibility5 = () => this.setState({ visible: !this.state.visible })


  render() {
    const { animation, duration, visible } = this.state;
    return (
      <div>
        <div className='body'>
          <div className='name'>
            <h1 className='title'>C&E Cabinets</h1>
            <p className='subTitle'>European and custom cabinets</p>
          </div>
          <NavMenu />
          <div className='slideshow'>
            <Carousel transitionMode={'fade'} wrapAround={true} autoplay={true} autoplayInterval={10000} speed={1000}>
                <img src={require('../images/cab1.1.jpg')} />
                <img src={require('../images/cab2.2.jpg')} />
                <img src={require('../images/cab3.1.jpg')} />
            </Carousel>
          </div>
          <br />
          <br />
          <div className='hometext'>
            <h1 className='hometextTitle'>WELCOME TO C&E CABINETS!</h1>
            <Container className='textbox'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget lobortis orci.
              Suspendisse mattis nisi auctor, accumsan leo a, viverra risus. Nam viverra tempus efficitur.
              Nulla facilisi. Donec egestas tellus est, vel iaculis dolor ornare at. Integer sed placerat tortor,
              eget consectetur tellus. Donec vitae elit luctus, egestas risus in, tristique ante. Suspendisse potenti.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper tincidunt ipsum eu ultrices.
              Ut mattis, ante quis scelerisque mollis, risus massa imperdiet purus, a semper nisi velit a sapien.
              Aliquam erat volutpat. Duis porta nibh eget risus ullamcorper, in sollicitudin velit ullamcorper.
              Etiam dictum sem at tellus gravida, eget euismod purus efficitur.
            </p>
            <p>
              Vivamus vitae venenatis sapien. In hac habitasse platea dictumst.
              Duis interdum libero eget iaculis finibus. Praesent commodo, sapien a ultrices aliquet,
               nisi ipsum auctor quam, in efficitur libero dui et dui. Donec lacinia mauris non venenatis ornare.
               Fusce ut justo non eros feugiat pharetra. Aenean id varius ligula.

              Praesent quis elementum neque. Donec tempus, est non aliquet convallis, augue nibh eleifend elit,
              nec faucibus lorem lectus a magna. Nam vehicula placerat magna, a finibus nibh dictum in. Donec
              elementum vestibulum magna eleifend consequat. Nam luctus non mauris nec fermentum. Nulla imperdiet
              gravida sem.
            </p>
            <p>
              Nam tincidunt odio mi, sed vestibulum leo sagittis vel. Nam metus lorem, venenatis eu orci a,
              fringilla porta augue. Pellentesque porttitor diam felis. Morbi mattis odio quis purus sodales tincidunt.
              Vestibulum consectetur diam sed velit sodales pharetra. Morbi egestas eros a quam hendrerit, pharetra suscipit
              risus luctus. Nulla condimentum neque eu fringilla commodo. Suspendisse laoreet, nisi quis gravida elementum,
               magna felis faucibus diam, quis tempus libero quam nec arcu.
            </p>
          </Container>
          </div>
          <br />
          <br />
          <div className='tableInfo'>
            <Container>
              <Table basic='very' celled collapsing style={{ 'background-color': '#FFDCC2'}}>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <div className='Iconset'>
                        <Transition animation={animation} duration={duration} visible={visible}>
                          <Icon onMouseOver={this.toggleVisibility} name='money bill alternate outline' size='big' style={{ 'align-content': 'center'}} />
                        </Transition>
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
                        <Transition animation={animation} duration={duration} visible={visible}>
                          <Icon onMouseOver={this.toggleVisibility1} name='leaf' size='big' style={{ 'align-content': 'center'}} />
                        </Transition>
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
                        <Transition animation={animation} duration={duration} visible={visible}>
                          <Icon onMouseOver={this.toggleVisibility2} name='point' size='big' style={{ 'align-content': 'center'}} />
                        </Transition>
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
                        <Transition animation={animation} duration={duration} visible={visible}>
                          <Icon onMouseOver={this.toggleVisibility3} name='pencil alternate' size='big' style={{ 'align-content': 'center'}} />
                        </Transition>
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
                        <Transition animation={animation} duration={duration} visible={visible}>
                          <Icon onMouseOver={this.toggleVisibility4} name='tree' size='big' style={{ 'align-content': 'center'}} />
                        </Transition>
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
                        <Transition animation={animation} duration={duration} visible={visible}>
                          <Icon onMouseOver={this.toggleVisibility5} name='home' size='big' style={{ 'align-content': 'center'}} />
                        </Transition>
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
        <Footer />
      </div>
    )
  }
}

export default Home;
