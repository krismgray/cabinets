import React, { Component } from 'react';
import NavMenu from './NavMenu';
import { Header, Segment, Image, Divider, Button, Container, Table, Icon, Transition } from 'semantic-ui-react';


class Cabinets extends Component {
  render() {
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
      </div>
    );
  }
}

export default Cabinets;
