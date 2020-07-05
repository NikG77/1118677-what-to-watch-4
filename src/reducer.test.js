import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {films} from "./mock/films.js";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {
  })).toEqual({
    allMovies: films,
    genreMovies: films,
    movie: null,
    genre: `All genres`,
    movieCount: 4,
  });
});

it(`Action creator set genre correct`, () => {
  expect(reducer({
    allMovies: films,
    genreMovies: films,
    movie: null,
    genre: `All genres`,
    movieCount: 4,
  }, {
    type: ActionType.SET_GENRE,
    payload: `Drama`,
  })).toEqual({
    allMovies: films,
    genreMovies: films,
    movie: null,
    genre: `Drama`,
    movieCount: 4,
  });
});

it(`Action creator set film correct`, () => {
  expect(reducer({
    allMovies: films,
    genreMovies: films,
    movie: null,
    genre: `Drama`,
    movieCount: 4,
  }, {
    type: ActionType.SET_FILM,
    payload: films[0],
  })).toEqual({
    allMovies: films,
    genreMovies: films,
    movie: films[0],
    genre: `Drama`,
    movieCount: 4,
  });
});

it(`Action creator get films correct`, () => {
  expect(reducer({
    allMovies: films,
    genreMovies: films,
    movie: films[1],
    genre: `Comedy`,
    movieCount: 4,
  }, {
    type: ActionType.GET_FILM,
  })).toEqual({
    allMovies: films,
    genreMovies: films,
    movie: films[1],
    genre: `Comedy`,
    movieCount: 4,
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator set genre correctly`, () => {
    expect(ActionCreator.setGenre(`Drama`)).toEqual({
      type: ActionType.SET_GENRE,
      payload: `Drama`,
    });
  });

  it(`Action creator set film correctly`, () => {
    expect(ActionCreator.setFilm({
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
    })).toEqual({
      type: ActionType.SET_FILM,
      payload: {
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
      },
    });
  });

  it(`Action creator get film correctly`, () => {
    expect(ActionCreator.getFilms()).toEqual({
      type: ActionType.GET_FILMS,
    });
  });

});


