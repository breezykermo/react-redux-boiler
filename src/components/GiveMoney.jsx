import React from 'react';
import Radium from 'radium';

const styles = {
  container: {
    position: 'fixed',
    right: '25px',
    top: '10px',
    padding: '5px',
    marginTop: 0,
    backgroundColor: 'white',
    borderBottom: '1px solid #DFDFDF',
    transition: 'all 0.3s ease-in',
    ':hover': {
      transition: 'all 0.3s ease-out',
      cursor: 'pointer',
      backgroundColor: '#DFDFDF',
      borderWidth: '0px',
      borderRadius: '1em',
    }
  },
  title: {
    margin: '10px',
    color: '#F98C00',
  },
};

const GiveMoney = (props) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>donate</h3>
    </div>
  );
};

export default Radium(GiveMoney);