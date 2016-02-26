import React from 'react';
import Radium from 'radium';

const styles = {
  arrow: {
    position: 'fixed',
    height: '100px',
    marginTop: '-50px',
    top: '50%',
    ':hover': {
      cursor: 'pointer',
    },
  },
  left: {
    left: '10px',
  },
  right: {
    right: '10px',
  },
};

const Arrows = (props) => {
  // NB: Radium requires keys for all elements
  return (
    <div>
      <img key={1} style={[styles.arrow, styles.left]} src="assets/grind.png" alt="left-arrow"/>
      <img key={2} style={[styles.arrow, styles.right]} src="assets/grind.png" alt="right-arrow"/>
    </div>
  );
};

export default Radium(Arrows);