import React from 'react';
import Video from '../components/Video';

const Nextstep = (props) => {
  return (
    <div className='row'>
      <h2 className='text-center'>the next step for Grind Arts...</h2>
      <hr />
      <br/>
      <div className="col-lg-5">
        <p>There’s a new audience emerging in New York that doesn’t want to “see shows” anymore. They want to engage
        with theater in new, creative ways. Productions like Sleep No More, Fuerza Bruta, and Deaf West’s revival of Spring
        Awakening have loyal, enthusiastic audiences because you don’t just watch these shows: you experience them. The
        Grind Arts Membership is continuing with our quest to create innovative, unexpected theatrical experiences for the
        professional sphere by tapping into our members’ combined histories on Broadway, in film, and at Princeton. We
        are building a community of young, trailblazing artists to create new work to share with audiences across the country.</p>
        <p>Continuing our original mission, the three major bodies of work that Grind will produce are reconceived classics,
        new devised work, and projects that merge the worlds of theater and film. Our productions will take place in both
        traditional theaters and found spaces such as warehouses, brownstones, and public parks. Furthermore, we are
        not exclusive to New York. Our core team is composed of artists who work in both New York City and Los Angeles,
        which enables us to curate relationships with theaters out west and establish a bicoastal presence. For example,
        one of our premiere productions will be an immersive reimagining of Lulu, directed by Michael Arden, which weaves
        through a Los Angeles art gallery and utilizes different forms of dance and aerial work to investigate the infamous femme
        fatale.  This new production, along with a new concept film, will help us raise funds to support a long-lasting theater company.</p>
        <p>The key to longevity is a dedicated, enthusiastic community. The Grind Arts Membership is an unpretentious group
        of artists and theater lovers who hope to nourish and elevate emerging talent in order to cultivate new approaches.
        Our goal is to foster a symbiotic relationship between this core membership of distinguished professionals and the
        aspiring artists that will fuel the next generation of theater.  The philanthropic initiatives that support this exchange
        are the Young Artists Initiative and Grind Arts U, which help emerging artists cultivate new work and establish
        mentor-mentee relationships in a network-dependent industry. As Grind evolves, we aim to eventually own a fully
        transformable warehouse-type theater space that could be reconfigured to accommodate the vast variety of artistic
        contributions we are interested in producing. Attached to our theater space will be Grind House, a physical space
        where the Grind Membership mingles and collaborates, sparking creative conversation between distinguished
        professionals, emerging artists, and our dedicated patrons to inspire exciting new work.</p>
        <br />
        <hr />
      </div>
      <div className="col-lg-5 col-lg-offset-1">
        <Video title='theatre. at. its. limits.' url='https://www.youtube.com/embed/Dch9zECruN0' />
      </div>
    </div>
  );
};

export default Nextstep;