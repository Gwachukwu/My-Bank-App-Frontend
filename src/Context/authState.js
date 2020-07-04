import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
export const LOAD_USER = "LOAD USER";
export const REMOVE_USER = "REMOVE USER";
export const LOGIN_USER = "LOGIN USER";
export const LOGOUT_USER = "LOGOUT USER";
export const SET_ROUTE = "SET ROUTE";
const AuthState = (props) => {
  const initialState = {
    isAuthenticated: localStorage.isAuthenticated,
    loading: true,
    user: {
      isAdmin: false,
    },
    route:"",
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  const loginUser = () => {
    dispatch({ type: LOGIN_USER });
  };
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
  };
  const loadUser = (user) => {
    dispatch({ type: LOAD_USER, payload: user });
  };
  const removeUser = () => {
    dispatch({ type: REMOVE_USER });
  };
  const setRoute = () => {
    dispatch({ type: SET_ROUTE });
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        route: state.route,
        loginUser,
        logoutUser,
        loadUser,
        removeUser,
        setRoute,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
