import React from 'react';

const styles = {
  bottomDiv: {
    position: 'absolute',
    bottom: '0px',
    marginBottom: 50,
  },
};

const CogAnimation = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='loader'>
        <div className='loader_overlay'></div>
        <div className='loader_cogs'>
          <div className='loader_cogs__top'>
            <div className='top_part'></div>
            <div className='top_part'></div>
            <div className='top_part'></div>
            <div className='top_hole'></div>
          </div>
          <div className='loader_cogs__left'>
            <div className='left_part'></div>
            <div className='left_part'></div>
            <div className='left_part'></div>
            <div className='left_hole'></div>
          </div>
          <div className='loader_cogs__bottom'>
            <div className='bottom_part'></div>
            <div className='bottom_part'></div>
            <div className='bottom_part'></div>
            <div className='bottom_hole'></div>
          </div>
          <button className='btn btn-default'>Enter here</button>
        </div>
        <h1 className='cogsh1'>Grind Arts Co.</h1>
        <h2 className='cogsh2'>theatre. at. its. limits.</h2>
      </div>

      <p style={styles.bottomDiv}> NB: example animation, just click on the tabs above 4 now.</p>
    </div>
  );
};

export default CogAnimation;