import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import boysImage from '../images/boys.png';
import ladiesImage from '../images/ladies.webp';
import pg1 from '../images/pg1.jpg';
import pg2 from '../images/pg2.webp';
import pg3 from '../images/pg1.jpg';
import pg4 from '../images/pg3.webp';
import pg5 from '../images/pg5.webp';
import pglogo from '../images/pglogo.png';
import '../Home.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section id="home">
      <img src={pglogo} alt="Logo" className="homelogo" />
      <h1>Welcome to affordable living and enriching opportunities.</h1>
      <p className="location">Location: AECS Layout</p>
      <div className="pg-options">
        <div className="pg-option">
          <img src={ladiesImage} alt="Girls PG" />
          <h2>Girls PG</h2>
          <p className="price">Starts at ₹12000</p>
          <ul>
            <li><i className="fas fa-bed"></i> Fully furnished rooms</li>
            <li><i className="fas fa-shield-alt"></i> 24/7 security</li>
            <li><i className="fas fa-wifi"></i> Free Wi-Fi</li>
            <li><i className="fas fa-broom"></i> Housekeeping services</li>
            <li><i className="fas fa-utensils"></i> Nutritious meals included</li>
            <li><i className="fas fa-fan"></i> AC and non-AC rooms available</li>
            <li><i className="fas fa-dumbbell"></i> Recreational areas and gym access</li>
          </ul>
        </div>
        <div className="pg-option">
          <img src={boysImage} alt="Boys PG" />
          <h2>Boys PG</h2>
          <p className="price">Starts at ₹10000</p>
          <ul>
            <li><i className="fas fa-bed"></i> Spacious and comfortable rooms</li>
            <li><i className="fas fa-shield-alt"></i> 24/7 security</li>
            <li><i className="fas fa-wifi"></i> High-speed internet</li>
            <li><i className="fas fa-tshirt"></i> Laundry services</li>
            <li><i className="fas fa-utensils"></i> Healthy and delicious meals</li>
            <li><i className="fas fa-fan"></i> AC and non-AC rooms available</li>
            <li><i className="fas fa-tv"></i> Common room with TV and games</li>
          </ul>
        </div>
      </div>
      <section id="gallery">
        <h2>Gallery</h2>
        <Slider {...settings}>
          <div>
            <img src={ladiesImage} alt="PG Photo 1" />
          </div>
          <div>
            <img src={pg1} alt="PG Photo 2" />
          </div>
          <div>
            <img src={pg2} alt="PG Photo 3" />
          </div>
          <div>
            <img src={pg3} alt="PG Photo 4" />
          </div>
          <div>
            <img src={pg4} alt="PG Photo 5" />
          </div>
          <div>
            <img src={pg5} alt="PG Photo 6" />
          </div>
        </Slider>
      </section>
    </section>
  );
}

export default Home;
