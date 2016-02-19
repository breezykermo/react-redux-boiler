import React from 'react';
import Parallax from 'react-parallax';
import { Jumbotron } from 'react-bootstrap';

const fullStyle = {
  margin: '0 auto',
  width: '100%',
  height: '100%',
};

const ParallaxApp = (props) => {
  return (
    <div>
      <Parallax bgImage='./assets/mr-johannes-and-i.jpg' strength={100}>
        <div style={fullStyle}>
          <div>breeze</div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxApp;