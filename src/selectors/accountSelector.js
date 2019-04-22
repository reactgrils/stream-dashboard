import { createSelector } from 'reselect';

// const getAccountState = state => state.accountList.getIn(['result']);
const getAccountState = state => {
  const res = state.accountList.getIn(['result']).toArray()[0]
  return res;
}

export const getAccountList = createSelector([getAccountState], accounts => accounts
)