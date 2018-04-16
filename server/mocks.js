const BOOKS = [
  {
    id: 1,
    title: "The First Days",
    series: "(As the World Dies #1)",
    description: `
     Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her.  That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son.

      Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have become more than just friends and allies—they are bonded as tightly as any two people who have been to war together.

     During their cross-Texas odyssey to find and rescue Jenni’s oldest son, Jenni discovers the joy of watching a zombie’s head explode when she shoots its brains out. Katie learns that she’s a terrific tactician—and a pretty good shot.

     A chance encounter puts them on the road to an isolated, fortified town, besieged by zombies, where fewer than one hundred people cling to the shreds of civilization.

      It looks like the end of the world. But Katie and Jenni and many others will do whatever they have to to stay alive. Run, fight, pick each other up when they stumble, fall in love…anything is possible at the end of the world.
    `,
    author: "Rhiannon Frater",
    published: "July 5th 2011",
    publisher: "Tor Books",
    coverUrl: "1-min.jpg",
    price: 12
  },
  {
    id: 2,
    title: "Feed",
    series: "(Newsflesh #1)",
    description: `
      The year was 2014. We had cured cancer. We had beaten the common cold. But in doing so we created something new, something terrible that no one could stop.

      The infection spread, virus blocks taking over bodies and minds with one, unstoppable command: FEED. Now, twenty years after the Rising, bloggers Georgia and Shaun Mason are on the trail of the biggest story of their lives—the dark conspiracy behind the infected.

      The truth will get out, even if it kills them.
    `,
    author: "Mira Grant",
    published: "May 1st 2010",
    publisher: "Orbit",
    coverUrl: "2-min.jpg",
    price: 10
  },
  {
    id: 3,
    title: "Rot & Ruin",
    series: "(Rot & Ruin #1)",
    description: `
      In the zombie-infested, post-apocalyptic America where Benny Imura lives, every teenager must find a job by the time they turn fifteen or get their rations cut in half. Benny doesn't want to apprentice as a zombie hunter with his boring older brother Tom, but he has no choice. He expects a tedious job whacking zoms for cash, but what he gets is a vocation that will teach him what it means to be human.
    `,
    author: "Jonathan Maberry",
    published: "September 14th 2010",
    publisher: "Simon & Schuster Books For Young Readers",
    coverUrl: "3-min.jpg",
    price: 20
  },
  {
    id: 4,
    title: "The Namesake",
    description: `
     Jhumpa Lahiri's Interpreter of Maladies established this young writer as one the most brilliant of her generation. Her stories are one of the very few debut works -- and only a handful of collections -- to have won the Pulitzer Prize for fiction. Among the many other awards and honors it received were the New Yorker Debut of the Year award, the PEN/Hemingway Award, and the highest critical praise for its grace, acuity, and compassion in detailing lives transported from India to America.

     In The Namesake, Lahiri enriches the themes that made her collection an international bestseller: the immigrant experience, the clash of cultures, the conflicts of assimilation, and, most poignantly, the tangled ties between generations. Here again Lahiri displays her deft touch for the perfect detail — the fleeting moment, the turn of phrase — that opens whole worlds of emotion.

      The Namesake takes the Ganguli family from their tradition-bound life in Calcutta through their fraught transformation into Americans. On the heels of their arranged wedding, Ashoke and Ashima Ganguli settle together in Cambridge, Massachusetts. An engineer by training, Ashoke adapts far less warily than his wife, who resists all things American and pines for her family. When their son is born, the task of naming him betrays the vexed results of bringing old ways to the new world. Named for a Russian writer by his Indian parents in memory of a catastrophe years before, Gogol Ganguli knows only that he suffers the burden of his heritage as well as his odd, antic name.

      Lahiri brings great empathy to Gogol as he stumbles along the first-generation path, strewn with conflicting loyalties, comic detours, and wrenching love affairs. With penetrating insight, she reveals not only the defining power of the names and expectations bestowed upon us by our parents, but also the means by which we slowly, sometimes painfully, come to define ourselves.
    `,
    author: "Jhumpa Lahiri",
    published: "September 1st 2004",
    publisher: "Mariner Books",
    coverUrl: "4-min.jpg",
    price: 10
  },
  {
    id: 5,
    title: "Life of Pi",
    description: `
      Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger named Richard Parker.
    `,
    author: "Yann Martel",
    published: "August 29th 2006",
    publisher: "Seal Books",
    coverUrl: "5-min.jpg",
    price: 30
  },
  {
    id: 6,
    title: "The Curious Incident of the Dog in the Night-Time",
    description: `
      Christopher John Francis Boone knows all the countries of the world and their capitals and every prime number up to 7,057. He relates well to animals but has no understanding of human emotions. He cannot stand to be touched. And he detests the color yellow.

      Although gifted with a superbly logical brain, for fifteen-year-old Christopher everyday interactions and admonishments have little meaning. He lives on patterns, rules, and a diagram kept in his pocket. Then one day, a neighbor's dog, Wellington, is killed and his carefully constructive universe is threatened. Christopher sets out to solve the murder in the style of his favourite (logical) detective, Sherlock Holmes. What follows makes for a novel that is funny, poignant and fascinating in its portrayal of a person whose curse and blessing are a mind that perceives the world entirely literally.
    `,
    author: "Mark Haddon",
    published: "May 18th 2004",
    publisher: "Vintage",
    coverUrl: "6-min.jpg",
    price: 24
  },
  {
    id: 7,
    title: "A Suitable Boy",
    description: `
      Vikram Seth's novel is, at its core, a love story: Lata and her mother, Mrs. Rupa Mehra, are both trying to find -- through love or through exacting maternal appraisal -- a suitable boy for Lata to marry. Set in the early 1950s, in an India newly independent and struggling through a time of crisis, A Suitable Boy takes us into the richly imagined world of four large extended families and spins a compulsively readable tale of their lives and loves. A sweeping panoramic portrait of a complex, multi ethnic society in flux, A Suitable Boy remains the story of ordinary people caught up in a web of love and ambition, humor and sadness, prejudice and reconciliation, the most delicate social etiquette and the most appalling violence.
    `,
    author: "Vikram Seth",
    published: "October 4th 2005",
    publisher: "Harper Perennial Modern Classics",
    coverUrl: "7-min.jpg",
    price: 24.5
  },
  {
    id: 8,
    title: "Family Matters",
    description: `
      Rohinton Mistry’s enthralling novel is at once a domestic drama and an intently observed portrait of present-day Bombay in all its vitality and corruption. At the age of seventy-nine, Nariman Vakeel, already suffering from Parkinson’s disease, breaks an ankle and finds himself wholly dependent on his family. His step-children, Coomy and Jal, have a spacious apartment (in the inaptly named Chateau Felicity), but are too squeamish and resentful to tend to his physical needs.

      Nariman must now turn to his younger daughter, Roxana, her husband, Yezad, and their two sons, who share a small, crowded home. Their decision will test not only their material resources but, in surprising ways, all their tolerance, compassion, integrity, and faith. Sweeping and intimate, tragic and mirthful, Family Matters is a work of enormous emotional power.
    `,
    author: "Rohinton Mistry",
    published: "November 18th 2003",
    publisher: "Vintage",
    coverUrl: "8-min.jpg",
    price: 4.75
  },
];

