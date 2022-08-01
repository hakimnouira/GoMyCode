
import Carousel from 'react-bootstrap/Carousel';




function Carousels() {
    return (


<Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4461ba51281127b8/60df0455878686258b9c2809/16c84589a1ceef313e45c4a39b0f28f2cbeaaf85.jpg"
          alt="First slide"
          id="ta"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4461ba51281127b8/60df0455878686258b9c2809/16c84589a1ceef313e45c4a39b0f28f2cbeaaf85.jpg"
          alt="Second slide"
          id="ta"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4461ba51281127b8/60df0455878686258b9c2809/16c84589a1ceef313e45c4a39b0f28f2cbeaaf85.jpg"
          alt="Third slide"
          id="ta"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
        
        
        
        
  











            );




    




    }






            export default Carousels;