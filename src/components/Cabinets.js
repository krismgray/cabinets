import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Header, Segment, Image, Divider, Button, Container, Table, Icon, Transition, Grid, Accordion } from 'semantic-ui-react';
import '../Cabinets.css';



class Cabinets extends Component {
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
        <NavMenu />
        <div className='Cabinetheader'>
          <p className='headertitle'>Cabinet Styles</p>
        </div>
        <br />
        <br />
        <div className='sections'>
          <Grid columns='equal'>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image size='medium' centered src={require('../images/block.jpg')} />
                <p className='sectionp'>Custom Cabinets</p>
                <p className='sectionbio'>We offer custom cabients that ....... and ...... and .....</p>
                <Button size='large' basic color='red'>Learn More!</Button>
              </Grid.Column>
              <Grid.Column>
                <Image size='medium' centered src={require('../images/block.jpg')} />
                <p className='sectionp'>European Cabinets</p>
                <p className='sectionbio'>We offer European cabients that ....... and ...... and .....</p>
                <Button size='large' basic color='red'>Learn More!</Button>
              </Grid.Column>
              <Grid.Column>
                <Image size='medium' centered src={require('../images/block.jpg')} />
                <p className='sectionp'>Stock cabinets</p>
                <p className='sectionbio'>We have a variety of stock cabients that ....... and ...... and .....</p>
                <Button size='large' basic color='red'>Learn More!</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <br />
        <br />
        <div className='cabinetpic'>

        </div>
        <br />
        <div className="cabinets1">
          <Container>
            <h1>Custom Cabinets</h1>
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
            <Accordion fluid styled>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Shenandoah
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  this is where the details regarding these cabinets go.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Schuler
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                  a;lskdjfa;lwkejfa;lkwejfae
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Diamond
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  This style .....
                </p>
              </Accordion.Content>
            </Accordion>
          </Container>
        </div>
        <br />
        <Divider />
        <br />
        <div className="cabinets2">
          <Container>
            <h1>European Cabinets</h1>
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
          </Container>
        </div>
        <br />
        <Divider />
        <br />
        <div className="cabinets3">
          <Container>
            <h1>Stock Cabinets</h1>
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
          </Container>
        </div>
        <br />
        <Divider />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Cabinets;
