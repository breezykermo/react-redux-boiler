import React from 'react';
import Slider from 'react-slick';

const images = [
  'assets/grind-fade.png',
  'assets/grind.png',
  'assets/grind-orange.png',
  'assets/brand.png',
];
const styles = {
  panel: {
    height: '500px',
    textAlign: 'center',
  },
};

const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  draggable: true,
}

const Initiatives = React.createClass({
  render() {
    return (
      <Slider {...sliderSettings}>
        <div style={styles.panel}><h4>Yo you</h4></div>
        <div style={styles.panel}><h4>Yo you</h4></div>
        <div style={styles.panel}><h4>Yo you</h4></div>
        <div style={styles.panel}><h4>Yo you</h4></div>
        <div style={styles.panel}><h4>Yo you</h4></div>
        <div style={styles.panel}><h4>Yo you</h4></div>
      </Slider>
    );
  }
});

export default Initiatives;
