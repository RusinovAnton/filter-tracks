export const ADD_TRACK = 'ADD_TRACK';
export const DELETE_TRACK = 'DELETE_TRACK';

export const deleteItem = id => ({
  type: DELETE_TRACK,
  payload: { id },
});

export const addTrack = name => ({
  type: ADD_TRACK,
  payload: {
    id: Date.now().toString(),
    name,
  },
});

export const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TRACK:
      return [...state, action.payload];

    case DELETE_TRACK:
      return state.filter(track => track.id !== action.payload.id);

    default:
      return state;
  }
};

// ======

export const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY';

export const changeSearchQuery = query => ({
  type: CHANGE_SEARCH_QUERY,
  payload: {
    query,
  },
});

export const searchReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_QUERY:
      return action.payload.query;

    default:
      return state;
  }
};
