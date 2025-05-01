
export interface Destination {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  shortDescription: string;
  image: string;
  galleryImages: string[];
  location: string;
  category: string[];
  rating: number;
  recentVisitors: number;
  bestTimeToVisit: string;
  nearbyAttractions: string[];
  facts: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const destinations: Destination[] = [
  {
    id: "madurai",
    name: "Madurai Meenakshi Temple",
    description: "The Meenakshi Amman Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwar, a form of Shiva. The temple is at the center of the ancient temple city of Madurai mentioned in the Tamil Sangam literature, with the goddess Meenakshi mentioned in 6th century CE texts.",
    longDescription: "The Meenakshi Amman Temple, also known as Meenakshi Sundareswarar Temple, is a magnificent structure that stands as a testament to the architectural brilliance of ancient India. Built by the Pandyan King Kulasekara, the complex as it stands today was largely designed and constructed during the reign of the Nayak dynasty in the 16th and 17th centuries.\n\nThe temple is renowned for its 14 gopurams (gateway towers), with the tallest southern tower rising to a height of over 170 feet. These towers are adorned with thousands of colorful stone figures of deities, mythical animals, and celestial beings. The Hall of Thousand Pillars is another architectural marvel, featuring intricately carved pillars that produce musical notes when struck.\n\nThe temple follows a systematic daily ritual schedule with ceremonies occurring six times a day, starting with the awakening of the deities at 5 am and concluding with putting them to bed at 9 pm. The annual 10-day Meenakshi Tirukalyanam festival, celebrating the divine wedding of Goddess Meenakshi and Lord Sundareshwar, attracts over a million devotees from across the world.\n\nThe temple tank, known as Porthamarai Kulam (Golden Lotus Tank), is believed to have been judged by Lord Shiva himself for the literary works presented by ancient Tamil poets. The temple museum houses a remarkable collection of ancient artifacts, including stone and bronze sculptures, manuscripts, and traditional ritual objects that provide insights into the rich cultural heritage of the region.",
    shortDescription: "Ancient temple complex with stunning Dravidian architecture and colorful sculptures",
    image: "/lovable-uploads/c83bf634-92c7-48dd-8a78-6dd418c3e66c.png",
    galleryImages: [
      "/lovable-uploads/c83bf634-92c7-48dd-8a78-6dd418c3e66c.png",
      "/lovable-uploads/98f96024-f390-4f7a-a58d-668a5b863a83.png",
      "/lovable-uploads/17519250-d9ec-4951-813a-a5bc01a78fc6.png",
      "/lovable-uploads/6e477c46-143d-492c-b4b6-49133c48ba4b.png",
      "/lovable-uploads/8469330b-a927-46e1-8ada-5d5f3494fde3.png",
      "/lovable-uploads/8aab5c4f-5c7d-4982-90d2-cc3f50237a81.png"
    ],
    location: "Madurai",
    category: ["Temple", "Heritage", "Architecture"],
    rating: 4.9,
    recentVisitors: 358,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Thirumalai Nayakkar Palace", "Gandhi Memorial Museum", "Vandiyur Mariamman Teppakulam"],
    facts: [
      "The temple has 14 gateway towers (gopurams) ranging from 45-50m in height",
      "The temple complex covers around 14 acres",
      "It hosts the famous Chithirai Festival annually",
      "The sculptures on the gopurams are repainted every 12 years",
      "The temple has a golden lotus tank where literary works were once judged",
      "The main tower is visible from every corner of the old city of Madurai"
    ],
    coordinates: {
      lat: 9.9252,
      lng: 78.1198
    }
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram Shore Temple",
    description: "Mahabalipuram, also known as Mamallapuram, is a UNESCO World Heritage Site famous for its stone-carved monuments dating from the 7th and 8th centuries. The Shore Temple is one of the oldest stone temples in South India and represents the final phase of Pallava art. It was built during the reign of Narasimhavarman II, and its architectural style marks the transition from rock-cut architecture to structural building.",
    longDescription: "Mahabalipuram's Shore Temple stands as one of India's most ancient structural temples and a crowning achievement of Pallava architecture. Constructed in the 8th century during the reign of King Narasimhavarman II (700-728 CE), it represents a crucial transition in South Indian temple architecture from rock-cut shrines to structural temples.\n\nThe Shore Temple complex comprises three shrines: two dedicated to Lord Shiva facing east and west, and a smaller shrine dedicated to Lord Vishnu in the form of Anantashayana (reclining on the serpent Adisesha). The central shrine contains a Lingam, the aniconic representation of Lord Shiva. The western shrine houses a relief sculpture of Shiva as Somaskanda, seated with his consort Parvati and their son Skanda.\n\nWhat makes this temple particularly remarkable is its seaside location, where it has withstood the corrosive sea winds, sand, and waves for over thirteen centuries. The structure is built from blocks of granite, cut and stacked with remarkable precision. The temple's spires (shikhara) exemplify early Dravidian architecture with their stepped pyramid style, adorned with miniature structures (shrines) and sculptural elements.\n\nThe exterior walls feature exquisite bas-reliefs, including depictions of Nandi bulls and mythological narratives. The complex was once part of a larger shore complex known to early Europeans as the 'Seven Pagodas,' though only one temple remains visible today. Evidence suggests that additional structures may lie submerged offshore, some briefly revealed during the 2004 tsunami.\n\nArchaeological findings indicate that the Shore Temple was a part of a larger port city of the Pallava dynasty. The temple's orientation was carefully designed to catch the first rays of the rising sun, creating a magnificent spectacle when sunlight illuminates the shrine of Lord Shiva.",
    shortDescription: "UNESCO heritage site featuring ancient rock-cut temples and monuments",
    image: "/lovable-uploads/8a3a97c9-80b2-4392-ac1c-e0ce5aa1caa8.png",
    galleryImages: [
      "/lovable-uploads/8a3a97c9-80b2-4392-ac1c-e0ce5aa1caa8.png",
      "/lovable-uploads/aaed08a4-c58f-47b3-8ddd-2bdc51244500.png",
      "/lovable-uploads/75c7044e-4fcf-4a0c-b8c5-f0cb83362992.png",
      "/lovable-uploads/56060a17-5dfa-4503-aa86-18b03713ecd6.png",
      "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581517175577-3888ed41d4b5?w=800&auto=format&fit=crop"
    ],
    location: "Mahabalipuram",
    category: ["Heritage", "Architecture", "Beach"],
    rating: 4.7,
    recentVisitors: 245,
    bestTimeToVisit: "November to February",
    nearbyAttractions: ["Arjuna's Penance", "Pancha Rathas", "Krishna's Butter Ball"],
    facts: [
      "The Shore Temple has survived the corrosive sea for over 1300 years",
      "It was called the 'Seven Pagodas' by European sailors",
      "The site was hit by a tsunami in 2004, which revealed previously undiscovered temples",
      "It's one of the oldest structural stone temples in South India",
      "The temple is carved from a single granite boulder",
      "It features one of the earliest depictions of Durga in South Indian art"
    ],
    coordinates: {
      lat: 12.6269,
      lng: 80.1928
    }
  },
  {
    id: "thanjavur",
    name: "Brihadeeswarar Temple",
    description: "The Brihadeeswarar Temple, also called Rajarajesvaram or Peruvudaiyar Kovil, is a Hindu temple dedicated to Shiva located in Thanjavur, Tamil Nadu. Built by Raja Raja Chola I between 1003 and 1010 CE, the temple is part of the UNESCO World Heritage Site known as the 'Great Living Chola Temples'. The temple stands amidst fortified walls that were added after the original construction.",
    longDescription: "The Brihadeeswarar Temple, also known as Rajarajesvaram or Peruvudaiyar Kovil, is an architectural marvel of the Chola dynasty. Built by Raja Raja Chola I, it celebrated its 1000th anniversary in 2010. The temple's vimana (tower) rises to a height of 216 feet, making it one of the tallest of its kind in the world.\n\nThe temple is built entirely of granite, with an estimated 130,000 tons of the material used in its construction. The crowning element, a massive dome carved from a single granite block weighing 80 tons, was placed atop the tower using an inclined plane extending over several kilometers – a remarkable engineering feat for its time.\n\nThe inner sanctum houses a massive Shiva lingam, and the walls are adorned with exquisite murals and sculptures depicting various forms of Shiva and scenes from Hindu mythology. The temple complex includes numerous smaller shrines, a massive Nandi (bull) statue carved from a single stone, and several mandapams (pillared halls).\n\nUnlike many other temples that underwent significant modifications over centuries, the Brihadeeswarar Temple has largely maintained its original Chola-era architecture. This preservation has made it an invaluable resource for understanding medieval South Indian temple architecture and Chola artistic expression.\n\nThe temple also houses a gallery of Chola frescoes, discovered beneath later Nayak paintings, which provide insights into the artistic traditions of the period. The complex's acoustics are another remarkable feature, with sounds reverberating throughout the structure in specific patterns designed to enhance ritual chanting.",
    shortDescription: "UNESCO heritage site and masterpiece of Chola architecture",
    image: "/lovable-uploads/86daf1cc-71bf-4c43-a8a7-360996396a46.png",
    galleryImages: [
      "/lovable-uploads/86daf1cc-71bf-4c43-a8a7-360996396a46.png",
      "/lovable-uploads/0787cdb1-9a9b-4ee1-a754-03ba065410e4.png",
      "https://images.unsplash.com/photo-1605797406302-1b3a2ca3eea5?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575486980978-29a840d32223?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614090869432-bb2d69c97734?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588772682623-1ce926d37fd0?w=800&auto=format&fit=crop"
    ],
    location: "Thanjavur",
    category: ["Temple", "Heritage", "Architecture"],
    rating: 4.8,
    recentVisitors: 189,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Thanjavur Palace", "Saraswathi Mahal Library", "Schwartz Church"],
    facts: [
      "The temple's vimana (tower) is 216 feet high",
      "The temple was built using granite, and the top stone (Kumbam) weighs around 80 tons",
      "It's the first complete granite temple in the world",
      "The shadow of the temple's tower never falls on the ground at noon",
      "The temple has survived multiple earthquakes due to its architectural design",
      "The temple walls contain inscriptions detailing the administrative and financial regulations of the era"
    ],
    coordinates: {
      lat: 10.7827,
      lng: 79.1318
    }
  },
  {
    id: "ooty",
    name: "Nilgiri Mountain Railway",
    description: "The Nilgiri Mountain Railway is a 1,000 mm meter gauge railway in Tamil Nadu, built by the British in 1908. The railway is operated by the Southern Railway and is the only rack railway in India. In July 2005, UNESCO added the Nilgiri Mountain Railway as an extension to the World Heritage Site of Darjeeling Himalayan Railway.",
    longDescription: "The Nilgiri Mountain Railway, a marvel of engineering ingenuity, offers travelers a journey through time and stunning landscapes. Constructed by the British in 1908, this 46-kilometer heritage railway line winds through 16 tunnels and over 250 bridges, climbing from an elevation of 326 meters at Mettupalayam to 2,203 meters at Ooty (Udhagamandalam).\n\nWhat makes this railway unique is its use of a rack and pinion system on the steepest sections, allowing the trains to climb gradients as steep as 1 in 12.5. The blue and cream steam locomotives that pull the carriages up the mountains are over 70 years old and were manufactured by the Swiss Locomotive and Machine Works.\n\nThe journey takes approximately 4.5 hours, traversing diverse ecosystems from the tropical lower plains through dense forests to the cool climate of the Nilgiri hills. Passengers are treated to breathtaking views of deep ravines, lush tea plantations, winding streams, and quaint villages.\n\nIn popular culture, the Nilgiri Mountain Railway has been immortalized in several Indian films, most notably in the song 'Chaiyya Chaiyya' from the 1998 film 'Dil Se'. Its historical significance and unique features led to its UNESCO World Heritage status in 2005.\n\nDespite modernization efforts over the years, the railway largely maintains its original features and charm, offering visitors not just transportation but a nostalgic journey through colonial heritage and natural beauty. The train makes stops at picturesque stations like Hillgrove, Wellington, Lovedale, and finally Ooty, each with its own historical significance and attractions.",
    shortDescription: "UNESCO heritage toy train offering breathtaking views of the Nilgiri Hills",
    image: "/lovable-uploads/0be94e98-fd32-4f0d-82cd-d8369741be3f.png",
    galleryImages: [
      "/lovable-uploads/0be94e98-fd32-4f0d-82cd-d8369741be3f.png",
      "/lovable-uploads/b92274e8-ee1d-4cbf-bbab-583737ac329e.png",
      "/lovable-uploads/a4cc51f8-bd0b-4158-8725-e645ac7059c5.png",
      "/lovable-uploads/4afbeace-faaa-484a-a3e3-a0b4b8a1f364.png",
      "/lovable-uploads/00c504bc-ffeb-47a1-bfb4-4cc0df491f66.png",
      "https://images.unsplash.com/photo-1625804335222-6b932fab9927?w=800&auto=format&fit=crop"
    ],
    location: "Ooty",
    category: ["Hill Station", "Heritage", "Transport"],
    rating: 4.6,
    recentVisitors: 276,
    bestTimeToVisit: "April to June, September to November",
    nearbyAttractions: ["Botanical Gardens", "Doddabetta Peak", "Ooty Lake"],
    facts: [
      "The train climbs from 326m to 2,203m",
      "It uses a unique rack and pinion system to climb steep gradients",
      "The journey covers 46 km and takes about 5 hours",
      "The railway has featured in many popular Indian films",
      "Some of the steam locomotives are over 70 years old",
      "The railway passes through 16 tunnels and over 250 bridges"
    ],
    coordinates: {
      lat: 11.4102,
      lng: 76.6950
    }
  },
  {
    id: "kanyakumari",
    name: "Kanyakumari",
    description: "Kanyakumari is the southernmost tip of mainland India where three oceans - the Bay of Bengal, the Arabian Sea, and the Indian Ocean - meet. The place is famous for its beautiful sunrise and sunset views and the Vivekananda Rock Memorial, which stands on a small rock island off the shore. The town is named after the goddess Kanyakumari (Devi Kumari), who is believed to be the sister of Lord Krishna.",
    longDescription: "Kanyakumari, the southernmost tip of peninsular India, is a geographic and cultural confluence of extraordinary significance. This small coastal town marks the meeting point of three major water bodies: the Bay of Bengal, the Arabian Sea, and the Indian Ocean, creating a unique spectacle where you can witness distinct wave patterns and colors merging together.\n\nThe town derives its name from the ancient Kumari Amman or Kanyakumari Temple, dedicated to a manifestation of Goddess Parvati who remains eternally a virgin (Kanya) to save the world from the demon Banasura. The temple houses a sparkling diamond nose-ring that is famous for its shine, visible even from the sea.\n\nPerhaps the most iconic landmark is the Vivekananda Rock Memorial, built on a small rocky island about 500 meters from the shore. It marks the spot where Swami Vivekananda, a key figure in introducing Indian philosophies to the West, is said to have attained enlightenment. Adjacent to it stands the towering 133-foot Thiruvalluvar Statue, honoring the Tamil poet-saint who authored the Thirukkural, a classic of Sangam literature.\n\nKanyakumari offers the rare opportunity to witness both sunrise and sunset over the ocean from the same spot. During Chitra Pournami (the full moon in April) and on December 21-22, visitors can observe a special phenomenon where the sunset and moonrise occur simultaneously, painting the sky in spectacular hues.\n\nThe town also has significant historical importance, having been part of the ancient Chera, Chola, and Pandya kingdoms before coming under the rule of the Travancore state. This rich heritage is reflected in its architecture, cuisine, and cultural traditions that blend Tamil and Kerala influences.",
    shortDescription: "India's southernmost point where three oceans meet",
    image: "/lovable-uploads/1.jpeg",
    galleryImages: [
      "/lovable-uploads/1.jpeg", 
      "/lovable-uploads/2.jpeg",
      "/lovable-uploads/3.jpeg",
      "/lovable-uploads/4.jpeg",
      "/lovable-uploads/5.jpeg",
      "/lovable-uploads/1.jpeg"
    ],
    location: "Kanyakumari",
    category: ["Coastal", "Pilgrimage", "Scenic"],
    rating: 4.5,
    recentVisitors: 312,
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Padmanabhapuram Palace"],
    facts: [
      "It's the only place in India where you can witness both sunrise and sunset over the ocean",
      "The Vivekananda Rock Memorial is built where Swami Vivekananda attained enlightenment",
      "On full moon days, you can sometimes see the 'Moonrise and Sunset' at the same time",
      "It's the meeting point of three oceans: the Bay of Bengal, the Arabian Sea, and the Indian Ocean",
      "The diamond nose-ring of the Kanyakumari deity is said to be visible from the sea",
      "During the winter solstice, the sun sets and rises directly facing the shore"
    ],
    coordinates: {
      lat: 8.0883,
      lng: 77.5385
    }
  },
  {
    id: "sittanavasal-cave",
    name: "Sittanavasal Cave",
    description: "Ancient Jain rock-cut cave known for its rare frescoes",
    longDescription: "The Sittanavasal Cave, located in Pudukottai district, is a 2nd-century rock-cut Jain monastery. It is celebrated for its rare frescoes, which are among the few surviving examples of early Indian mural paintings.\n\nThe cave features inscriptions in Tamil Brahmi script and exquisite wall paintings created using natural dyes. These depict lotus ponds, animals, dancing figures, and scenes of daily life and Jain symbolism.\n\nSittanavasal is a hidden gem for art historians and spiritual seekers, representing Tamil Nadu’s ancient Jain heritage and artistic finesse.",
    shortDescription: "Jain cave monastery with rare 2nd-century frescoes",
    image: "/lovable-uploads/11.jpeg",
    galleryImages: [
      "/lovable-uploads/12.jpeg",
      "/lovable-uploads/13.jpeg"
    ],
    location: "Pudukottai",
    category: ["Cave", "Heritage", "Art"],
    rating: 4.4,
    recentVisitors: 67,
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Thirumayam Fort", "Kudumiyanmalai Temple", "Brahadambal Temple"],
    facts: [
      "Features ancient Jain beds carved into stone",
      "Paintings are created with natural vegetable dyes",
      "One of the oldest surviving mural sites in India",
      "Known as the 'Ajanta of Tamil Nadu'"
    ],
    coordinates: {
      lat: 10.3795,
      lng: 78.6837
    }
  },

  {
    id: "airavatesvara-temple",
    name: "Airavatesvara Temple",
    description: "Intricate 12th-century Chola temple known for its sculptural beauty",
    longDescription: "The Airavatesvara Temple, located in Darasuram near Kumbakonam, is a UNESCO World Heritage Site built by Rajaraja Chola II in the 12th century. The temple is dedicated to Lord Shiva and is celebrated for its architectural detail and fine stone carvings.\n\nLegend says the temple was named after Airavata, the white elephant of Indra, who worshipped Shiva here. The temple complex is smaller than the Brihadeeswarar Temple but features more elaborate sculpture work.\n\nThe mandapam (hall) is designed like a chariot with wheels and horses, and the musical steps at the entrance produce different musical notes when tapped.",
    shortDescription: "UNESCO temple famous for musical steps and sculpture",
    image: "/lovable-uploads/14.jpeg",
    galleryImages: [
      "/lovable-uploads/15.jpeg",
      "/lovable-uploads/16.jpeg"
    ],
    location: "Darasuram",
    category: ["Temple", "Heritage", "Architecture"],
    rating: 4.7,
    recentVisitors: 89,
    bestTimeToVisit: "November to March",
    nearbyAttractions: ["Kumbakonam Temples", "Gangaikonda Cholapuram", "Swamimalai Temple"],
    facts: [
      "Famous for its stone steps that produce musical notes",
      "Built during the reign of Rajaraja Chola II",
      "Part of the UNESCO Great Living Chola Temples group",
      "Richly decorated with mythological scenes and miniature sculptures"
    ],
    coordinates: {
      lat: 10.9577,
      lng: 79.3647
    }
  },
  {
    id: "gangaikonda-cholapuram",
    name: "Gangaikonda Cholapuram Temple",
    description: "A grand Chola-era temple built to commemorate a victorious king",
    longDescription: "The Gangaikonda Cholapuram Temple, located in Ariyalur district, was built in the 11th century CE by Rajendra Chola I, the son of Raja Raja Chola I. Modeled after the Brihadeeswarar Temple in Thanjavur, it served as the capital of the Chola Empire for 250 years.\n\nThe temple stands as a testament to Chola engineering, sculpture, and power, featuring a 182-foot tall vimana (tower), intricate carvings, and a massive Shiva lingam. Unlike its predecessor, the sculptures here exhibit more refinement and artistic maturity.\n\nIt remains less commercialized, preserving a tranquil spiritual atmosphere and authentic Chola grandeur.",
    shortDescription: "Chola capital with refined Dravidian temple architecture",
    image: "/lovable-uploads/17.jpeg",
    galleryImages: [
      "/lovable-uploads/18.jpeg",
      "/lovable-uploads/19.jpeg"
    ],
    location: "Jayankondam",
    category: ["Temple", "Heritage", "Architecture"],
    rating: 4.6,
    recentVisitors: 124,
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Airavatesvara Temple", "Darasuram", "Chidambaram Temple"],
    facts: [
      "Built by Rajendra Chola I after his conquest of northern India",
      "Its name means 'The town of the Chola who conquered the Ganga'",
      "Has one of the largest Shiva lingams in South India",
      "Designated as part of the UNESCO 'Great Living Chola Temples'"
    ],
    coordinates: {
      lat: 11.2003,
      lng: 79.4607
    }
  },  
  
  

  {
    id: "rameshwaram",
    name: "Ramanathaswamy Temple",
    description: "The Ramanathaswamy Temple is a famous Hindu temple dedicated to the god Shiva located on Rameswaram island in Tamil Nadu. It is one of the twelve Jyotirlinga temples, where Shiva is worshipped as a Jyotirlinga, and is also one of the Char Dham pilgrimage sites. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Lanka.",
    longDescription: "The Ramanathaswamy Temple in Rameswaram is a masterpiece of Dravidian architecture and one of the holiest shrines in Hinduism. According to the Ramayana, Lord Rama worshipped Lord Shiva here to cleanse himself of the sin of killing Ravana, who was a Brahmin. The temple's current structure was built during the 12th century, with significant expansions made by various rulers, particularly the Sethupathi kings of Ramanathapuram in the 17th century.\n\nThe temple is renowned for its magnificent corridors, which are the longest in India. The third corridor, with its 1212 intricately carved pillars stretching for nearly 4000 feet, creates a breathtaking play of light and shadow throughout the day. The eastern tower (gopuram) rises to a height of 126 feet, visible from far out at sea, and has traditionally served as a landmark for ships.\n\nWhat makes this temple unique are its 22 sacred water bodies (theerthams) within the temple complex, and an additional 22 outside the temple. Pilgrims traditionally bathe in these wells as part of a purification ritual before worshipping, with each theertham believed to possess distinct spiritual properties. The Agni Theertham, located on the seashore, is considered particularly sacred.\n\nThe temple's intricate sculptures depict scenes from the Ramayana and Shaivite traditions. The Sethu Karai, the point from which Rama's bridge to Lanka was believed to have been built, is just a few kilometers away. From certain vantage points in the temple, one can see Sri Lanka on a clear day, bringing the ancient epic to life for visitors.\n\nUnlike many other temples that restrict entry based on faith, the Ramanathaswamy Temple welcomes visitors of all religions, making it an important center for cultural exchange and spiritual harmony.",
    shortDescription: "Sacred pilgrimage site with the longest corridor temple in India",
    image: "/lovable-uploads/44036966-125e-41a8-a0d5-0768895ba0d8.png",
    galleryImages: [
      "/lovable-uploads/44036966-125e-41a8-a0d5-0768895ba0d8.png",
      "/lovable-uploads/0c593c0f-b833-481b-90c1-6f1d17b44242.png",
      "https://images.unsplash.com/photo-1566570760220-bfa7bb260ca9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591185330844-495651ad7327?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592467116633-32882acb4ba2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop"
    ],
    location: "Rameshwaram",
    category: ["Temple", "Pilgrimage", "Coastal"],
    rating: 4.7,
    recentVisitors: 198,
    bestTimeToVisit: "October to April",
    nearbyAttractions: ["Dhanushkodi", "Pamban Bridge", "APJ Abdul Kalam Memorial"],
    facts: [
      "The temple has the longest corridor among all Hindu temples in India",
      "It has 22 theerthams (wells) inside the temple complex",
      "The temple's third corridor is famous for its 1212 pillars",
      "According to mythology, Lord Rama worshipped Lord Shiva here",
      "It is one of the Char Dham pilgrimage sites",
      "The temple has been mentioned in ancient Tamil Sangam literature"
    ],
    coordinates: {
      lat: 9.2876,
      lng: 79.3129
    }
  }
];
