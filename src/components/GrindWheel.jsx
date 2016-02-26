import React from 'react';
import Rotation from 'react-rotation';
import Radium from 'radium';

const styles = {
  rotated: {
    position: 'fixed',
    marginLeft: '-100px',
    width: '200px',
    bottom: '-100px',
    overflow: 'hidden',
    left: '50%',
    transition: '300ms ease-in-out all',
    ':hover': {
      transition: '300ms ease-in-out all',
      WebkitTransform: 'rotate(40deg)',
      MozTransform: 'rotate(40deg)',
      msTransform: 'rotate(40deg)',
      transform: 'rotate(40deg)',
    }
  },
};

const GrindWheel = (props) => {
  const switching = (
    <Rotation>
      <img src="assets/brand.png" alt="Grind Logo"/>
      <img src="assets/GrindLogo.jpg" alt="Grind Logo"/>
    </Rotation>
  );

  return (
    <div>
      <img style={styles.rotated} src="assets/grind.png" alt=""/>
    </div>
  );
};

export default Radium(GrindWheel);