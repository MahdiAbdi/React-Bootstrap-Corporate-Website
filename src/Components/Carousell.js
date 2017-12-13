import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Carousell extends Component {

  render() {
    return(
      <Carousel className="vertical">
        <Carousel.Item>
          <img className="img-responsive" width={900} height={500} alt="900x500" src="https://bootstrapmade.com/demo/themes/Groovin/assets/img/slide/1.jpg" />
          <Carousel.Caption>
            <h1>First slide label</h1>
            <h4>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive" width={900} height={500} alt="900x500" src="https://bootstrapmade.com/demo/themes/Groovin/assets/img/slide/2.jpg" />
          <Carousel.Caption>
            <h1>Second slide label</h1>
            <h4>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive" width={900} height={500} alt="900x500" src="https://bootstrapmade.com/demo/themes/Groovin/assets/img/slide/3.jpg" />
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <h4>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }

}

export default Carousell;
