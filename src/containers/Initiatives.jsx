import React from 'react';
import Slider from 'react-slick';

const images = [
  'assets/grind-fade.png',
  'assets/grind.png',
  'assets/grind-orange.png',
  'assets/brand.png',
];
const styles = {
  intro: {
    textAlign: 'center',
  },
  panel: {
    height: '250px',
  },
};

const sliderSettings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: '10000',
  arrows: true,
  draggable: true,
}

const Initiatives = React.createClass({
  render() {
    return (
      <div>
        <h3 style={styles.intro}>In this industry, the expectation is that emerging artists are passed over for someone more established.
        The perpetuation of this system makes it nearly impossible for emerging creatives to break into the business.
        Grind Arts hopes to provide a way in. The Young Artists Initiative and Grind Arts U will inspire talented minds
        to pursue innovation with full force, creating a self-sustaining network of new artists begetting new work,
        which will feed their individual careers as well as the Grind Arts cannon. </h3>
        <br/>
        <hr/>
        <br/>
        <Slider {...sliderSettings}>
          <div style={styles.panel}>
            <h2>Young Arts Initiative</h2>
            <p>Grind Arts Company is a resource for young, motivated artists who lack the resources to take their promising
            work to the next level. Through the staging low budget productions of new work and the hosting of readings,
            workshops, and group work sessions, we will draw the most exciting and uninhibited work out of our generation
            of artists. Projects and artists that inspire us may also receive logistical expertise such as the necessary forms,
            resources for equipment and space, fundraising guidance, and contact into our network of talent and mentors.</p>
            <p>Offering resources to young, hungry, innovative artists will help us grow and diversify our membership, adding
            fresh energy to our main stage productions and keeping us on the crest of this new wave of theater. We hope to
            disrupt a cycle that forces aspiring talent into low-level positions in which they lack the agency to discover their
            most effective means of storytelling, which has contributed to the lack of texture in commercial theater.</p>
          </div>
          <div style={styles.panel}>
            <h2>Grind Arts U</h2>
            <p>Many students of higher educational facilities are deterred from pursuing the arts past college. Grind Arts
            Company is currently fulfilling the need for artists on Princeton campus to have a space in which they can hone
            their craft with the focus and intensity that comes with the intention of pursuing a career in the field. Grind Arts
            Company would like to foster that ambition beyond Princeton University, inspiring the most motivated student
            artists across the country to create their best work, cultivate their unique style, and understand how to be the
            CEO of their own careers in the arts.</p>
            <p>Grind Arts U will offer college level students access to professional experience on Grind Arts productions,
            ranging from summer assistantships, internships, and equity-point opportunities. This will help outstanding
            student artists forge connections and build the confidence necessary to embark on a successful career in theater.</p>
          </div>
          <div style={styles.panel}>
            <h2>Grind House</h2>
            <p>Grind Arts is bolstering collaboration between great minds through its social element. Creative conversation
            between varied, passionate artists and patrons is what leads to forward momentum in the art world. We find it
            imperative to our success that we foster relationships between a variety of artists by getting them into the same
            room to trade insight, skills, and eventually create new work together. In the beginning, Grind House will be a
            platform that stimulates conversation, connection, and helps artists reach Grind-supported meetings such as
            Artists Anonymous, a support group for artists who want to make waves in the industry. Grind House will host
            events, panel discussions, and support socialization between theater-makers who are interested in experimenting
            with new approaches. Down the road, Grind House will be a physical space for the Grind Membership to both
            mingle and work. We envision a lounge connected to our theater that offers beverages and relaxation, but more
            importantly supports the creation of new theater with access to studio space, drawing and writing supplies, printing
            facilities, and other provisions that might encourage the flow of ideas</p>
          </div>
        </Slider>
      </div>
    );
  }
});

export default Initiatives;
