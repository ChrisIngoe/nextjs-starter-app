import React, { useState, useEffect, memo, useContext } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

/* Actions */
import ACTION_TYPES from '../store/actionTypes';

/* Components */
import NavLeft from './nav/NavLeft';
import NavBar from './nav/NavBar';
import Footer from './foot/Footer';
import MenuContext from '../components/hooks/menuContext';

function MainLayout(mainProps) {
  const { children, activeLink } = mainProps;

  const wideNav = { width: '240px' };
  const wideContent = { marginLeft: '240px' };

  return (
    <>
      <NavBar />
      <Container fluid className="wrapper">
        <Row>
          <Col className="wrapper-left" style={wideNav}>
            <NavLeft activeLink={activeLink} />
          </Col>
          <Col className="wrapper-content" style={wideContent}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default connect(state => state)(MainLayout);
