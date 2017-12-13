import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Service from './Service';

class OurServices extends Component {

  widthDefiner() {
    let customWidth = Math.floor(100/this.props.column);
    console.log(this.props.column,customWidth);
    let widthStyle = {
      width: `${customWidth}%`
    }
    return widthStyle;
  }

  render() {
    return(
      <div className="services">
        <div className="container">
          <h1 className="section-title"><strong>Our Services</strong></h1>
          <div className="section-title-divider"></div>
          <h5 className="section-description">{this.props.description}</h5>
          <Row>
            {
              this.props.services.map((service, index) =>
                <Col style={this.widthDefiner()} className="service-item" md={4}><Service glyph={service.glyph} title={service.title} desc={service.desc} /></Col>
              )
            }
          </Row>
        </div>
      </div>
    )
  }
}

export default OurServices;
