import React, {Component, PropTypes} from 'react';
import Parallax from 'react-parallax';

import { grayscale } from '../utils/grayscale';

import TOIntro from './TOIntro';
import TOFirst from './TOFirst';

const style = {
  height: '100%',
};

class Album extends Component {
  // componentDidMount() {
  //   const self = this;
  //   this.props.urls.map(url => {
  //     grayscale(url).then(result => {
  //       console.log(result);
  //     });
  //   });
  // };

  render() {
    const parallaxes = this.props.urls.map(url => {
      return (
        <Parallax bgImage={url} bgWidth={'100%'} bgHeight={'auto'} strength={200}>
          <TOIntro />
        </Parallax>
      );
    });

    return (
      <div style={style}>
        {parallaxes}
      </div>
    );
  };
};

export default Album;