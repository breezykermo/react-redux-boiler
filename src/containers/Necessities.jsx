import React from 'react';

const luluNecessities = [
  'Actor/Dancer salaries……………..$16,000',
  'Designer salaries…………………….. $8,000',
  'Production team……………………... $5,000',
  'Stage management salaries……… $3,500',
  '',
  'AV equipment rental……………….. $2,500',
  'Lighting equipment rental……….. $3,000',
  'Aerial equipment rental…………... $3,000',
  'Projector rental………………………. $1,500',
  'Set + Build………………………………. $5,000',
  'Costumes………………………………… $1,500',
  'Hair/Makeup…………………………....... $250',
  'Props…………………………………………. $750',
  '_________________________________________________',
  'Total Workshop……………………....$50,000',
];

const ohseanNecessities = [
  'Oh Sean concept film cost breakdown:',
  'Actor/Dancer salaries……………... $3,400',
  'Studio 54 Lighting Operator….......... $200',
  'Musicians (recording & filming)….. $800',
  'Grip (2)……………………………………… $400',
  '',
  'Rehearsal space………………………….. $250',
  'Location rental…………………………… $400',
  'Food for crew…………………………… $250',
  'Recording costs………………………. $1,200',
  'Costumes/Makeup/Props………….. $100',
  '______________________________________________',
  'Total film……………………………..… $8,000',
];

const styles = {
  row: {
    padding: '20px',
  },
};

const Necessities = (props) => {
  return (
    <div>
      <div className="row" style={styles.row}>
        <h2 className='text-center'>what we need.</h2>
        <p>Grind Arts Company has a big year ahead. We are looking forward to producing two kick-off projects on both coasts
        that showcase the range of work Grind Arts is capable of creating. </p>
        <hr />
        <br/>
        <div className="col-lg-5 col-lg-offset-1">
          <p>Our premiere immersive theatrical endeavor will be a raucous reimagining of the femme fatale classic Lulu, helmed
          by esteemed director Michael Arden (Broadway revival of Spring Awakening). Taking place throughout a Los Angeles
          art gallery (What’s the Art Gallery?), Arden and his team of designers, choreographers, and multi-disciplined performers
          will devise an energetic new adaption of Lulu that leads its audience through the iconic story with scene, dance, and
          projection. The mode should encourage us to reevaluate the impossible paradoxes implicit in womanhood, as well as
          breath new life into a classic that has never been more relevant. This upcoming production will be a mid-budget donors
          workshop which will give way to a more involved, $200,000 production in 2017. Donors will gain access to a new piece
          of theater created by an accomplished team of artists at the ground level of its development.</p>
        </div>
        <div className="col-lg-5 col-lg-offset-1">
          <em>Lulu</em> 2016 Workshop cost break down:
          <ul>
            {luluNecessities.map(n => <li>{n}</li>)}
          </ul>
        </div>
      </div>
      <div className="row" style={styles.row}>
        <div className="col-lg-5 col-lg-offset-1">
          <em>Oh Sean</em> concept film cost breakdown:
          <ul>
            {ohseanNecessities.map(n => <li>{n}</li>)}
          </ul>
        </div>
        <div className="col-lg-5 col-lg-offset-1">
          <p>On the other side of the country, film-on-dance team Eamon Foley and Graham Phillips are collaborating with
          renowned composer Todd Almond (Kansas City Choir Boy starring Courtney Love) to create a concept film that brings
          his soaring hit Oh, Sean to life. Developing on their last film, Color + Light, Phillips and Foley have dreamt up a site-specific
          movement piece that travels through the entirety of Studio 54 Below culminating in a visceral exploration of why we cling
          to past love so desperately.</p>
        </div>
        <br /><br /><br />
      </div>
      <div className="col-lg-12">
        <p>Grind Arts Company will host a launch event on each coast to premiere the new work and introduce the public to our
        brand of theater. Beyond Lulu and Oh, Sean, Grind is also building an infrastructure meant to last, which entails hiring
        designers, accountants, and a website manager to help us be as cost-effective and accessible as possible. To allow
        these exciting projects to see the light of day and help Grind Arts Company run at full speed, we are working towards
        raising $75,000. </p>
      </div>
    </div>
  );
};

export default Necessities;