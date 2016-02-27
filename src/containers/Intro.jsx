import React from 'react';
import Video from '../components/Video';

/* <p>Grind Arts’ formation has initiated a theatrical renascence on Princeton Campus, which represents a sample of the impact we are
      striving to make on the theater community as a whole. Since our birth, we’ve crowd-sourced funding to produce innovative productions
      of The Last Five Years, Macbeth, and John and Jen which have each acted as a bridge between the theater and other mediums of
      storytelling. We also created a professional short film entitled Color + Light, a choreographic take on the Sondheim song of the same
      name from Sunday in the Park with George, which used dancers on pointe to personify the titillating experience that is making art.
      The piece was recently featured on Playbill.com. The founders, Eamon Foley and Graham Phillips, have continued their work in the
      Broadway and motion picture spheres, establishing themselves as professional directors and choreographers to expand the Grind Arts
      network. Michael Arden, the revolutionary director of the half-deaf Broadway revival of Spring Awakening has recently joined the team
      and is collaborating with the founding artists to devise new works and reimagine beloved classics that will raise money for our first season.
      Finally, Eamon Foley has written, directed, and choreographed an award winning new aerial-dance rock musical entitled Hero that
      explores a soldier’s experience fighting the Vietnam War. The piece is being further developed for a professional production.</p> */

const Intro = (props) => {
  return (
    <div className='row'>
      <h2 className='text-center'>it started on a loading dock...</h2>
      <hr />
      <br/>
      <div className="col-lg-5">
        <p>In April 2014 Grind Arts Company premiered with a site-specific production of Sweeney Todd that took place in the derelict,
        industrial Jadwin Gym loading dock on the outskirts of Princeton University campus. Our immersive, conceptualized reimagining
        sparked the interest of a normally ambivalent campus and sent students flocking to our loading dock, creating a temporary community
        of diverse students who shared a physical and emotional experience in the unlikeliest of places. The success of the production 
        proved our initial theory, which was the impetus for our founding: When you take a risk, push a boundary, and do something new,
        you initiate a movement in which the public wants to take part, forcing them to lean into the work and engage on a visceral level.</p>
      </div>
      <div className="col-lg-5 col-lg-offset-1">
        <Video url='https://player.vimeo.com/video/146848970' title="director's reel" />
      </div>
    </div>
  );
};

export default Intro;