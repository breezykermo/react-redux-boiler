import React from 'react';
import Radium from 'radium';

const GrindWheel = (props) => {
  const styles = {
    rotated: {
      position: 'fixed',
      marginLeft: '-100px',
      width: '200px',
      bottom: '-100px',
      overflow: 'hidden',
      left: '50%',
      transition: '300ms ease-in-out all',
      WebkitTransform: 'rotate('+props.cssRotate+'deg)',
      MozTransform: 'rotate('+props.cssRotate+'deg)',
      msTransform: 'rotate('+props.cssRotate+'deg)',
      transform: 'rotate('+props.cssRotate+'deg)',
    },
  };

  return (
    <div>
      <img style={styles.rotated} src="assets/grind.png" alt=""/>
    </div>
  );
};

export default Radium(GrindWheel);