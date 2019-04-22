import { handleActions } from "redux-actions";
import { fromJS } from "immutable";
import types from "../actions/constants";

const initialState = fromJS({
  isSuccess: false,
  error: null,
  result: null
});

export default handleActions(
  {
    [types.USER_SIGNUP_SUCCESS]: (state, action) =>
      state.set("isSuccess", action.isSuccess),
    [types.USER_SIGNUP_FAILURE]: (state, action) =>
      state.set("isSuccess", action.isSuccess).set("error", action.error)
  },
  initialState
);
