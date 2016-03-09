import React from 'react';
import Coverflow from 'react-coverflow';

const styles = {
  container: {
    paddingTop: '44px',
  },
};

const images = [
  {
    src: 'assets/graham.jpg',
    url: 'http://www.lachlankermode.com',
    alt: 'Sweeney Todd',
  },
  {
    src: 'assets/HERO.jpg',
    url: 'http://www.lachlankermode.com',
    alt: 'HERO - An Aerial Spectacular',
  },
  {
    src: 'assets/L5Y.jpg',
    url: 'http://www.lachlankermode.com',
    alt: 'Last Five Years',
  },
  {
    src: 'assets/graham2.jpg',
    url: 'http://www.lachlankermode.com',
    alt: 'Macbeth',
  },
  {
    src: 'assets/graham3.jpg',
    url: 'http://www.lachlankermode.com',
    alt: 'Color + Light',
  },
];

const Past = (props) => {
  return (
    <div style={styles.container}>
      <hr/>
      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={true}>
        {images.map((i, k) => <img src={i.src} key={k} url={i.url} alt={i.alt} width='auto' height={300} />)}
      </Coverflow>
      <hr/>
    </div>
  );
};

/*<h2>Sweeney Todd: The Demon Barber of Fleet Street</h2>
      <p>Grind Arts Company invigorated the Princeton University theater scene with their inaugural
      production of Sweeney Todd, which took place in the Jadwin Gym loading dock: an outdoor
      recycling plant on the outskirts of campus. Hoards of students endured the elements to see this
      exciting reimagining that used the setting of a meat-processing plant to paint a twisted image
      of Todd as a proletariat hero. The production was funded by a kickstarter campaign, and went
      on to win the Fred Fox Award and the Award for Outstanding Theater by a Junior.</p>

      <h2>The Last Five Years </h2>
      <p>Normally a two-person production, director and choreographer Eamon Foley expanded the
      cast to also include two dancers to explore the famous score from a choreographic standpoint.
      The production employed shadow play on a set composed of white screens to cast images of the
      more beautiful, idealized dancer versions of Jamie and Cathy with whom the live version of each
      character interacted and fell in love with. The visual artistry not only captured the swelling emotion
      that is love, but also questioned whether we ever truly see the people we fall madly in love with or
      if we are only able to see the idealized versions created in our own minds. The production travelled
        between multiple spaces throughout its run and starred Tony Award winner Trent Kowalik and
      theater and film actor Graham Phillips.</p>

      <h2>Hero — A New Work</h2>
      <p>Using interviews conducted with Vietnam War veterans and the music of UK rock sensation Muse,
      Eamon Foley directed, choreographed, and wrote an original aerial-dance, rock musical about a boy’s
      experience being drafted into the Vietnam War. Hero was hailed by the Daily Princetonian as “the best
      performance the University will see in the next decade – if not longer” and was awarded the Francis
      LeMoyne Page Theater Award for Outstanding Achievement in the Creative Art, the Outstanding Senior
      Thesis Award and the Santos-Dumont Prize for Innovation. The piece is undergoing development for
      future productions.</p>

      <h2>Macbeth</h2>
      <p>Director Cat Andre staged her personal adaption of the Scottish Play this past fall in the rotunda in
      Chancellor Green Library. This 360-degree production broke down the expectations attached to a staged
      reading, wreaking mayhem in the most academic, traditional, and refined of Princeton spaces.</p>

      <h2>Color + Light – A Short Film</h2>
      <p>Grind Arts’ first film in a series that reimagines beloved musical theater numbers outside of the context
      of their original plot, bringing new meaning to the lyrics and adding choreography to songs that have never
      been danced to. Derived from the song “Color and Light” from Sondheim’s Sunday in the Park with George,
      this film uses contemporary ballet as a means of entering the artist’s headspace and bringing new insight
      into the character of George. Each color is personified as a dancer on pointe, allowing George to share a
      human connection with the painting that draws him away from his girlfriend Dot who, in this telling, is a ballet
      dancer lacking the fetishized ballet body. See the film on
      <a href='http://www.playbill.com/news/article/pigments-come-to-life-in-a-film-ballet-set-to-sondheims-color-and-light-383855'>
        Playbill</a>.</p>*/

export default Past;