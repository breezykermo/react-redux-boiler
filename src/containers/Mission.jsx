import React from 'react';

const styles = {
  mission: {
    fontFamily: 'monospace',
    fontSize: 28,
  },
  paragraph: {
    fontSize: 20,
  },
}

const Mission = (props) => {
  return (
    <div className='text-center'>
      <h2 style={styles.mission}>Grind Arts Company helps audiences forge deeper connections with themselves
      and others by encouraging an exchange between emerging and seasoned artists to
      produce ground-breaking theatrical experiences.</h2>
      <br/>
      <hr/>
      <br/>
      <p style={styles.paragraph}>Grind Arts Company is a Princeton-bred theater company dedicated to fostering
      a home for young artists who are interested in reevaluating how audiences interact
      with theater. Under the Grind umbrella, prodigies of theater, film, dance, and music
      combine their talents to create unique theatrical experiences that challenge the
      conventions of the genre. The work ranges from devised, multi-medium theater
      projects that break the mold of the book musical, to reimagined revivals that present
      beloved plays and musicals in creative new ways, to innovative films that blur the
      line between theater and video. Through its unique structure, Grind Arts Company
      will empower emerging artists to break convention and advance the art of storytelling.</p>
    </div>
  );
};

export default Mission;