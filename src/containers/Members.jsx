import React from 'react';
import { connect } from 'react-redux';
import Member from '../components/Member';

const Members = (props) => {
  return (
    <div>
      <br/>
      {props.profiles.map((profile, key) => <Member key={key} index={key} {...profile} />)}
    </div>
  );
};

const container = connect(state => state.members)(Members);
export default container;