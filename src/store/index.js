import React, { createContext, useReducer, useRef } from "react";
import {rootReducer} from '../reducers/root';
import store from './store';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, store);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
