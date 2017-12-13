import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Subscribe extends Component {
  render() {
    return(
      <div className="subscribe">
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
