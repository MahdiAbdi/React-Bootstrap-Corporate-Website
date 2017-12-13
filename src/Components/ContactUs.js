import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ContactUs extends Component {
  render() {
    let style = {
      display : 'block',
    }
    return(
      <div className="contactUs">
        <div className="container">
          <h1 className="section-title"><strong>{this.props.title}</strong></h1>
          <div class="section-title-divider"></div>
          <h5 className="section-description">{this.props.description}</h5>
          <Row>
            <Col className="info" md={5}>
                {
                  this.props.data.map((info, index) =>
                    <div>
                      <i class={`fa fa-${info.icon}`}></i>
                      <p>{info.text}</p>
                    </div>
                  )
                }
            </Col>
            <Col md={7}>
              <div className="form">
                <form action="" method="post" role="form" class="contactForm">
                  <div class="form-group">
                    <input name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" type="text" />
                    <div class="validation" style={this.style}></div>
                  </div>
                  <div class="form-group">
                    <input class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" type="email" />
                    <div class="validation" style={this.style}></div>
                  </div>
                  <div class="form-group">
                    <input class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" type="text" />
                    <div class="validation" style={this.style}></div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validation" style={this.style}></div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default ContactUs;
