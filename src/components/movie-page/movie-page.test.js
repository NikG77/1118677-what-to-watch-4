import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../const.js";
import history from "../../history.js";
import {Router} from "react-router-dom";


const mockStore = configureStore([]);

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
    genre: ``,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: ``,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 1,
  }
];

it(`Should MoviePage render correctly`, () => {

  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Provider store={store}>
            <MoviePage
              id={1}
              film={films[0]}
              genreFilms={films}
              onGetComments={() => {}}
            />
          </Provider>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
