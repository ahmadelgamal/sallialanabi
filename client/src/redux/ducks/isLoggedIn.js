const LOGIN = "login";
const LOGOUT = "logout";

export const login = () => ({
  type: LOGIN
});

export const logout = () => ({
  type: LOGOUT
});

const initialState = {
  loggedIn: false
};

export default function isLoggedIn(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: true };
    case LOGOUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};
