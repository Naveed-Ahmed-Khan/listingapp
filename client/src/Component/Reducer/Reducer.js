import { combineReducers } from "redux";
// login Reducer
const logIn = (state = { payload: "" }, action) => {
  if (action.type === "Login") {
    return { ...state, payload: action.data };
  }

  return state;
};

// login Reducer
const userInfo = (state = { payload: "" }, action) => {
  if (action.type === "UserInfo") {
    return { ...state, payload: action.data };
  }

  return state;
};

// Nav Reducer
const ActiveNav = (state = { payload: "Home" }, action) => {
  if (action.type === "ActiveNav") {
    return { ...state, payload: action.data };
  }

  return state;
};

// to handle Main Search
const MainSearch = (state = { payload: "" }, action) => {
  if (action.type === "MainSearch") {
    return { ...state, payload: action.data };
  }

  return state;
};

const allreducers = combineReducers({
  logIn,
  userInfo,
  ActiveNav,
  MainSearch,
});
export default allreducers;
