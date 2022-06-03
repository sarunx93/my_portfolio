import React, { useContext, useReducer } from "react";
import reducer from "../reducers/portFolioReducer";
const initialState = {
  isSidebarOpen: false,
};

const PortfolioContext = React.createContext();

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };
  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };
  return (
    <PortfolioContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  return useContext(PortfolioContext);
};
