const intialState = { data: null };

const userprojectReducer = (state = intialState, action) => {
  switch (action.type) {
    case "USER_POSTED_PROJECT":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default userprojectReducer;
