import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducers/portFolioReducer";
import skillsData from "../assets/skills.json";
import projectData from "../assets/projects";

//action types
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SET_UP_USER_BEGIN,
  SET_UP_USER_SUCCESS,
  SET_UP_USER_ERROR,
  LOGOUT_USER,
  GET_CURRENT_USER
} from './types'


export const initialState = {
  isSidebarOpen: false,
  skills: skillsData,
  projects: projectData,
  user: null,
  errorMsg: ''
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

  const setUpUser = async (currentUser)=>{
    dispatch({type:SET_UP_USER_BEGIN})
    const {email, password} = currentUser

    try {
      const { data } = await axios.post(
        `api/v1/user/login`,
        {
          email,
          password
        }
      )
      const { user, isLoggedIn } = data
      dispatch({
        type: SET_UP_USER_SUCCESS,
        payload: {user, isLoggedIn}
      })
      

    } catch (error) {
      console.log(error)
      dispatch({
        type: SET_UP_USER_ERROR,
        payload:{ errorMsg: error.message }
      })
      console.error(error)
    }
  }

  const logoutUser = async ()=>{
    await axios.get(`api/v1/user/logout`)
    dispatch({type:LOGOUT_USER})
  }
  
  const getCurrentUser = async()=>{
    const {data} = await axios.get(`api/v1/user/get-current-user`)
    dispatch({type: GET_CURRENT_USER, payload:data.user})
  }





  return (
    <PortfolioContext.Provider value={{ ...state, openSidebar, closeSidebar, setUpUser, logoutUser, getCurrentUser }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  return useContext(PortfolioContext);
};
