import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <div class="container">
          <Row>
            <Col md={12}>
              <div class="copyright">
                © Copyright <strong>{this.props.company}</strong>. All Rights Reserved
              </div>
              <div class="credits">
                Bootstrap Template by <a href={this.props.href}>{this.props.name}</a>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    )
  }
}

export default Footer;
