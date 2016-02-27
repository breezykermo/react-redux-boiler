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
    title: {
      width: '100%',
      textAlign: 'center',
      position: 'fixed',
      bottom: '75px',
      transition: 'opacity .25s ease-in-out',
    }
  };

  return (
    <div>
      <h3 style={styles.title}>{props.labels[props.currentTitleIndex]}</h3>
      <img style={styles.rotated} src="assets/grind-orange.png" alt=""/>
    </div>
  );
};

export default Radium(GrindWheel);