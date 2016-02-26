import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

const styles = {
  logo: {
    position: 'fixed',
    top: '0px',
    marginTop: '-45px',
    height: '100px',
    left: '100px',
  },
};

const Brand = (props) => {
  return (
    <div>
      <LinkContainer to="/">
        <a>
          <img style={styles.logo} src="assets/grind-fade.png" alt="Grind Arts." width='auto' height='45px'/>
        </a>
      </LinkContainer>
    </div>
  );
};

export default Brand;