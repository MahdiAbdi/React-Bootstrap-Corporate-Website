import React , { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class AboutUs extends Component {
  bgDefiner() {
    return {
      background: `url(${this.props.background}) top left no-repeat`
    }
  }
  render() {
    return(
      <div className="aboutus">
        <div className="container">
          <h1 className="section-title">About Us</h1>
          <div className="section-title-divider"></div>
          <h5 className="section-description">{this.props.description}</h5>
          <Row>
            <Col className="about-img" style={this.bgDefiner()} md={6}></Col>
            <Col md={6}>
              <h2 className="about-title">{this.props.title}</h2>
              <p className="about-text">{this.props.text}</p>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default AboutUs;
