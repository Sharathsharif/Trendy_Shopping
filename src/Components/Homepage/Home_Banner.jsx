import Carousel from 'react-bootstrap/Carousel';
import '../CSS/Home.css'
import Homebanner1 from '../../assets/Image/HomeBanner1.JPG'
import Homebanner2 from '../../assets/Image/HomeBanner2.png'
import Homebanner3 from '../../assets/Image/HomeBanner3.JPG'


function HomeBanner() {
  return (
    <Carousel data-bs-theme="dark shadow">
      <Carousel.Item>

        <img
          className="d-block w-100 h-50"

          src={Homebanner1}
          alt="First slide"
        />
        <Carousel.Caption className='bannertext'>
          {/* <h5 className='shadow'>Urban Style!!!!</h5> */}
          {/* <p>Only Limited stocks are available..... Don't miss the Chance</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Homebanner2}
          alt="Second slide"
        />
        <Carousel.Caption className='bannertext'>
          {/* <h5 className='shadow' >Western Style!!!!</h5> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Homebanner3}
          alt="Third slide"
        />
        <Carousel.Caption className='bannertext'>
          {/* <h5 className='shadow' >Ladies Summer sale beginss!!!!</h5> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBanner;
