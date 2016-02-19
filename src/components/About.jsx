import React from 'react';
import Parallax from 'react-parallax';

const aboutStyle = {
  height: '100%',
};

const About = (props) => {
  return (
    <div style={aboutStyle}>
      <Parallax bgImage='../assets/mr-johannes-and-i.jpg' strength={400}>
        <br />
        <h1>This is Mr. Johannes and I. </h1>
        <br/>
      </Parallax>
    </div>
  );
};

export default About;