import { SIDEBAR_OPEN, 
  SIDEBAR_CLOSE,
  SET_UP_USER_BEGIN,
  SET_UP_USER_SUCCESS,
  SET_UP_USER_ERROR,
  LOGOUT_USER, 
  GET_CURRENT_USER} from "../context/types";

import { initialState } from "../context/portfolioContext";


const portfolio_reducer = (state, action) => {
  
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if(action.type === SET_UP_USER_BEGIN){
    return {...state, isLoading: true}
  }
  
  if(action.type === SET_UP_USER_SUCCESS){
    return {
          ...state, 
          isLoading: false,
          user: action.payload.user,
          isLoggedIn: action.payload.isLoggedIn
        }
  }

  if(action.type === SET_UP_USER_ERROR){
    return{
      ...state,
      isLoading:false,
      errorMsg: action.payload.errorMsg
    }
  }

  if(action.type === LOGOUT_USER){
    return{
      ...initialState
    }
  }

  if(action.type === GET_CURRENT_USER){
    console.log(action.payload)
    return{
      ...state,
      isLoading: false,
      user: action.payload
    }
  }
  throw new Error(`No matching ${action.type} - action type`);
};

export default portfolio_reducer;
