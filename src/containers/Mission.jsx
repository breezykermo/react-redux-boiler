import React from 'react';
import Video from '../components/Video';

const styles = {
  centered: {
    position: 'fixed',
    top: '15%',
    height: '75%',
  },
}

const Mission = (props) => {
  return (
    <div className='row' style={styles.centered}>
      <div className="col-lg-5">
        <h2>Grind Arts Company helps audiences forge deeper connections with themselves
        and others by encouraging an exchange between emerging and seasoned artists to
        produce ground-breaking theatrical experiences.</h2>
        <br/>
        <hr/>
        <br/>
      </div>
      <div className="col-lg-5 col-lg-offset-1">
        <br />
        <br />
        <hr />
        <br />
        <Video title='theatre. at. its. limits.' url='https://www.youtube.com/embed/Dch9zECruN0' />
      </div>
    </div>
  );
};

/* <p style={styles.paragraph}>Grind Arts Company is a Princeton-bred theater company dedicated to fostering
      a home for young artists who are interested in reevaluating how audiences interact
      with theater. Under the Grind umbrella, prodigies of theater, film, dance, and music
      combine their talents to create unique theatrical experiences that challenge the
      conventions of the genre. The work ranges from devised, multi-medium theater
      projects that break the mold of the book musical, to reimagined revivals that present
      beloved plays and musicals in creative new ways, to innovative films that blur the
      line between theater and video. Through its unique structure, Grind Arts Company
      will empower emerging artists to break convention and advance the art of storytelling.</p> */

export default Mission;