const StarringFilm = {
  MIN: 5,
  MAX: 8,
};

const DirectorItems = [`Quentin Tarantino`, `Clint Eastwood`, `Tom Ford`, `Brad Bird`, `Chrostopher Nolan`, `Alejandro Gonsales Inarritu`, `Akira Kurosawa`, `James Cameron`];

const StarringItems = [`Robert De Niro`, `Matt Damon`, `Tom Hanks`, `Takeshi Kitano`, `Christian Bale`, `Gary Oldman`, `Harrison Ford`, `Ralph Fiennes`, `Morgan Freeman `, `Michael Caine`, `Brad Pitt`, `Leonardo DiCaprio`, `Edward Norton`, `Al Pacino`, `Cillian Murphy`];

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomRating = () => {
  return Math.floor(Math.random() * (100 + 1)) / 10;
};

const getRandomArray = function (array, min, max) {
  const numberRandom = getRandomIntegerNumber(min, max);
  const arrayClon = array.slice();
  const arrayNew = [];
  let numberArrayRandom;

  for (let i = 0; i < numberRandom; i++) {
    numberArrayRandom = getRandomIntegerNumber(0, arrayClon.length - 1);
    arrayNew.push(arrayClon[numberArrayRandom]);
    arrayClon.splice(numberArrayRandom, 1);
  }
  return arrayNew;
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

export const mainFilm = {
  genre: `Drama`,
  title: `The Grand Budapest Hotel`,
  releaseDate: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`
};

export const films = [
  {title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Comedy`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: getRandomIntegerNumber(50, 150),
  },
  {title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Drama`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: getRandomIntegerNumber(50, 150),
  },
  {title: `Macbeth Aviator`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Drama`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: getRandomIntegerNumber(50, 150),
  },
  {title: `We need to talk about Kevin`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Documentary`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: getRandomIntegerNumber(50, 150),
  },
  {title: `What We Do in the Shadows Revenant`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Horror`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: getRandomIntegerNumber(50, 150),
  },
  {title: `Johnny English`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Romance`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: getRandomIntegerNumber(50, 150),
  },
  {title: `Pulp Fiction`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Sci-Fi`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: getRandomIntegerNumber(50, 150),
  },
  {title: `No Country for Old Men`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Kids & Family`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: getRandomIntegerNumber(50, 150),
  }
];


export const reviews = [
  {
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Quentin Tarantino`,
    date: new Date(`2014-10-05`),
    rating: 8,
    id: `1`,
  },
  {
    text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    author: `Alejandro Gonsales Inarritu`,
    date: new Date(`2014-11-05`),
    rating: 7,
    id: `2`,
  },
  {
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    author: `Akira Kurosawa`,
    date: new Date(`2014-10-20`),
    rating: 8,
    id: `3`,
  },
  {
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    author: `James Cameron`,
    date: new Date(`2018-01-05`),
    rating: 8,
    id: `4`,
  },
  {
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    author: `Clint Eastwood`,
    date: new Date(`2019-9-05`),
    rating: 6.7,
    id: `5`,
  },
  {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    author: `Tom Ford`,
    date: new Date(`2020-01-01`),
    rating: 1.9,
    id: `6`,
  },
];

