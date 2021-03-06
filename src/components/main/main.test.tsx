import * as React from "react";
import * as renderer from "react-test-renderer";
import {Main} from "./main";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../const";
import history from "../../history";
import {Router} from "react-router-dom";
import {FilmType} from "../../types";
import {noon} from "../../utils/utils";

const mockStore = configureStore([]);

const films: Array<FilmType> = [
  {title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Comedies`,
    releaseDate: 2020,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 1,
  },
  {title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Drama`,
    releaseDate: 2020,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 0,
  },
  {title: `Macbeth Aviator`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Drama`,
    releaseDate: 2011,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 2,
  },
  {title: `We need to talk about Kevin`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``], genre: `Documentary`,
    releaseDate: 2020,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 13,
  },
  {title: `What We Do in the Shadows Revenant`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Horror`,
    releaseDate: 2020,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 4,
  },
  {title: `Johnny English`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Romance`,
    releaseDate: 2020,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 5,
  },
  {title: `Pulp Fiction`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Sci-Fi`,
    releaseDate: 1988,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 6,
  },
  {title: `No Country for Old Men`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Kids & Family`,
    releaseDate: 1999,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 7,
  }
];


const mainFilm: FilmType = {
  genre: ``,
  title: `One Flew Over the Cuckoo's Nest`,
  releaseDate: 2014,
  poster: ``,
  pictureBackground: ``,
  previewVideo: ``,
  src: ``,
  ratingScore: 5,
  ratingCount: 100,
  director: ` `,
  starring: [``, ``],
  duration: 100,
  backgroundColor: ``,
  videoLink: ``,
  description: ` `,
  isFavorite: false,
  id: 1,
};

it(`Should Main render correctly`, () => {

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });


  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <Main
              activeGenre={``}
              genreFilms={films}
              genresList={[]}
              mainFilm={mainFilm}
              onGenreItemClick={noon}
            />
          </Provider>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

