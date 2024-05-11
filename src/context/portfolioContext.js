import React, { useContext, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/portFolioReducer";
import skillsData from "../assets/skills.json";
import projectData from "../assets/projects";

//action types
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SET_UP_USER_BEGIN,
  SET_UP_USER_SUCCESS
} from './types'


const initialState = {
  isSidebarOpen: false,
  skills: skillsData,
  projects: projectData,
  user: null
};



const PortfolioContext = React.createContext();

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  //functions
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const setUpUser = async ()=>{
    dispatch({type:SET_UP_USER_BEGIN})

    try {
      const { data } = await axios.post(
        `api/v1/user/login`,
        {
          email: 'Alan3@gmail.com',
          password: '123456'
        }
      )
      const { user, isLoggedIn } = data
      dispatch({
        type: SET_UP_USER_SUCCESS,
        payload: {user, isLoggedIn}
      })
      

    } catch (error) {
      console.error(error)
    }
  }



  return (
    <PortfolioContext.Provider value={{ ...state, openSidebar, closeSidebar, setUpUser }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  return useContext(PortfolioContext);
};
