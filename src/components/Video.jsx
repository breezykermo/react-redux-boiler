import React, {
  PropTypes,
} from 'react';

const Video = (props) => {
  return (
    <div>
      <iframe width="500" height="281" src={props.url} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />
      <h3 className='text-center'>{props.title}</h3>
    </div>
  );
};

Video.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default Video;