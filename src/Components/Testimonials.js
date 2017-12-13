import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Testimonials extends Component {
  render() {
    let newData = [];
    return(
      <div className="testimonials">
        <div className="container">
          <h1 className="section-title"><strong>{this.props.title}</strong></h1>
          <div class="section-title-divider"></div>
          <h5 className="section-description">{this.props.description}</h5>
          {
            this.props.data.map((testimonial, index) =>
              {
                if(index < this.props.limit) {
                  newData[index] = this.props.data[index];
                }
              }
            )
          }
          {
            newData.map((testimonial, index) =>
              <Row className="testimonial">
                <Col md={3} className="client">
                  <div className="img">
                    <img src={testimonial.img} />
                  </div>
                  <h4>{testimonial.name}</h4>
                  <h5>{testimonial.company}</h5>
                </Col>
                <Col md={9} className="quote">
                  <b>
                    <img src="https://bootstrapmade.com/demo/themes/Imperial/img/quote_sign_left.png" alt="" />
                  </b>
                  {testimonial.quote}
                  <small>
                    <img src="https://bootstrapmade.com/demo/themes/Imperial/img/quote_sign_right.png" alt="" />
                  </small>
                </Col>
              </Row>
            )
          }
        </div>
      </div>
    )
  }
}

export default Testimonials;
