const initialState = { data: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      localStorage.setItem('Profile', JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };

    case 'LOGOUT':
      localStorage.removeItem('Profile');
      return { ...state, data: null };

    default:
      return state;
  }
};

export default authReducer;
