import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class OurTeam extends Component {

  widthDefiner() {
    let customWidth = Math.floor(100/this.props.column);
    console.log(this.props.column,customWidth);
    let widthStyle = {
      width: `${customWidth}%`,
      'max-width': `${customWidth}%`,
      'flex-base': `${customWidth}%`
    }
    return widthStyle;
  }

  render() {
    let newData = [];
    return(
      <div className="ourTeam">
        <div className="container">
          <h1 className="section-title"><strong>{this.props.title}</strong></h1>
          <div class="section-title-divider"></div>
          <h5 className="section-description">{this.props.description}</h5>
          {
            this.props.data.map((member, index) =>
              {
                if(index < this.props.limit) {
                  newData[index] = this.props.data[index];
                }
              }
            )
          }
          {
            newData.map((member, index) =>
              <Col style={this.widthDefiner()} md={3} className="member">
                <div className="img">
                  <img src={member.img} />
                </div>
                <h4>{member.name}</h4>
                <h5>{member.position}</h5>
                <div class="social">

                  {
                    this.props.socials.map((uSocial, index) =>
                      member.social[uSocial] ? <a href={member.social[uSocial]}><i class={`fa fa-${uSocial}`}></i></a> : null
                    )
                  }
                </div>
              </Col>
            )
          }
        </div>
      </div>
    )
  }
}

export default OurTeam;



// {member.social.facebook ? <a href={member.social.facebook}><i class="fa fa-facebook"></i></a> : null }
