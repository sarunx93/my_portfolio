import { SIDEBAR_OPEN, 
  SIDEBAR_CLOSE,
  SET_UP_USER_BEGIN,
  SET_UP_USER_SUCCESS,
  SET_UP_USER_ERROR } from "../context/types";


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
  throw new Error(`No matching ${action.type} - action type`);
};

export default portfolio_reducer;
