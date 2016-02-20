import React from 'react';
import Album from '../components/Album';

let LCondomsUrl = 'https://thisisl.com';
const imagePaths = [
  '/themes/l/resources/images/l-logo.png',
  '/themes/l/resources/images/LOVENATURALLY.jpg',
  '/themes/l/resources/images/livefreely.png',
  '/themes/l/resources/images/natural-cvs-and-amazon-4.png',
  '/themes/l/resources/images/lust-fully.png',
];

const urls = imagePaths.map(p => LCondomsUrl + p);

const About = (props) => {
  return (
    <div>
      <Album urls={urls} />
    </div>
  );
};

export default About;