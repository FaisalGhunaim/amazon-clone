import { createContext, useContext, useReducer } from "react";
import App from "../App";
export const StateContext = createContext();
export const StateProvider = ({ children, initialState, reducer }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
