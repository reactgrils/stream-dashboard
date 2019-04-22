import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

import types from '../actions/constants';

const initialState = Map({
  result: List([])
});

export default handleActions(
  {
    [types.ACCOUNT_DATALIST]: (state, { result }) => {
      const res = state.updateIn(['result'], arr => arr.push(result));
      return res;
    }
  },
  initialState
)