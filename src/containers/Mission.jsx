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
        <h4>Grind Arts Company is a Princeton-bred theater company dedicated to contemporizing the
        way audiences interact with theater. Under the Grind umbrella, extraordinary talents in theater,
        film, dance, and music collaborate to create bold, unique theatrical experiences that prove
        theater’s boundless nature. The work ranges from devised, multi-medium theater projects, to
        reimagined revivals, to innovative films that blur the line between theater and video. </h4>
        <br/>
        <hr/>
        <br/>
      </div>
      <div className="col-lg-6">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <h5>Through its unique structure, Grind Arts Company will empower emerging artists to
        break convention and advance the art of storytelling, providing audiences with
        unforgettable experiences that stimulate connection, introspection, and inspiration. </h5>
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