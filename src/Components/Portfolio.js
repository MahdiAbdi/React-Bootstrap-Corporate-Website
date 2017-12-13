import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Portfolio extends Component {

  bgDefiner(portfolio) {
    let portfolioo;
    return {
      backgroundImage: `url(${portfolio.img})`
    };
  }

  widthDefiner() {
    // let customWidth = Math.floor(100/this.props.column);
    let customWidth = 50;
    console.log("portfolio",this.props.column,customWidth);
    let widthStyle = {
      width: `${customWidth}% !important`
    }
    return widthStyle;
  }

  render() {
    return(
      <div className="portfolio">
        <div className="container">
          <h1 className="section-title"><strong>{this.props.title}</strong></h1>
          <div className="section-title-divider"></div>
          <h5 className="section-description">{this.props.description}</h5>
          <Row>
            {this.props.portfolios.map((portfolio, index) =>
              <Col className="item" style={this.widthDefiner()} md={3}>
                <a className="portfolio-item" href={portfolio.href} style={this.bgDefiner(portfolio)}>
                  <div className="details">
                    <h4>{portfolio.title}</h4>
                    <span>{portfolio.description}</span>
                  </div>
                </a>
              </Col>
            )}
          </Row>
        </div>
      </div>
    )
  }
}

export default Portfolio;
