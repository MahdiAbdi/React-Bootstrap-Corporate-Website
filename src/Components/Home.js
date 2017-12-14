import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    let initText = this.props.descriptions[0];
    this.state = {
      textCounter : 1,
      text: initText,
    }
    this.textChanger = this.textChanger.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.textChanger(),
      this.props.interval
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  bgDefiner() {
    return {
      background: `url(${this.props.background}) top center fixed`
    };
  }

  textChanger() {
    this.setState({text: this.props.descriptions[this.state.textCounter]});
    if( this.state.textCounter < 3 ) {
      this.setState({textCounter: this.state.textCounter + 1});
    }
    else {
      this.setState({textCounter: 0});
    }
  }
  render() {
    return(
      <Jumbotron className="jumb" style={this.bgDefiner()}>
        <div className="home-container">
          <div className="logo">
            <img src={this.props.logo} />
          </div>
          <h1>Welcome to {this.props.brand}</h1>
          <h2>We Create {this.state.text}</h2>
          <div className="actions">
            {
              this.props.buttons.map(button =>
                <a href={button.href} className={`btn-${button.style}`}>{button.text}</a>
              )
            }
          </div>
        </div>
      </Jumbotron>
    )
  }
}

export default Home;
