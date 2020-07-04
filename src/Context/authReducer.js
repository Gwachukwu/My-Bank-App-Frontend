import {
  LOGIN_USER,
  LOGOUT_USER,
  LOAD_USER,
  REMOVE_USER,
  SET_ROUTE,
} from "./authState";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: null,
        loading: null,
        route: "",
      };
    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: null,
      };
    case SET_ROUTE:
      return {
        ...state,
        route: "access",
      };
    default:
      return state;
  }
};
