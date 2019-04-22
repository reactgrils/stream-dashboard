import { handleActions } from "redux-actions";
import { fromJS } from "immutable";
import types from "../actions/constants";

const initialState = fromJS({
  isSuccess: false,
  error: null
});

export default handleActions(
  {
    [types.USER_SIGNIN_FAILURE]: (state, { result }) => {
      const res = state
        .set("isSuccess", result.isSuccess)
        .set("error", result.error);

      return res;
    },
    [types.USER_SIGNIN_SUCCESS]: (state, { result }) => {
      const res = state
        .set("isSuccess", result.isSuccess)
        .set("error", result.error);
      return res;
    }
  },
  initialState
);
