import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.DATA;


export const getAllMovies = (state) => {
  return state[NAME_SPACE].allMovies;
};

export const getPromoMovie = (state) => {
  return state[NAME_SPACE].promoMovie;
};
