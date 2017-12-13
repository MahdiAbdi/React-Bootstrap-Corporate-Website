import React, { Component } from 'react';

class Service extends Component {
  render() {
    return(
      <div>
        <div className="service-icon">
          <i className={`fa fa-${this.props.glyph}`}></i>
        </div>
        <div className="service-data">
          <h4 className="service-title"><a href="">{this.props.title}</a></h4>
          <p className="service-description">{this.props.desc}</p>
        </div>
      </div>
    )
  }
}

export default Service;
