const cases = {
  MOVIE_VALUE: (state, payload) => ({
    ...state,
    movie: payload,
  })
};

const reducer = (state, action) => {
  return cases[action.type](state, action.payload);
};

export default reducer;