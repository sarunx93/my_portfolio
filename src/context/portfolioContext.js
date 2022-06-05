import React, { useContext, useReducer } from "react";
import reducer from "../reducers/portFolioReducer";
import skillsData from "../assets/skills.json";

const initialState = {
  isSidebarOpen: false,
  skills: skillsData,
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