const SOUVENIRS = [
  {
    id: 9,
    title: "Annual Bear Chef 2018",
    description: `
      Celebrating one of the most popular departments, the Harrods Annual Bear 2018 has been designed as a tribute to the chefs who work in the store's Food Halls, producing delicious delicacies day after day. Sporting a charming uniform, this jointed character is dress in chef's whites with a check neck tie and hat, just like the chefs who work in store. As the inspiration behind the world-famous Winnie-the-Pooh, the Harrods bear has been a sought-after collectable since sales began in 1906.
    `,
    manufacturer: "Harrods",
    coverUrl: "1-min.jpg",
    price: 40
  },
  {
    id: 10,
    title: "Novello Black Mini Bag",
    description: `
      Alternate between a cross body and a handbag with this Novello bag in a compact size to fit in your essentials. Highlighted by stunning gold-tone hardware, it’s finished with a top zip fastening and our signature logo to the front for stylish recognition. The perfect size bag for days out.
    `,
    manufacturer: "Harrods",
    coverUrl: "2-min.jpg",
    price: 80
  },
  {
    id: 11,
    title: "Novello Chevron Mini Bag",
    description: `
      Alternate between a cross body and a handbag with this Novello minibag in a compact size to fit in your essentials. Fashioned in a classic chevron style, it is accented with stunning gold-tone hardware and finished with a top zip fastening, while our signature logo to the front lends a luxurious finish. The perfect companion for weekend endeavours.
    `,
    manufacturer: "Harrods",
    coverUrl: "2-min.jpg",
    price: 30
  },
];

const mocks = {
  books: BOOKS,
  souvenirs: SOUVENIRS
};

module.exports = mocks;