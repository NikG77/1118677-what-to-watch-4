export const adapterFilm = (film) => {
  return {
    id: film.id,
    director: film.director,
    duration: film.run_time,
    genre: film.genre,
    pictureBackground: film.background_image,
    poster: film.poster_image,
    previewVideo: film.preview_video_link,
    ratingCount: film.scores_count,
    ratingScore: film.rating,
    releaseDate: film.released,
    src: film.background_image,
    starring: film.starring,
    title: film.name,

    backgroundColor: film.background_color,
    videoLink: film.video_link,
    description: film.description,
    isFavorite: film.is_favorite,
  };

};

export const adapterFilms = (films) => films.map((film) => adapterFilm(film));
