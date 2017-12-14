import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Subscribe extends Component {

  constructor(props) {
    super(props);
  }

  bgDefiner() {
    return {
      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${this.props.background}) fixed center center;`
    };
  }

  render() {
    return(
      <div className="subscribe" style={this.bgDefiner()}>
        <div className="container">
          <Row>
            <Col md={8} className="text">
              <h2>{this.props.title}</h2>
              <p>{this.props.description}</p>
            </Col>
            <Col md={4} className="btn">
              <a href="#" className="btn-services">{this.props.btn}</a>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Subscribe;
