import React, { Component } from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';
import '../Home.css';

class Footer extends Component {
  render() {
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
    );
  }
}

export default Footer;
