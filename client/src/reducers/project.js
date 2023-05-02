const initialState = { data: null };

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_PROJECT':
      return { ...state };
    case 'FETCH_ALL_PROJECTS':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
