// import { combineReducers } from 'redux-immutable';
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form/immutable";
import signinReducer from "./signinReducer";
import signupReducer from "./signupReducer";
import accountsReducer from './accountReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  signin: signinReducer,
  form: formReducer,
  accountList: accountsReducer
});

export default rootReducer;
