const initialState = {
  profiles: [
    {
      name: 'Eamon Foley',
      role: 'Founder, Artistic Director',
      spec: 'Specializes in Direction, Choreography, and Writing.',
      bio: 'Broadway credits include Gypsy, Assassins, How The Grinch Stole Christmas, 13: The Musical, and Everyday Rapture.\
        He recently assistant directed John Rando’s Annie Get Your Gun, will be assisting Jack O’Brien on his upcoming Broadway\
        production, and has collaborations scheduled for several productions with Michael Arden (Spring Awakening revival). Eamon\
        created Grind Arts Company to foster a community in which artists can take risks to discover new, exciting forms of expression\
        within the paradox that is theater. He graduated Princeton University with a degree in Anthropology and a Certificate in Theater.',
      img: 'assets/grind-orange.png'
    },
    {
      name: 'Graham Phillips',
      role: 'Co-Founder',
      spec: 'Specializes in Performance, Cinematography/Film Direction, and Dramaturgy.',
      bio: 'TV/Film credits include Zach on CBS’s The Good Wife, White Collar, Goats opposite David Duchovny, Staten Island Summer,\
        and upcoming XOXO. He starred in 13: The Musical on Broadway and played the title role in The Little Prince at the Met, during the\
        auditions for which he and Eamon Foley met before going on to work together on 13. Grind Arts credits include Anthony in Sweeney\
        Todd, Jamie in The Last Five Years, and director of cinematography and editing for Color + Light. Graham attended Princeton University\
        where he majored in History.',
      img: 'assets/grind-orange.png'
    },
    {
      name: 'Michael Arden',
      role: '',
      spec: 'Specializes in Directing, Performing, and Devising Immersive Theater.',
      bio: 'Michael made his Broadway debut as Tom Sawyer in Big River while studying Drama at Julliard. He went on to star in Twyla Tharp’s\
        \'The Time’s They Are A Changing\' on Broadway, Bare and Swimming in the Shallows off-Broadway, and tour Europe opposite Barbara Streisand.\
        Other starring credits include Pippin, Ace, Aspects of Love, Songs for a New World, Harold and Maude, and A Winter’s Tale. Michael recently\
        made his Broadway directing debut with Deaf West’s ground-breaking production of Spring Awakening, after writing and directing an adaption\
        of La Ronde.',
      img: 'assets/grind-orange.png'
    },
    {
      name: 'Katie Birenboim',
      role: '',
      spec: 'Specializes in Performance, Writing and Dramaturgy.',
      bio: 'Katie has numerous regional performance credits to her name, most recently starring as Mary Poppins at the Berkshire Theatre Festival.\
        She has trained at Interlochen Arts Camp, the University of Michigan, and Manhattan School of Music (precollege vocal performance degree, 2012).\
        She is also an accomplished writer, having written a one-act play which was produced as part of a performance art piece entitled “Earshot” last May in\
        New York City.  She is currently reimagining and rewriting the beloved musicals Annie Get Your Gun and Gypsy to create a performance piece which\
        combines the two shows and thus explores women’s roles in Golden Age musical theatre. She graduated Princeton University with a BA in English\
        and a Certificate in Theater.',
      img: 'assets/grind-orange.png'
    },
    {
      name: 'Allie Trimm',
      role: '',
      spec: 'Specializes in Performance and Devising of Theater/Concerts.',
      bio: 'Broadway credits include Patrice in 13: The Musical and Kim in Bye Bye Birdie. TV/Film credits include 30 Rock, Private Practice, and Prom.\
        She recently played Hannah Campbell in the regional production of Allegiance before making her concert debuts at Lincoln Center and Studio 54 Below.\
        Allie graduated Stanford University with a degree in Psychology.',
      img: 'assets/grind-orange.png'
    },
    {
      name: 'Melanie (dj pennywild) Wildman',
      role: '',
      spec: 'Specializes in Curating/Producing Music, Choreography, and Dance',
      bio: 'Theater Credits include the international tour of West Side Story before changing career paths towards music production. Melanie was a guest\
        choreographer for BodyHype Dance Company, a Princeton University dance group, and continues to choreograph and direct her own dance concept\
        films. She now DJs and dances for Todrick Hall’s tour: Todlerz Ball.',
      img: 'assets/grind-orange.png'
    },
    {
      name: 'Trent Kowalik ',
      role: '',
      spec: 'Specializes in Dance and Music Production',
      bio: 'Trent won the Tony Award for Best Actor in a Musical for his portrayal of the title role in Billy Elliot. Trent dances and choreographs with BodyHype\
        Dance Company, often to music that he creates himself. He is an internationally recognized Irish step and tap dancer, currently dancing with Darrah Carr’s\
        company ModERIN. Trent danced the role of Jamie in The Last Five Years opposite Graham Phillips, and played Skinnard in the premiere of Hero.\
        Trent graduated Princeton University with a BA in Neuroscience.',
      img: 'assets/grind-orange.png'
    },
  ],
};

export const members = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};