import React from 'react';

const necessities = [
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
]

const Necessities = (props) => {
  return (
    <div className='row'>
      <h2 className='text-center'>what we need.</h2>
      <p>Grind Arts Company has a big year ahead. We are looking forward to producing two kick-off projects on both coasts
      that showcase the range of work Grind Arts is capable of creating. </p>
      <hr />
      <br/>
      <div className="col-lg-5">
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
        Lulu 2016 Workshop cost break down:
        <ul>
          {necessities.map(n => <li>{n}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Necessities;