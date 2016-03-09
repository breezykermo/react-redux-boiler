import React from 'react';

const styles = {
  profile: {
    padding: '20px',
  },
};

const Member = (props) => {

  const deets = (
    <div className="col-lg-6" style={styles.profile}>
      <h3>{props.name} <small>{props.role}</small></h3>
      <h4>{props.spec}</h4>
      <hr/>
      <p>{props.bio}</p>
    </div>
  );

  const pic = (
    <div className="col-lg-6 text-center" style={styles.profile}>
      <img src={props.img} alt={props.name} height={300} width='auto' />
    </div>
  );

  // nb: work around to alternate orientation of pic and deets
  return (
    <div className='row'>
      {props.index%2 === 0 ? deets : ''}
      {pic}
      {props.index%2 !== 0 ? deets : ''}
    </div>
  );
};

export default Member;